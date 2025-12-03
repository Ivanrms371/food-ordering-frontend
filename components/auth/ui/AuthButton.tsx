import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { twMerge } from "tailwind-merge";

interface Props {
  value: string;
  isLoading?: boolean;
}

export const AuthButton = ({ value, isLoading }: Props) => {
  return (
    <button
      type="submit"
      className={twMerge(
        "font-primary text-xs text-neutral-100 font-extrabold uppercase tracking-widest py-3 px-8 rounded-full bg-neutral-800 hover:bg-neutral-600 transition font-primary",
        isLoading && "bg-primary-200 hover:bg-primary-200"
      )}
    >
      {isLoading ? <ClipLoader size={24} color="#7d6c4c" /> : value}
    </button>
  );
};
