"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { SignInData } from "@/interfaces/auth.interface";
import { AuthButton } from "./ui/AuthButton";
import { toast } from "sonner";
import authService from "@/services/auth/authService";

export const SignInForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignInData>();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: SignInData) => {
    setIsLoading(true);
    toast.loading("Signing in...");
    const res = await authService.signInCredentials(data);
    setIsLoading(false);
    toast.dismiss();
    if (!res.error) {
      toast.success("Redirecting...");
      router.push("/me");
    } else {
      toast.error(res.error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-wrapper">
      <div className="flex flex-col gap-2">
        <input
          type="email"
          placeholder="Your email address"
          className="input-form"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-600 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <input
          type="password"
          placeholder="Your password"
          className="input-form"
          {...register("password", {
            required: "Password is required",
          })}
        />
        {}
        {errors.password && (
          <p className="text-red-600 text-sm">{errors.password.message}</p>
        )}
      </div>

      <Link href={"/forgot-password"} className="paragraph align-responsive">
        Did you forget your password?
      </Link>

      <AuthButton value="Sign in" isLoading={isLoading} />

      <div className="my-2 flex justify-center flex-row items-center gap-5">
        <div className="border-b border-gray-200 w-full"></div>
        <span className="flex-1 w-full text-nowrap  text-gray-500 font-medium uppercase text-xs">
          Or
        </span>
        <div className="border-b border-gray-200 w-full"></div>
      </div>

      <div className="flex flex-col gap-4">
        <button
          className="button-provider"
          type="button"
          onClick={() => authService.signInWithGoogle()}
        >
          <img
            src="/images/google.png"
            alt="Google"
            className="size-4 sm:size-5"
          />
          Continue with Google
        </button>
        <button
          className="button-provider"
          type="button"
          onClick={() => authService.signInWithFacebook()}
        >
          <img
            src="/images/facebook.png"
            alt="Facebook"
            className="size-4 sm:size-5"
          />
          Continue with Facebook
        </button>
      </div>
    </form>
  );
};
