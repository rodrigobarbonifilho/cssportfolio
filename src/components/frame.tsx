import { ReactNode } from "react";

type FrameProps = {
  children: ReactNode;
};

const Frame = ({ children }: FrameProps) => {
  return (
    <div className="flex flex-col bg-neutralBase p-4 border-2 rounded gap-2 border-neutralDeep border-solid text-base">
      {children}
    </div>
  );
};

export default Frame;
