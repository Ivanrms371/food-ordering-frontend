import { twMerge } from "tailwind-merge";

interface Props {
  beforeText?: string;
  highlightOne?: string;
  highlightTwo?: string;
  afterText?: string;
  className?: string;
  heading?: "h1" | "h2" | "h3";
}

export const DynamicHeading = ({
  beforeText = "",
  highlightOne,
  highlightTwo,
  afterText = "",
  className = "",
  heading = "h2",
}: Props) => {
  const HeadingTag = heading;
  return (
    <HeadingTag
      className={twMerge(
        "text-7xl text-gray-700 font-bold text-center max-w-2xl mx-auto",
        className
      )}
    >
      {beforeText && beforeText + " "}
      {highlightOne && (
        <span className="text-gray-900 font-black">{highlightOne} </span>
      )}
      {highlightTwo && (
        <span className="text-primary-400 font-black">{highlightTwo}</span>
      )}
      {afterText && " " + afterText}
    </HeadingTag>
  );
};
