//@ts-ignore
import { Fade } from "react-reveal";
import { Link } from "react-scroll";

const Navbar = () => {
  const routes = ["Features", "Company", "Contact"];

  return (
    <div className="flex w-full sticky top-0 z-50 bg-white p-8 items-center">
      <Fade up delay={200} distance="20px">
        <div className="sm:h-[50px] sm:w-[50px] lg:h-[60px] lg:w-[60px] bg-[#E5E5E5] rounded-xl ml-4" />
        <ul className="flex ml-auto items-center sm:space-x-4 md:space-x-8 space-x-12 ">
          {routes.map((v) => (
            <Link
              to={v.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
            >
              <li className="font-poppins font-normal sm:text-sm lg:text-base hover:cursor-pointer duration-300 hover:text-gray">
                {v}
              </li>
            </Link>
          ))}
          <Link
            to="main"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
          >
            <button className="flex bg-300 sm:h-[45px] sm:w-[135px] lg:h-[50px] lg:w-[150px] rounded-xl justify-center items-center hover:cursor-pointer duration-300 hover:bg-200 font-poppins font-normal sm:text-sm lg:text-base text-white">
              Get Started
            </button>
          </Link>
        </ul>
      </Fade>
    </div>
  );
};

export default Navbar;
