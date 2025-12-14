import Link from "next/link";
import { useAuthStore } from "@/store/auth.store";
import { twMerge } from "tailwind-merge";
import authService from "@/services/auth/authService";

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

export const UserMenu = ({ isMenuOpen, setIsMenuOpen }: Props) => {
  const { isAuthenticated } = useAuthStore();
  const { logout } = authService;

  if (!isAuthenticated) return null;

  const handleLogout = () => {
    setIsMenuOpen(false);
    logout();
  };

  return (
    <div
      className={twMerge(
        "z-50 w-60 flex flex-col shadow rounded-3xl absolute top-20 right-10 bg-white transition-all duration-300 ease-in-out",
        isMenuOpen
          ? "translate-y-0 opacity-100 scale-100 visible"
          : "-translate-y-10 opacity-0 scale-75 invisible"
      )}
      onMouseLeave={() => setIsMenuOpen(false)}
    >
      <Link
        href="/me"
        className="hover:bg-gray-100 px-6 py-3 rounded-t-3xl text-gray-700 hover:text-gray-950 transition duration-300 ease-in-out text-sm"
      >
        Profile
      </Link>
      <Link
        href="/orders"
        className="hover:bg-gray-100 px-6 py-3 text-gray-700 hover:text-gray-950 transition duration-300 ease-in-out text-sm"
      >
        Orders
      </Link>
      <button
        onClick={handleLogout}
        type="button"
        className="text-left cursor-pointer hover:bg-gray-100 px-6 py-3 rounded-b-3xl text-gray-700 hover:text-gray-950 transition duration-300 ease-in-out text-sm"
      >
        Logout
      </button>
    </div>
  );
};
