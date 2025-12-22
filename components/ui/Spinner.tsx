import { ClipLoader } from "react-spinners";
import type { LoaderSizeProps } from "react-spinners/helpers/props";

type SpinnerProps = LoaderSizeProps & {
  className?: string;
};

export function Spinner({ className, size = 32, ...props }: SpinnerProps) {
  return (
    <div className={className}>
      <ClipLoader size={size} className={className} {...props} />
    </div>
  );
}
