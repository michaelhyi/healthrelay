import React from "react";

interface Props {
  children: React.ReactNode;
  blue?: boolean;
  footer?: boolean;
  id?: string;
}

const Section: React.FC<Props> = ({ children, blue, footer, id }) => {
  return (
    <div
      id={id}
      className={`flex flex-col w-full justify-center items-center font-normal ${
        blue ? "bg-400" : "bg-white"
      } ${footer ? "bg-500" : "bg-white min-h-[80vh]"}`}
    >
      {children}
    </div>
  );
};

export default Section;
