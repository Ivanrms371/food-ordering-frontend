"use client";
import authService from "@/services/auth/authService";

export const SignUpForm = () => {
  return (
    <form action="" className="form-wrapper">
      <div>
        <input
          type="text"
          placeholder="Your full name"
          className="input-form"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Your email address"
          className="input-form"
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Your password"
          className="input-form"
        />
      </div>

      <p className="paragraphalign-reponsive">
        Your password must be at least 8 characters long and contain at least
        one number and one uppercase letter.
      </p>

      <input type="submit" className="button-primary" value={"Sign up"} />

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
