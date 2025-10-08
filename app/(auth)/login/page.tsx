import { FormWrapper } from "@components/auth/FormWrapper";
import { SignInForm } from "@components/auth/SignInForm";

export default function SignInPage() {
  return (
    <FormWrapper
      title="Sign in to your account"
      subtitle="You don't have an account?"
      linkTo="/sign-up"
      linkText="Sign up"
    >
      <SignInForm />
    </FormWrapper>
  );
}
