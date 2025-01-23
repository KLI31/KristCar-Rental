import LogoDashboard from "../LogoDashboard/LogoDashboard";
import SidebarRoutes from "../SidebarRoutes/SidebarRoutes";

const Sidebar = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col h-full border-r">
        <LogoDashboard />
        <SidebarRoutes />
      </div>
    </div>
  );
};

export default Sidebar;
