//@ts-ignore
import { Fade } from "react-reveal";
import { Link } from "react-scroll";
import Route from "./Route";

const Navbar = () => {
  const routes = ["Features", "Company", "Contact"];

  return (
    <div className="flex w-full sticky top-0 z-50 sm:flex-col md:flex-row sm:space-y-5 md:space-y-0 bg-white p-8 items-center">
      <Fade up delay={200} distance="20px">
        <img
          src="/Horizontal_Logo_Transparent.png"
          className="sm:h-[50px] lg:h-[60px] sm:m-auto md:m-0 md:ml-4"
        />
        <ul className="flex sm:m-auto md:m-0 md:ml-auto items-center sm:space-x-4 md:space-x-8 space-x-12 ">
          {routes.map((v, i) => (
            <Route name={v} key={i} />
          ))}
          <Link
            to="main"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
          >
            <button className="flex bg-300 sm:h-[40px] sm:w-[120px] lg:h-[50px] lg:w-[150px] rounded-xl justify-center items-center hover:cursor-pointer duration-300 hover:bg-200 font-poppins font-normal sm:text-sm lg:text-base text-white">
              Get Started
            </button>
          </Link>
        </ul>
      </Fade>
    </div>
  );
};

export default Navbar;
