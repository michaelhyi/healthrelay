import { AiFillMail } from "react-icons/ai";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center font-normal bg-500 py-12">
      <div className="xl:py-6 2xl:py-10">
        <div className="flex space-x-12">
          <div className="flex flex-col justify-center items-center sm:mr-12 lg:mr-24">
            <img
              src="/Main_Logo_Transparent.png"
              className="sm:h-[100px] lg:h-[200px]"
            />
            {/* <div className="sm:h-[50px] sm:w-[50px] lg:h-[60px] lg:w-[60px] bg-[#E5E5E5] rounded-xl" />
            <div className="sm:text-2xl font-poppins font-bold text-white lg:text-3xl mt-6">
              HealthRelay
            </div> */}
          </div>
          <div>
            <div className="text-white font-poppins font-semibold sm:text-xl lg:text-2xl">
              Quick Links
            </div>
            <Link
              to="main"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
            >
              <div className="sm:text-sm lg:text-base text-white font-poppins mt-4 hover:cursor-pointer">
                Get Started
              </div>
            </Link>
            <Link
              to="features"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
            >
              <div className="sm:text-sm lg:text-base text-white font-poppins mt-2 hover:cursor-pointer">
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
              <div className="sm:text-sm lg:text-base text-white font-poppins mt-2 hover:cursor-pointer">
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
              <div className="sm:text-sm lg:text-base text-white font-poppins mt-2 hover:cursor-pointer">
                Contact
              </div>
            </Link>
          </div>
          <div>
            <div className="text-white font-poppins font-semibold sm:text-xl lg:text-2xl">
              Contact
            </div>
            <div>
              <a
                className="flex items-center space-x-2 duration-500 hover:text-200 mt-4"
                target="_blank"
                rel="noreferrer"
                href="mailto: info@health-relay.com"
              >
                <AiFillMail color="white" />
                <div className="sm:text-sm lg:text-base text-white font-poppins">
                  info@healthrelay.tech
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="sm:text-sm lg:text-base font-poppins text-white font-medium text-center mt-24">
          © 2022 HealthRelay. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
