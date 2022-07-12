import { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Dashboard_Logo" },
    { title: "Order History", src: "Order_History_Logo" },
    { title: "Contacts", src: "Contacts_Logo" },
    { title: "Settings ", src: "Settings_Logo", gap: true },
  ];

  return (
    <div
      className={` flex flex-col items-center ${
        open ? "w-72" : "w-20 "
      } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
    >
      <div
        onClick={() => setOpen(!open)}
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
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
          <li
            key={index}
            className={`flex rounded-md p-0 cursor-pointer hover:bg-light-white text-[#999999] text-sm text-[18px] items-center gap-x-4
              ${Menu.gap ? "mt-9" : "mt-2"} ${
              index === 0 && "bg-light-white"
            } `}
          >
            <img src={`./src/assets/${Menu.src}.png`} />
            <span className={`${!open && "hidden"} items-start duration-200`}>
              {Menu.title}
            </span>
          </li>
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
