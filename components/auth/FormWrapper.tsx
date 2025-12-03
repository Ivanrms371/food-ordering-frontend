import Link from "@node_modules/next/link";

interface FormWrapperProps {
  title: string;
  subtitle: string;
  linkTo: string;
  linkText: string;
  children: React.ReactNode;
}

export const FormWrapper = ({
  title,
  subtitle,
  linkTo,
  linkText,
  children,
}: FormWrapperProps) => {
  return (
    <>
      <div className="mb-6">
        <h1 className="heading-one align-responsive font-mono mb-2">{title}</h1>
        <p className="paragraph">
          {subtitle}{" "}
          <Link href={linkTo} className="text-primary-500 hover:underline">
            {linkText}
          </Link>
        </p>
      </div>

      {children}
    </>
  );
};
