import { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import Layout from "../components/Layout";

const data = [
  {
    name: "Oneil Lee",
    profession: "Radiologist",
    email: "oneillee@kaiser.com",
    organization: "Kaiser Permanante",
    uuid: "88403cc4-6702-44ae-bb27-171d20db6687",
  },
];

const Contacts = () => {
  const [active, setActive] = useState(0);
  return (
    <Layout>
      <div className="flex p-12 space-x-8 mt-12">
        <div className="bg-white p-6 rounded-lg shadow-lg h-[1100px] w-[350px]">
          <div className="font-poppins text-[24px] text-[#386FA4] font-semibold">
            Contacts
          </div>
          <input
            className="bg-[#E2E2E2] p-2 w-full rounded-md mt-4"
            placeholder="Search"
          />
          <div className="overflow-y-scroll overflow-hidden whitespace-nowrap">
            {data.map((v, i) => (
              <div
                onClick={() => setActive(i)}
                className={`${
                  i === active ? "bg-gray-200" : "bg-white"
                } p-4 w-full rounded-lg hover:bg-gray-200 mt-4`}
              >
                <div className="flex items-center space-x-4 mx-6">
                  <BsFillPersonFill fill="#386FA4" size={40} />
                  <div className={`duration-200`}>
                    <div className="font-poppins text-[#386FA4] text-[18px] font-semibold">
                      Dr. {v.name}
                    </div>
                    <div className="font-poppins text-[#59A5D8] text-[14px]">
                      {v.profession}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-24 rounded-lg shadow-lg h-[1100px] w-[1600px]">
          <div className="flex items-center space-x-8">
            <BsFillPersonFill fill="#386FA4" size={200} />
            <div>
              <div className="font-poppins font-semibold text-[48px] text-[#386FA4]">
                Dr. {data[active].name}
              </div>
              <div className="font-poppins text-[36px] text-[#59A5D8]">
                {data[active].profession}
              </div>
            </div>
          </div>
          <div className="mt-4  space-y-2">
            <div className="font-poppins text-[20px] text-[#84D2F6]">
              Email: {data[active].email}
            </div>
            <div className="font-poppins text-[20px] text-[#84D2F6]">
              Organization: {data[active].organization}
            </div>
            <div className="font-poppins text-[20px] text-[#84D2F6]">
              UUID: {data[active].uuid}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contacts;
