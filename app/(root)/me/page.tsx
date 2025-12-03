"use client";
import { UserAvatar } from "./ui/UserAvatar";
import { UserInfo } from "./ui/UserInfo";
import { UserAddresses } from "./ui/UserAddresses";
import { useAuthStore } from "@store/auth.store";

export default function MePage() {

  console.log("AccessToken", useAuthStore.getState().accessToken);
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl text-neutral-800 border-b border-neutral-200 pb-6 font-mono">My Profile</h1>

      <UserAvatar />
      <UserInfo />
      <UserAddresses />
    </div>
  );
}
