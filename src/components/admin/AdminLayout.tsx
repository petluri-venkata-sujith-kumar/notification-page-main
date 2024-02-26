import "../sass/main.scss";
import AdminSidebar from "./AdminSidebar";
import AdminContent from "./AdminContent";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AdminLayout = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className="w-[100%] bg-slate-300 flex"
      >
        <AdminSidebar />
        <AdminContent />
      </div>
    </>
  );
};

export default AdminLayout;
