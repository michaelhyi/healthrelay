import React from "react";

interface Props {
  type?: string;
  name: string;
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Input: React.FC<Props> = ({ label, value, setValue, type, name }) => {
  return (
    <div className="flex-col space-y-2">
      <label
        htmlFor={name}
        className="font-poppins font-semibold text-white text-sm"
      >
        {label}
      </label>
      {label !== "Message" && (
        <input
          id={name}
          type={type}
          name={name}
          className="border-[1px] border-white bg-400 p-4 rounded-xl text-white w-full"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
      {label === "Message" && (
        <textarea
          id={name}
          name={name}
          className="border-[1px] border-white bg-400 p-4 rounded-xl text-white h-96 w-full resize-none"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
    </div>
  );
};

export default Input;
