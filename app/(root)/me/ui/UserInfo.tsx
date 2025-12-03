import {
  CheckIcon,
  PencilSquareIcon,
  XMarkIcon,
} from "@node_modules/@heroicons/react/24/outline";
import { useEffect } from "react";
import { useAuthStore } from "@store/auth.store";

export const UserInfo = () => {
  const { user, isLoadingProfile, loadMyProfile } = useAuthStore();

  useEffect(() => {
    loadMyProfile();
  }, []);

  if (isLoadingProfile) return <UserInfoSkeleton />;

  return (
    <div className="space-y-3 mt-6 pt-6 border-t border-neutral-200">
      <div className="flex justify-between">
        <h2 className="text-neutral-700 text-xl font-mono">Personal Info</h2>
        <PencilSquareIcon className="size-5 text-neutral-500 hover:text-primary-400 transition cursor-pointer" />
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="bg-white shadow-sm py-4 px-8 rounded-lg">
          <p className="text-neutral-500">Full Name</p>
          <p className="text-neutral-700">{user?.fullName}</p>
        </div>
        <div className="bg-white shadow-sm py-4 px-8 rounded-lg relative">
          <p className="text-neutral-500">Email Address</p>
          <p className="text-neutral-700">{user?.email}</p>
          <span className="absolute top-5  right-5 flex gap-1 items-center text-sm text-gray-700">
            {user?.emailVerifiedAt ? (
              <>
                Verified <CheckIcon className="size-5" />
              </>
            ) : (
              <>
                Not verified <XMarkIcon className="size-5" />{" "}
              </>
            )}
          </span>
        </div>
        {user?.phone && (
          <div className="bg-white shadow-sm py-4 px-8 rounded-lg relative">
            <p className="text-gray-500">Phone Number</p>
            <p className="text-gray-700">{user.phone}</p>
            <span className="absolute top-5  right-5 flex gap-1 items-center text-sm text-gray-700">
              {user.phoneVerifiedAt ? (
                <>
                  Verified <CheckIcon className="size-5" />
                </>
              ) : (
                <>
                  Not verified <XMarkIcon className="size-5" />{" "}
                </>
              )}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

const UserInfoSkeleton = () => {
  return (
    <div className="space-y-4 mt-6 pt-6 border-t border-gray-200">
      <div className="h-4 w-[180px] bg-gray-200 rounded-full animate-pulse" />

      <div className="grid grid-cols-3 gap-8">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="h-20 bg-gray-200 rounded-lg animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  );
};
