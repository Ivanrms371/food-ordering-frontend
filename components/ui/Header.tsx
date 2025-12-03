"use client";
import Link from "next/link";
import {
  ArrowLongRightIcon,
  MagnifyingGlassIcon,
  PlayCircleIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  StopCircleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { BrandLogo } from "@components/ui/BrandLogo";
import { useAuthStore } from "@store/auth.store";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { NAV_LINKS } from "@constants/navigation";
import { isRestaurantOpen } from "@utils/open-status";
import { UserMenu } from "./UserMenu";

export const Header = () => {
  const totalItems = 1;
  const { isAuthenticated, isLoading } = useAuthStore();

  const pathname = usePathname();
  const [showHeader, setShowHeader] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll < 100) {
        setShowHeader(true);
      } else {
        if (currentScroll > lastScroll) {
          setShowHeader(false);
          setIsMenuOpen(false);
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
          "w-full fixed flex flex-col gap-1 z-4 transition duration-700 ease-in-out",
          showHeader ? "translate-y-0 shadow-md" : "-translate-y-full",
          showHeader && lastScroll < 100 && "shadow-none"
        )}
      >
        <header
          className={twMerge(
            "bg-white px-12 w-full flex items-center justify-between z-40 transition-all duration-700 ease-in-out",
            showHeader && lastScroll > 100 ? "h-22" : "h-28"
          )}
        >
          <div className="flex-1 flex gap-6">
            <BrandLogo className="size-14" effect={true} />
            <div className="flex items-center gap-2">
              {isRestaurantOpen() ? (
                <div className="flex gap-2 text-neutral-800 rounded-full border-green-200 bg-green-50 border p-2 items-center relative">
                  <PlayCircleIcon className="size-5 text-green-500" />
                  <p className="text-xs text-green-700">Open</p>
                </div>
              ) : (
                <div className="flex gap-2 text-neutral-800 rounded-full border-red-200 bg-red-50 border p-2 items-center">
                  <StopCircleIcon className="size-5 text-red-500" />
                  <p className="text-sm text-red-700">Closed</p>
                </div>
              )}
            </div>
          </div>

          <nav className="flex items-center justify-center">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li
                  key={link.href}
                  className={twMerge(
                    "text-neutral-900 hover:text-neutral-600 cursor-pointer uppercase font-extrabold font-mono",
                    pathname === link.href && "text-neutral-500"
                  )}
                >
                  <a href={link.href} className="relative inline-block group">
                    {link.label}
                    <span
                      className={twMerge(
                        "absolute left-0 -bottom-1 h-0.5 w-0 bg-neutral-300 transition-all duration-300 ease-in-out group-hover:w-full",
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
                  className="rounded-full p-2 size-9 bg-neutral-100 hover:bg-neutral-200 transition relative cursor-pointer"
                >
                  <ShoppingCartIcon className="size-5 text-neutral-800 z-10" />
                  {totalItems > 0 && (
                    <span className="text-xs font-medium absolute -top-1 -right-1 bg-neutral-300/80 w-4 h-4 flex items-center justify-center rounded-full">
                      {totalItems}
                    </span>
                  )}
                </button>
                {isAuthenticated ? (
                  <button
                    type="button"
                    className={twMerge(
                      "rounded-full p-2 size-9 bg-neutral-100 hover:bg-neutral-200 transition relative cursor-pointer",
                      isMenuOpen && "bg-neutral-200"
                    )}
                    onMouseEnter={() => setIsMenuOpen(true)}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    <UserIcon className="size-5 text-neutral-800 z-10" />
                  </button>
                ) : (
                  <>
                    <Link href="/sign-in" className="button-secondary">
                      Sign In
                    </Link>

                    <Link href="/sign-up" className="button-primary">
                      Sign Up
                    </Link>
                  </>
                )}
              </>
            )}
          </div>
        </header>
        <UserMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </>
  );
};
