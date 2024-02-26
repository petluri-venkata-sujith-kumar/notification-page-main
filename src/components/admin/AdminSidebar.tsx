import MenuIcon from "@mui/icons-material/Menu";
import { TbPremiumRights } from "react-icons/tb";
import { Button, Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import gif from "../media/admin-logo.json";
import Lottie from "lottie-react";

const AdminSidebar = () => {
  return (
    <div className="bg-gray-50 h-[100vh] overflow-hidden w-[20%] sticky top-0 flex flex-col font-mono">
      <article className="w-[100%] text-[20px] h-[11.1vh] flex items-center justify-between px-3 relative top-1">
        <h1 className="text-[28px] font-bold text-emerald-400 tracking-widest px-3 pt-2 rounded-lg">
          ADMIN
        </h1>
        <article className="relative left-12 scale-[0.6]"><Lottie animationData={gif} /></article>
      </article>

      <Sidebar aria-label="Sidebar with content separator example" className="w-[99%] pl-2 pb-20">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie} >
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiViewBoards}>
              Fireflink
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiInbox}>
              Inbox
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser}>
              Users
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>
              Products
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiArrowSmRight}>
              Domestic
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiTable}>
              International
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              Equities
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiViewBoards}>
              Documentation
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={BiBuoy}>
              Help
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      <Button className="w-[90%] m-auto relative bottom-[50.9px]">
         <p className="tracking-normal"> UPGRADE TO PREMIUM </p> <div className="text-[24px] pl-12"><TbPremiumRights /></div>
      </Button>
    </div>
  );
};

export default AdminSidebar;
