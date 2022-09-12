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
    <div className="sm:flex sm:flex-col sm:items-center sm:mb-8">
      <img
        src={data.picture}
        className="sm:w-[200px] sm:h-[200px] sm:rounded-[100px] lg:w-[225px] lg:h-[225px] lg:rounded-[112.5px] 2xl:w-[250px] 2xl:h-[250px] 2xl:rounded-[125px]"
      />
      <div className="font-poppins font-semibold md:text-xl 2xl:text-2xl text-center mt-6">
        {data.name}
      </div>
      <div className="font-poppins font-normal sm:text-sm md:text-base 2xl:text-lg text-center mt-2">
        {data.position}
      </div>
    </div>
  );
};

export default Founder;
