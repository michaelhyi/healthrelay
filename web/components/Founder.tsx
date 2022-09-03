import React from "react";

interface Props {
  data: {
    id: number;
    name: string;
    position: string;
    picture: string;
  };
}

const Founder: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <img src={data.picture} className="w-[250px] h-[250px] rounded-[125px]" />
      <div className="font-poppins font-semibold text-2xl text-center mt-6">
        {data.name}
      </div>
      <div className="font-poppins font-normal text-lg text-center mt-2">
        {data.position}
      </div>
    </div>
  );
};

export default Founder;
