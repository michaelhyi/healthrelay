import { useState } from "react";
import { BsFillPersonFill, BsBarChartFill } from "react-icons/bs";
import { IoIosArrowBack, IoIosContact, IoIosSettings } from "react-icons/io";
import { BiHistory } from "react-icons/bi";
import Link from "next/link";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    {
      title: "Dashboard",
      src: <BsBarChartFill size={20} />,
      href: "/dashboard",
    },
    {
      title: "Order History",
      src: <BiHistory size={20} />,
      href: "/order-history",
    },
    { title: "Contacts", src: <IoIosContact size={20} />, href: "/contacts" },
    {
      title: "Settings ",
      src: <IoIosSettings size={20} />,
      href: "/settings",
      gap: true,
    },
  ];

  return (
    <div
      className={` flex flex-col items-center ${
        open ? "w-72" : "w-20 "
      } bg-dark-purple h-screen p-5 pt-8 relative duration-300`}
    >
      <div
        onClick={() => setOpen(!open)}
        className={`absolute cursor-pointer -right-4 top-9 p-2 border-dark-purple
         border-2 rounded-full  ${!open && "rotate-180"}`}
      >
        <IoIosArrowBack />
      </div>
      <div className="flex gap-x-4 items-center mt-2">
        <div className="bg-[#DDDDDD] rounded-[12px] p-5" />
        <div
          className={`text-[#386FA4] origin-left font-poppins text-[24px] text-left font-bold duration-300 ${
            !open && "scale-0"
          }`}
        >
          HealthRelay
        </div>
      </div>
      <div className="flex items-center space-x-4 mt-8">
        <BsFillPersonFill fill="#386FA4" size={40} />
        <div className={`duration-200 ${!open && "scale-0"}`}>
          <div className="font-poppins text-[#386FA4] text-[18px] font-semibold">
            Dr. Oneil Lee
          </div>
          <div className="font-poppins text-[#59A5D8] text-[14px]">
            Radiologist
          </div>
        </div>
      </div>
      <ul className="pt-6 font-poppins text-[24px]">
        {Menus.map((Menu, index) => (
          <Link href={Menu.href}>
            <li
              key={index}
              className={`flex rounded-md p-0 cursor-pointer hover:bg-[#84D2F6] text-[#999999] text-sm text-[18px] items-center gap-x-4
          ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}
            >
              {Menu.src}
              <span
                className={`${
                  !open && "hidden"
                } items-start duration-200 text-[20px] `}
              >
                {Menu.title}
              </span>
            </li>
          </Link>
        ))}
      </ul>
      <div
        className={`flex text-[#386FA4] font-poppins font-semibold text-[14px] absolute bottom-8 left-0 right-0 justify-center items-center duration-200 ${
          !open && "scale-0"
        }`}
      >
        © 2022 HealthRelay
      </div>
    </div>
  );
};

export default Sidebar;
