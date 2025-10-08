import { ForgotPasswordForm } from "@components/auth/ForgotPasswordForm";
import { FormWrapper } from "@components/auth/FormWrapper";

export default function ForgotPasswordPage() {
  return (
    <FormWrapper
      title="Forgot your password?"
      subtitle="No worries. Enter your email to reset it."
      linkTo="/login"
      linkText="Back to sign in"
    >
      <ForgotPasswordForm />
    </FormWrapper>
  );
}
