import Link from "next/link";
import React from "react";

export const AuthGateCheckout = () => {
  return (
    <div className="text-center mt-20">
      <p className="text-gray-800 font-medium mb-2 text-xl">
        To continue with the checkout you need to be logged in
      </p>

      <p className="text-gray-500 text-lg">
        Please{" "}
        <Link
          href={"/sign-in?redirect=/checkout"}
          className="font-medium text-gray-800"
        >
          log in
        </Link>{" "}
        or{" "}
        <Link
          href={"/sign-up?redirect=/checkout"}
          className="font-medium text-gray-800"
        >
          create an account
        </Link>{" "}
        to continue with the checkout
      </p>
    </div>
  );
};
