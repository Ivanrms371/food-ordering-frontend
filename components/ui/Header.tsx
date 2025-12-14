"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import {
  StopCircleIcon,
  PlayCircleIcon,
  ShoppingCartIcon,
  UserIcon,
  Bars2Icon,
} from "@heroicons/react/24/outline";
import { navLinks } from "@/constants/navigation";
import { useAuthStore } from "@/store/auth.store";
import { isRestaurantOpen } from "@/utils/open-status";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { NavigationMenu } from "@/components/sections/NavigationMenu";
import { UserMenu } from "./UserMenu";
import { useCartStore } from "@/store/cart.store";
import { useCartUIStore } from "@/store/cart-ui.store";

export const Header = () => {
  const { isAuthenticated, isLoading } = useAuthStore();
  const { getCartLength } = useCartStore();
  const { openCart } = useCartUIStore();

  const totalItems = getCartLength();

  const pathname = usePathname();
  const [showHeader, setShowHeader] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const scroll = window.scrollY;
    setShowHeader(scroll < 100);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll < 100) {
        setShowHeader(true);
      } else {
        if (currentScroll > lastScroll) {
          setShowHeader(false);
          setIsUserMenuOpen(false);
        } else {
          setShowHeader(true);
        }
      }

      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScroll]);

  return (
    <>
      <div
        className={twMerge(
          "w-full fixed flex flex-col gap-1 z-4 transition duration-700 ease-in-out bg-white",
          showHeader ? "translate-y-0 shadow-md" : "-translate-y-full",
          showHeader && lastScroll < 100 && "shadow-none"
        )}
      >
        <header
          className={twMerge(
            "container w-full flex items-center justify-between z-40 transition-all duration-700 ease-in-out",
            showHeader && lastScroll > 100 ? "h-24" : "h-28"
          )}
        >
          <div className="flex-1 flex gap-2">
            <BrandLogo className="size-12" effect={false} />
            <div className="flex items-center gap-2">
              {isRestaurantOpen() ? (
                <>
                  <div className="flex gap-2 text-gray-800 rounded-full border-green-200 bg-green-50 border p-1.5 items-center relative">
                    <div className="h-2 w-2 bg-green-400 rounded-full" />
                  </div>
                  <p className=" text-green-700 text-xs">Open</p>
                </>
              ) : (
                <>
                  <div className="flex gap-2 text-gray-800 rounded-full border-red-200 bg-red-50 border p-1.5 items-center relative">
                    <div className="h-2 w-2 bg-red-400 rounded-full" />
                  </div>
                  <p className=" text-red-700 text-xs">Closed</p>
                </>
              )}
            </div>
          </div>

          <nav className="flex items-center justify-center">
            <ul className=" items-center gap-10 hidden xl:flex">
              {navLinks.map((link) => (
                <li
                  key={link.href}
                  className={twMerge(
                    "text-gray-900 hover:text-gray-600 cursor-pointer",
                    pathname === link.href && "text-gray-500"
                  )}
                >
                  <a href={link.href} className="relative inline-block group">
                    {link.label}
                    <span
                      className={twMerge(
                        "absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-300 transition-all duration-300 ease-in-out group-hover:w-full",
                        pathname === link.href && "w-full"
                      )}
                    ></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="gap-3 flex-1 flex items-center justify-end">
            {!isLoading && (
              <>
                <button
                  type="button"
                  onClick={openCart}
                  className="rounded-full p-2 size-9 order-1 bg-gray-100 hover:bg-gray-200 transition relative cursor-pointer"
                >
                  <ShoppingCartIcon className="size-5 text-gray-800 z-10" />
                  {totalItems > 0 && (
                    <span className="text-xs font-medium absolute -top-1 -right-1 bg-gray-300/80 w-4 h-4 flex items-center justify-center rounded-full">
                      {totalItems}
                    </span>
                  )}
                </button>

                {isAuthenticated ? (
                  <button
                    type="button"
                    className={twMerge(
                      "rounded-full p-2 size-9 bg-gray-100 order-2 hover:bg-gray-200 transition relative cursor-pointer",
                      isUserMenuOpen && "bg-gray-200"
                    )}
                    onMouseEnter={() => setIsUserMenuOpen(true)}
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  >
                    <UserIcon className="size-5 text-gray-800 z-10" />
                  </button>
                ) : (
                  <>
                    <Link
                      href="/sign-in"
                      className="button-secondary lg:block hidden"
                    >
                      Sign In
                    </Link>

                    <Link
                      href="/sign-up"
                      className="button-primary lg:block hidden"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
                <button
                  type="button"
                  className="rounded-full p-2 size-9 bg-gray-100 order-3 hover:bg-gray-200 transition relative cursor-pointer xl:hidden"
                  onClick={() => setIsMobileNavOpen(true)}
                >
                  <Bars2Icon className="size-5 text-gray-800 z-10" />
                </button>
              </>
            )}
          </div>
        </header>
        <UserMenu
          isMenuOpen={isUserMenuOpen}
          setIsMenuOpen={setIsUserMenuOpen}
        />
      </div>
      <NavigationMenu
        isMenuOpen={isMobileNavOpen}
        handleClose={() => setIsMobileNavOpen(false)}
      />
    </>
  );
};
