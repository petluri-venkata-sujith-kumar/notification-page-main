import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { ResponsiveChartContainer } from "@mui/x-charts/ResponsiveChartContainer";
import { BarPlot } from "@mui/x-charts/BarChart";
import { LinePlot } from "@mui/x-charts/LineChart";
import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";

const ProjectTrack = () => {
  const [type, setType] = React.useState<"line" | "bar">("line");

  return (
    <Box sx={{ width: "100%" }}>
      <h1 className="text-center bg-emerald-100 p-1"> Track Your Project </h1>
      <div className="relative bottom-9 ">
        <ResponsiveChartContainer
          series={[
            {
              type,
              data: [1, 2, 3, 2, 1],
            },
            {
              type,
              data: [4, 3, 1, 3, 4],
            },
          ]}
          xAxis={[
            {
              data: ["A", "B", "C", "D", "E"],
              scaleType: "band",
              id: "x-axis-id",
            },
          ]}
          height={200}
        >
          <BarPlot />
          <LinePlot />
          
          <ChartsXAxis label="X axis" position="bottom" axisId="x-axis-id" />
        </ResponsiveChartContainer>
        <TextField
        select
        value={type}
        onChange={(event) => setType(event.target.value as "line" | "bar")}
        label="series type"
        sx={{ minWidth: 150, }}
        style={{width: "50%", marginLeft: "25%", color: "white"}}
      >
        <MenuItem value="line">line</MenuItem>
        <MenuItem value="bar">bar</MenuItem>
      </TextField>
      </div>
    </Box>
  );
};

export default ProjectTrack;
