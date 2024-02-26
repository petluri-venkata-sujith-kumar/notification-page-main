import { PieChart } from "@mui/x-charts/PieChart";
const Learning = () => {
  return (
    <>
      <aside className="w-[100%] h-[20%] flex justify-between px-4 pt-2 border-b-2 border-green-200">
        <h1 className="text-[20px]">Skills and languages :</h1>
        <a href="#" className="text-[blue] text-[16px]">
          View More
        </a>
      </aside>
      <aside className="w-[70%] h-[70%] ">
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 35, label: "HTML & CSS" },
                { id: 1, value: 15, label: "JavaScrpit" },
                { id: 2, value: 10, label: "TypeScript" },
                { id: 3, value: 30, label: "React" },
                { id: 4, value: 10, label: "Tailwind CSS" },
              ],
            },
          ]}
          width={380}
          height={160}
          sx={{ transform : "scale(0.85)" , display: "flex", gap: "2", position:"relative", right: "50px"}}
          
        />
      </aside>
    </>
  );
};

export default Learning;
