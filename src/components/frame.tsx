import { ReactNode } from "react";

type FrameProps = {
  children: ReactNode;
  className?: string;
};

const Frame = ({ children, className = "" }: FrameProps) => {
  return (
    <div
      className={`bg-neutralBase p-4 border-2 rounded border-solid border-neutralDeep text-xs md:text-base ${className}`}
    >
      {children}
    </div>
  );
};

export default Frame;
