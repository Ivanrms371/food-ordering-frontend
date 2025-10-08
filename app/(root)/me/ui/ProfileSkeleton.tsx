// components/ui/ProfileSkeleton.tsx
export const ProfileSkeleton = () => {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-4xl text-gray-900">My Profile</h1>
      {/* Avatar + name */}
      <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-200">
        <div className="h-32 w-32 rounded-full bg-gray-300 animate-pulse"></div>
        <div className="space-y-2">
          <div className="h-6 w-48 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-4 w-32 bg-gray-300 rounded animate-pulse"></div>
        </div>
      </div>

      {/* Personal Info */}
      <div className="space-y-4 mt-6 pt-6 border-t border-gray-200">
        <div className="h-8 w-1/3 bg-gray-300 rounded animate-pulse"></div>
        <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-20 bg-gray-300 rounded-2xl animate-pulse"
            ></div>
          ))}
        </div>
      </div>

      {/* Addresses */}
      <div className="space-y-4 mt-6 pt-6 border-t border-gray-200">
        <div className="h-8 w-1/4 bg-gray-300 rounded animate-pulse"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="h-24 bg-gray-300 rounded-2xl animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
