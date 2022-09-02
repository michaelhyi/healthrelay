const Navbar = () => {
  return (
    <div className="flex w-full sticky top-0 z-50 bg-white p-8 items-center">
      <div className="h-[60px] w-[60px] bg-[#E5E5E5] rounded-xl ml-4" />
      <div className="flex ml-auto items-center space-x-12 ">
        <div className="font-poppins font-normal text-base hover:cursor-pointer duration-300 hover:text-gray">
          Features
        </div>
        <div className="font-poppins font-normal text-base hover:cursor-pointer duration-300 hover:text-gray">
          Company
        </div>
        <div className="font-poppins font-normal text-base hover:cursor-pointer duration-300 hover:text-gray">
          Contact
        </div>
        <div className="flex bg-300 h-[50px] w-[150px] rounded-xl justify-center items-center hover:cursor-pointer duration-300 hover:bg-200">
          <div className="font-poppins font-normal text-base text-white">
            Get Started
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
