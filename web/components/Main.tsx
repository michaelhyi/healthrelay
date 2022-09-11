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
        <div className="font-poppins font-bold text-400 text-5xl">
          HealthRelay
        </div>
        <div className="font-poppins font-medium  text-300 text-lg mt-4">
          Automating radiologist to physician communication.
        </div>
        <div className="font-poppins font-normal text-gray text-base text-center w-[50vh] mt-4">
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
            <div className="flex justify-center items-center bg-300 rounded-xl h-[60px] w-[225px] hover:cursor-pointer duration-300 hover:bg-200">
              <div className="font-poppins font-medium text-base text-white text-center ">
                Request Early Acccess
              </div>
            </div>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
          >
            <div className=" flex justify-center items-center bg-white drop-shadow-xl rounded-xl h-[60px] w-[225px] hover:cursor-pointer duration-300 hover:bg-[#F2F2F2]">
              <div className="font-poppins font-medium text-base text-300 ">
                Schedule A Demo
              </div>
            </div>
          </Link>
        </div>
        <img src="/Frame 7.png" className="w-[60vh] mt-8" />
      </Fade>
    </div>
  );
};

export default Main;
