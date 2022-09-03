import React from "react";

interface Props {
  children: React.ReactNode;
  blue?: boolean;
  footer?: boolean;
  id?: string;
  h?: number;
}

const Section: React.FC<Props> = ({ children, blue, footer, id, h }) => {
  return (
    <div
      id={id}
      className={`flex flex-col w-full justify-center items-center font-normal ${
        blue ? "bg-400" : "bg-white"
      } ${footer && "bg-500"} h-[${h}vh]`}
    >
      {children}
    </div>
  );
};

export default Section;
