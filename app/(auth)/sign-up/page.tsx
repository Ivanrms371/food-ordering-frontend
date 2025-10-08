import { FormWrapper } from "@components/auth/FormWrapper";
import { SignUpForm } from "@components/auth/SignUpForm";

export default function SignUpPage() {
  return (
    <FormWrapper
      title="Create your account"
      subtitle="You already have an account?"
      linkTo="/login"
      linkText="Sign in"
    >
      <SignUpForm />
    </FormWrapper>
  );
}
