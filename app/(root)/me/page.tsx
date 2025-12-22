import { UserAvatar } from "./ui/UserAvatar";
import { UserInfo } from "./ui/UserInfo";
import { UserAddresses } from "./ui/UserAddresses";

export default function MePage() {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl text-gray-800 border-b border-gray-200 pb-6 font-mono">
        My Profile
      </h1>

      <UserAvatar />
      <UserInfo />
      <UserAddresses />
    </div>
  );
}
