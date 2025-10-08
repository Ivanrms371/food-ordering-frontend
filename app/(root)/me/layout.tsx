"use client";

import { ArrowRightEndOnRectangleIcon } from "@node_modules/@heroicons/react/24/outline";
import { logout } from "@services/authService";
import { useAuthStore } from "@store/auth.store";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const handleLogout = async () => {
    const res = await logout();
  };

  return (
    <div className="flex-1 container">
      <div className="flex flex-row h-full">
        <aside className="shadow rounded-3xl w-80 flex flex-col justify-between gap-2 p-2">
          <nav className="flex flex-col gap-2">
            <Link
              href={"/me"}
              className={twMerge(
                " py-4 px-4 text-gray-600 w-full block rounded-2xl hover:bg-gray-200/40",
                pathname === "/me" && "bg-gray-200/40 "
              )}
            >
              Profile
            </Link>
            <Link
              href={"/me/security"}
              className={twMerge(
                " py-4 px-4 text-gray-600 w-full block rounded-2xl hover:bg-gray-200/40",
                pathname === "/me/security" && "bg-gray-200/40 "
              )}
            >
              Security
            </Link>
            <Link
              href={"/me/orders"}
              className={twMerge(
                " py-4 px-4 text-gray-600 w-full block rounded-2xl hover:bg-gray-200/40",
                pathname === "/me/orders" && "bg-gray-200/40 "
              )}
            >
              My Orders
            </Link>
          </nav>
          <button
            type="button"
            onClick={handleLogout}
            className={twMerge(
              " py-4 px-4 text-gray-600 w-full  rounded-2xl hover:bg-gray-200/40 text-left cursor-pointer flex justify-between"
            )}
          >
            Log out
            <ArrowRightEndOnRectangleIcon className="size-6" />
          </button>
        </aside>
        <div className="flex-1 p-8">{children}</div>
      </div>
    </div>
  );
}
