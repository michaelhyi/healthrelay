import { format } from "date-fns";
import { BsFillPersonFill } from "react-icons/bs";
import { MdPendingActions } from "react-icons/md";
import Layout from "../components/Layout";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


const notifications = [
  {
    text: "Dr. David Bowie approved Order #43",
    date: "June 26th, 2022 6:36 AM",
  },
  {
    text: "Dr. David Bowie approved Order #43",
    date: "June 26th, 2022 6:36 AM",
  },
  {
    text: "Dr. David Bowie approved Order #43",
    date: "June 26th, 2022 6:36 AM",
  },
  {
    text: "Dr. David Bowie approved Order #43",
    date: "June 26th, 2022 6:36 AM",
  },
  {
    text: "Dr. David Bowie approved Order #43",
    date: "June 26th, 2022 6:36 AM",
  },
  {
    text: "Dr. David Bowie approved Order #43",
    date: "June 26th, 2022 6:36 AM",
  },
  {
    text: "Dr. David Bowie approved Order #43",
    date: "June 26th, 2022 6:36 AM",
  },
  {
    text: "Dr. David Bowie approved Order #43",
    date: "June 26th, 2022 6:36 AM",
  },
  {
    text: "Dr. David Bowie approved Order #43",
    date: "June 26th, 2022 6:36 AM",
  },
  {
    text: "Dr. David Bowie approved Order #43",
    date: "June 26th, 2022 6:36 AM",
  },
  {
    text: "Dr. David Bowie approved Order #43",
    date: "June 26th, 2022 6:36 AM",
  },
  {
    text: "Dr. David Bowie approved Order #43",
    date: "June 26th, 2022 6:36 AM",
  },
];

const recentOrders = [
  {
    id: 43,
    date: "03/12/22 4:43 PM",
  },
  {
    id: 43,
    date: "03/12/22 4:43 PM",
  },
  {
    id: 43,
    date: "03/12/22 4:43 PM",
  },
  {
    id: 43,
    date: "03/12/22 4:43 PM",
  },
];

const data = [{
  name: 'Monday',
  uv: 400,
  pv: 240,
  amt: 240,
},
{
  name: 'Tuesday',
  uv: 300,
  pv: 139,
  amt: 221,
},
{
  name: 'Wednesday',
  uv: 200,
  pv: 890,
  amt: 229,
},
{
  name: 'Thursday',
  uv: 278,
  pv: 390,
  amt: 200,
},
{
  name: 'Friday',
  uv: 189,
  pv: 480,
  amt: 218,
},
];

const Dashboard = () => {
  return (
    <Layout>
      <div className="p-12">
        <div className="font-poppins text-[36px] font-semibold text-[#133C55]">
          Welcome Dr. Lee!
        </div>
        <div className="font-poppins text-[18px] text-[#386FA4]">
          {format(new Date(), "cccc LLLL do, y p")}
        </div>
        <div className="mt-12 grid grid-rows-4 grid-cols-4 gap-8">
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <div className="font-poppins text-[24px] text-[#386FA4]">
              <div className="font-semibold">Total Orders</div>
              <div className="font-poppins text-[16px] text-[#59A5D8]">
                Last Updated: {format(new Date(), "cccc LLLL do, y p")}
              </div>
              <div className="flex items-center">
                <div className="font-poppins font-medium text-[48px] text-[#386FA4]">
                  212
                </div>
                <div className="p-2 font-poppins text-[20px] text-[#00B232]">
                  +8
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <div className="font-poppins text-[24px] text-[#386FA4]">
              <div className="font-semibold">Completed Orders</div>
              <div className="font-poppins text-[16px] text-[#59A5D8]">
                Last Updated: {format(new Date(), "cccc LLLL do, y p")}
              </div>
              <div className="flex items-center">
                <div className="font-poppins font-medium text-[48px] text-[#386FA4]">
                  112
                </div>
                <div className="p-2 font-poppins text-[20px] text-[#00B232]">
                  +15
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <div className="font-poppins text-[24px] text-[#386FA4]">
              <div className="font-semibold">Pending Orders</div>
              <div className="font-poppins text-[16px] text-[#59A5D8]">
                Last Updated: {format(new Date(), "cccc LLLL do, y p")}
              </div>
              <div className="flex items-center">
                <div className="font-poppins font-medium text-[48px] text-[#386FA4]">
                  100
                </div>
                <div className="p-2 font-poppins text-[20px] text-[#00B232]">
                  +8
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-lg rounded-lg row-span-3 bg-white p-4">
            <div className="font-poppins text-[24px] text-[#386FA4] font-semibold">
              Notifications
            </div>
            {notifications.map((v) => (
              <div className="flex items-center mt-3 space-x-4">
                <BsFillPersonFill fill="#386FA4" size={40} />
                <div>
                  <div className="font-poppins text-[14px] text-[#59A5D8]">
                    {v.text}
                  </div>
                  <div className="font-poppins text-[14px] text-[#84D2F6]">
                    {v.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="shadow-lg rounded-lg row-span-3 bg-white p-4">
            <div className="font-poppins text-[24px] text-[#386FA4] font-semibold">
              Recent Orders
            </div>
            {recentOrders.map((v) => (
              <div className="mx-6 mt-6 space-x-4 flex items-center bg-[#F2F2F2] p-8 rounded-[12px]">
                <MdPendingActions size={35} fill="#386FA4" />
                <div>
                  <div className="font-poppins font-medium text-[24px] text-[#386FA4]">
                    Order #{v.id}
                  </div>
                  <div className="font-poppins text-[16px] text-[#59A5D8]">
                    {v.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="shadow-lg rounded-lg row-span-3 col-span-2 bg-white p-4">
            <div className="font-poppins text-[24px] text-[#386FA4] font-semibold">
              Recent Activity
            </div>
            <LineChart width={400} height={300} data={data} margin={{ top: 50}}>
              <XAxis dataKey="name"/>
              <YAxis/>
              <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
            </LineChart>
          </div>
          <div className="shadow-lg rounded-lg bg-white p-4">
            <div className="font-poppins text-[24px] text-[#386FA4] font-semibold">
              Profile
            </div>
            <div className="flex items-center space-x-4 mt-2">
              <BsFillPersonFill fill="#386FA4" size={40} />
              <div>
                <div className="font-poppins text-[#386FA4] text-[18px] font-semibold">
                  Dr. Oneil Lee
                </div>
                <div className="font-poppins text-[#59A5D8] text-[14px]">
                  Radiologist
                </div>
              </div>
            </div>
            <div className="font-poppins text-[16px] text-[#84D2F6] mt-2">
              Organization: Kaiser Permanante
            </div>
            <div className="font-poppins text-[16px] text-[#84D2F6]">
              UUID: 88403cc4-6702-44ae-bb27-171d20db6687
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
