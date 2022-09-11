//@ts-ignore
import { Fade } from "react-reveal";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="flex w-full sticky top-0 z-50 bg-white p-8 items-center">
      <Fade up delay={200} distance="20px">
        <div className="h-[60px] w-[60px] bg-[#E5E5E5] rounded-xl ml-4" />
      </Fade>
      <Fade up delay={200} distance="20px">
        <div className="flex ml-auto items-center space-x-12 ">
          <Link
            to="features"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
          >
            <div className="font-poppins font-normal text-base hover:cursor-pointer duration-300 hover:text-gray">
              Features
            </div>
          </Link>
          <Link
            to="company"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
          >
            <div className="font-poppins font-normal text-base hover:cursor-pointer duration-300 hover:text-gray">
              Company
            </div>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
          >
            <div className="font-poppins font-normal text-base hover:cursor-pointer duration-300 hover:text-gray">
              Contact
            </div>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
          >
            <div className="flex bg-300 h-[50px] w-[150px] rounded-xl justify-center items-center hover:cursor-pointer duration-300 hover:bg-200">
              <div className="font-poppins font-normal text-base text-white">
                Get Started
              </div>
            </div>
          </Link>
        </div>
      </Fade>
    </div>
  );
};

export default Navbar;
