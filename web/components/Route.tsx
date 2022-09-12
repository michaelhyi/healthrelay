import { Link } from "react-scroll";
import React from "react";

interface Props {
  name: string;
  key: number;
}

const Route: React.FC<Props> = ({ name }) => {
  return (
    <Link
      to={name.toLowerCase()}
      spy={true}
      smooth={true}
      offset={-100}
      duration={1000}
    >
      <li className="font-poppins font-normal sm:text-sm lg:text-base hover:cursor-pointer duration-300 hover:text-gray">
        {name}
      </li>
    </Link>
  );
};

export default Route;
