import { company } from "../utils/company";
import Founder from "./Founder";
import Section from "./Section";
//@ts-ignore
import { Fade } from "react-reveal";

const Company = () => {
  return (
    <Section h={80} id="company">
      <Fade up distance="20px" delay={200}>
        <div className="font-poppins font-bold text-5xl text-400">
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
    </Section>
  );
};

export default Company;
