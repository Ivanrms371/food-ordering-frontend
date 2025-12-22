"use client";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import { useAuthStore } from "@/store/auth.store";

export const UserAvatar = () => {
  const { user, isLoadingProfile } = useAuthStore();

  if (isLoadingProfile) return <UserAvatarSkeleton />;

  return (
    <div className="flex items-end gap-4 mt-4 ">
      <div className="size-24 group relative">
        <img
          src={"/avatar/image.png"}
          alt=""
          className="rounded-full size-24 object-cover shadow"
        />

        <label
          htmlFor="avatar"
          className="inset-0 absolute flex justify-center items-center
               bg-gray-900/10 hover:bg-gray-900/70
               rounded-full transition cursor-pointer"
        >
          <ArrowUpTrayIcon
            className="size-6 text-gray-300 opacity-0 transition duration-150
                 group-hover:opacity-100"
          />
        </label>

        <input type="file" id="avatar" className="sr-only hidden" />
      </div>

      <div className="mb-2">
        <p className="text-gray-700 text-2xl leading-5 font-mono">
          {user?.fullName}
        </p>
        <p className="text-gray-500 text-sm">
          {user?.role === "admin" ? "Admin" : "Customer"}
        </p>
      </div>
    </div>
  );
};

const UserAvatarSkeleton = () => {
  return (
    <div className="flex items-center gap-4 mt-4 ">
      <div className="size-12 rounded-full bg-gray-200 animate-pulse"></div>
      <div className="space-y-2">
        <div className="h-4 w-[180px] bg-gray-200 rounded-full animate-pulse"></div>
        <div className="h-4 w-[120px] bg-gray-200 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};
