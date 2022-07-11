import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-[#F9F9F9]">Dashboard</div>
    </div>
  );
};

export default Dashboard;
