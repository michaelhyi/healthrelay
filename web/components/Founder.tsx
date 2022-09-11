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
      <img
        src={data.picture}
        className="lg:w-[150px] lg:h-[150px] lg:rounded-[75px] xl:w-[200px] xl:h-[200px] xl:rounded-[100px] 2xl:w-[250px] 2xl:h-[250px] 2xl:rounded-[125px]"
      />
      <div className="font-poppins font-semibold lg:text-lg xl:text-xl 2xl:text-2xl text-center mt-6">
        {data.name}
      </div>
      <div className="font-poppins font-normal lg:text-sm xl:text-base 2xl:text-lg text-center mt-2">
        {data.position}
      </div>
    </div>
  );
};

export default Founder;
