import Layout from "../components/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <div className="p-12">
        <div className="font-poppins text-[36px] font-semibold text-[#133C55]">
          Welcome Dr. Lee!
        </div>
        <div className="font-poppins text-[18px] text-[#386FA4]">
          Sunday July 3rd, 2022 6:36AM
        </div>
        <div className="h-[700px] mt-12 max-h-screen grid grid-rows-4 grid-cols-4 gap-4">
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <div className="font-poppins text-[24px] text-[#386FA4]">
              Total Orders
              <div className="font-poppins text-[16px] text-[#59A5D8]">
                Last Updated: current time
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
              Completed Orders
              <div className="font-poppins text-[16px] text-[#59A5D8]">
                Last Updated: current time
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
              Pending Orders
              <div className="font-poppins text-[16px] text-[#59A5D8]">
                Last Updated: current time
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
          <div className="row-span-3 bg-white p-24"></div>
          <div className="row-span-4 bg-white p-24">Recent Orders</div>
          <div className="row-span-3 col-span-2 bg-white p-24"></div>
          <div className="bg-white p-24"></div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
