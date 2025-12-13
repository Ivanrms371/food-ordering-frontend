import { BrandLogo } from "@components/ui/BrandLogo";
import React from "react";

export const Header = () => {
  return (
    <header className="h-24 flex justify-center  items-center border-b border-gray-200">
      <BrandLogo className="size-16" effect={false} />
    </header>
  );
};
