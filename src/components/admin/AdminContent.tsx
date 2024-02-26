import AdminNavbar from "./AdminNavbar";
import Cards from "./Cards";
import { BarChart } from "@mui/x-charts/BarChart";
import AdminTable from "./AdminTable";
import UsersBanner from "./UsersBanner";
import DomainPercentage from "./DomainPercentage";
import map from '../media/maps.png'
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AdminContent = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-[80%]">
      <AdminNavbar />
      <section>
        <article className="w-[100%] flex gap-2 px-12 pt-10">
          <aside className="w-[50%] bg-gray-200 p-2 rounded-lg shadow-lg shadow-emerald-800 pt-10">
            <BarChart
              series={[
                { data: [35, 44, 24, 34] },
                { data: [51, 6, 49, 30] },
                { data: [15, 25, 30, 50] },
                { data: [60, 50, 15, 25] },
              ]}
              height={290}
              xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" }]}
              margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
            />
            <h1 className="text-center font-bold tracking-widest">
              Project Quaterly Progress
            </h1>
          </aside>
          <aside className="w-[50%] rounded-lg">
            <DomainPercentage />
          </aside>
        </article>

        <article className="w-[100%] flex gap-2 px-12 pt-10">
          <aside className="w-[30%]">
            <UsersBanner />
          </aside>
          <aside className="w-[70%]">
            <AdminTable />
          </aside>
        </article>
        <Cards />

        <div className="w-[100%] flex justify-center pb-10">
        <article data-aos="flip-up" data-aos-duration="1000" className="w-[95%] overflow-hidden">
          <img src={map} alt="maps" className="rounded-lg hover:scale-[2.4] transition-all duration-[2s] cursor-pointer"/>
        </article>
        </div>

      </section>
    </div>
  );
};

export default AdminContent;
