import { ReactNode } from "react";

type FrameProps = {
  children: ReactNode;
  className?: string;
};

const Frame = ({ children, className = "" }: FrameProps) => {
  return (
    <div
      className={`flex flex-col bg-neutralBase p-4 border-2 rounded gap-2 border-solid  border-neutralDeep text-base ${className}`}
    >
      {children}
    </div>
  );
};

export default Frame;
