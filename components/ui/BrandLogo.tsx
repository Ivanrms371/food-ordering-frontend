import Link from "next/link";
import { twMerge } from "tailwind-merge";

type BrandLogoProps = {
  className?: string;
  effect?: boolean;
};

export const BrandLogo = ({
  className = "",
  effect = true,
}: BrandLogoProps) => {
  return (
    <Link href={"/"} className={twMerge("relative block size-16", className)}>
      <img
        src="/images/wakanda.png"
        alt="Wakanda Logo"
        className="absolute inset-0 z-10"
      />
      {effect && (
        <img
          src="/images/wakanda.png"
          alt="Wakanda Logo"
          className="absolute inset-0 blur-sm"
        />
      )}
    </Link>
  );
};
