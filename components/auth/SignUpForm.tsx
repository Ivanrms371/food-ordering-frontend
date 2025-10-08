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

      <p className="text-gray-500 align-reponsive">
        Your password must be at least 8 characters long and contain at least
        one number and one uppercase letter.
      </p>

      <input type="submit" className="button-primary-form" value={"Sign up"} />

      <div className="my-2 flex justify-center flex-row items-center gap-5">
        <div className="border-b border-gray-700 w-full"></div>
        <span className="flex-1 w-full text-nowrap  text-gray-500 font-medium">
          Or continue with
        </span>
        <div className="border-b border-gray-700 w-full"></div>
      </div>

      <div className="flex justify-center flex-row items-center gap-2">
        <button className="button-secondary-form-with-icon">
          <img src="/images/google.png" alt="" className="size-4 sm:size-5" />
          Google
        </button>
        <button className="button-secondary-form-with-icon">
          <img src="/images/facebook.png" alt="" className="size-4 sm:size-5" />
          Facebook
        </button>
      </div>
    </form>
  );
};
