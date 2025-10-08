import React from "react";

export const ForgotPasswordForm = () => {
  return (
    <form className="form-wrapper">
      <div>
        <input
          type="email"
          placeholder="Your email address"
          className="input-form"
        />
      </div>

      <input
        type="submit"
        value="Send instructions"
        className="button-primary-form mt-2"
      />
    </form>
  );
};
