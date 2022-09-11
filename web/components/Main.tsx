//@ts-ignore
import { Fade } from "react-reveal";
import { Link } from "react-scroll";

const Main = () => {
  return (
    <div
      id="main"
      className="flex flex-col w-full justify-center items-center font-normal bg-white py-12"
    >
      <Fade up distance="25px" delay={750}>
        <div className="font-poppins font-bold text-400 md:text-4xl lg:text-5xl">
          HealthRelay
        </div>
        <div className="font-poppins font-medium text-300 md:text-base lg:text-lg mt-4">
          Automating radiologist to physician communication.
        </div>
        <div className="font-poppins font-normal text-gray md:text-sm lg:text-base text-center w-[50vh] mt-4">
          No more waiting on phone lines. No more looking up contacts. We
          automate the communication process between radiologists and ordering
          physicians to minimize delayed care, medical lawsuits, and preventable
          health consequences. We provide HIPAA-compliant software that employs
          data encryption to ensure security of EHR transmission.
        </div>
        <div className="flex space-x-8 mt-8">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
          >
            <button className="flex justify-center items-center bg-300 rounded-xl md:h-[50px] md:w-[187.5px] lg:h-[60px] lg:w-[225px] hover:cursor-pointer duration-300 hover:bg-200 font-poppins font-medium md:text-sm lg:text-base text-white text-center">
              Request Early Acccess
            </button>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
          >
            <button className="flex justify-center items-center bg-white drop-shadow-xl rounded-xl md:h-[50px] md:w-[187.5px] lg:h-[60px] lg:w-[225px] hover:cursor-pointer duration-300 hover:bg-[#F2F2F2] font-poppins font-medium md:text-sm lg:text-base text-300">
              Schedule A Demo
            </button>
          </Link>
        </div>
        <img
          src="/Mockups.png"
          className="md:w-[500px] lg:w-[650px] xl:w-[850px] 2xl:w-[850px] mt-8"
        />
      </Fade>
    </div>
  );
};

export default Main;
