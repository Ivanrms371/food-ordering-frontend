"use client";
import Link from "next/link";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { BrandLogo } from "@components/ui/BrandLogo";
import { useAuthStore } from "@store/auth.store";

export const Header = () => {
  const totalItems = 5;
  const { isAuthenticated } = useAuthStore();

  return (
    <>
      <div className="w-full fixed flex flex-col gap-1 z-40">
        <header className="  bg-gray-50/90 backdrop-blur-md px-6  py-4  border-b  border-gray-300 w-full  z-40">
          <div className=" flex justify-between items-center">
            <div className="flex items-center gap-8">
              <BrandLogo className="size-10" effect={false} />

              <nav className="hidden md:flex gap-4 items-center">
                <Link
                  className="text-gray-700 hover:text-primary-500"
                  href="/home"
                >
                  Home
                </Link>
                <Link
                  className="text-gray-700 hover:text-primary-500"
                  href="/menu"
                >
                  Menu
                </Link>
                <Link
                  className="text-gray-700 hover:text-primary-500"
                  href="/about-us"
                >
                  About us
                </Link>
                <Link
                  className="text-gray-700 hover:text-primary-500"
                  href="/about-us"
                >
                  Contact us
                </Link>
              </nav>
            </div>

            <div className="flex items-center gap-4 sm:gap-3 ">
              {isAuthenticated ? (
                <>
                  <MagnifyingGlassIcon className="size-6 text-gray-400 hover:text-gray-600 transition cursor-pointer" />
                  <Link href="/me">
                    <UserIcon className="size-6 text-gray-400 hover:text-gray-600 transition cursor-pointer" />
                  </Link>

                  <div className="flex flex-nowrap items-center gap-1">
                    <ShoppingBagIcon className="size-6 text-gray-400 hover:text-gray-600 transition cursor-pointer" />
                    {totalItems > 0 ? (
                      <span className="text-sm font-semibold text-primary-400">
                        {totalItems}
                      </span>
                    ) : (
                      <></>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <MagnifyingGlassIcon className="size-6 text-gray-400 hover:text-gray-600 transition cursor-pointer" />

                  <div className="flex flex-nowrap items-center gap-1">
                    <ShoppingBagIcon className="size-6 text-gray-400 hover:text-gray-600 transition cursor-pointer" />
                    {totalItems > 0 ? (
                      <span className="text-sm font-semibold text-primary-400">
                        {totalItems}
                      </span>
                    ) : (
                      <></>
                    )}
                  </div>
                  <Link className=" button-secondary" href="/login">
                    Login
                  </Link>
                  <Link className="button-primary" href="/sign-up">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </header>
        {/* <NavigationMenu isMenuOpen={isMenuOpen} handleClose={handleClose} /> */}
      </div>
    </>
  );
};

/* <div className="size-10">
                <button
                  className="size-10 relative border-2 border-gray-800 rounded-full"
                  onClick={toggleMenu}
                >
                  <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
                    <div
                      className={twMerge(
                        "h-0.5 w-5 bg-primary-800 transition-all duration-500 -translate-y-1",
                        isMenuOpen && "rotate-45 translate-y-0 bg-gray-600"
                      )}
                    ></div>
                  </div>
                  <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
                    <div
                      className={twMerge(
                        "h-0.5 w-5 bg-primary-800 transition-all duration-500 translate-y-1",
                        isMenuOpen && "-rotate-45 translate-y-0 bg-gray-600"
                      )}
                    ></div>
                  </div>
                </button>
              </div> */
