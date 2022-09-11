import { company } from "../utils/company";
import Founder from "./Founder";
//@ts-ignore
import { Fade } from "react-reveal";

const Company = () => {
  return (
    <div
      id="company"
      className="flex flex-col w-full justify-center items-center font-normal bg-white py-36"
    >
      <Fade up distance="20px" delay={200}>
        <div className="font-poppins font-bold text-6xl text-400">
          Our Company
        </div>
        <div className="font-poppins font-medium font-lg text-center w-[50vh] text-gray mt-6">
          We are a team of motivated and achieving high school students who are
          passionate about the intersection of healthcare and technology.
        </div>
      </Fade>
      <Fade up distance="20px" delay={300}>
        <div className="flex space-x-16 mt-24">
          {company.map((v) => (
            <Founder data={v} />
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default Company;
