"use client";
import { useEffect, useState } from "react";
import { useAuthStore } from "@store/auth.store";
import { fetchMyProfile } from "@services/userService";
import {
  ArrowUpTrayIcon,
  CheckIcon,
  PencilSquareIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  fetchMyAddresses,
  deleteAddress,
  updateAddress,
  addNewAddress,
} from "@services/userAddressService";
import AddressModal from "@components/modals/AddressModal";
import { useModal } from "@hooks/useModal";
import { UserAddress as UserAddressComponent } from "@interfaces/user.interface";
import { ProfileSkeleton } from "./ui/ProfileSkeleton";
import { UserAvatar } from "./ui/UserAvatar";
import { UserInfo } from "./ui/UserInfo";
import { UserAddresses } from "./ui/UserAddresses";

export default function MePage() {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-3xl text-gray-900">My Profile</h1>

      <UserAvatar />
      <UserInfo />
      <UserAddresses />
    </div>
  );
}
