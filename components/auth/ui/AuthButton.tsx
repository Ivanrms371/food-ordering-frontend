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
        "button-primary",
        isLoading && "bg-primary-200 hover:bg-primary-200"
      )}
    >
      {isLoading ? <ClipLoader size={24} color="#7d6c4c" /> : value}
    </button>
  );
};
