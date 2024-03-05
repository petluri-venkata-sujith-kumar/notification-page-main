import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LikeComponent from "./LikeComponent";
import { useLocation } from "react-router-dom";
import CommentNotify from "./CommentNotify";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const user = useLocation();
  const userData = user.state.user;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Comment" {...a11yProps(0)} />
          <Tab label="Like" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <section className="flex flex-col gap-2">
          {userData.comment.map((e: string, i: number) => (
            <div key={i}>
              <div>
                <CommentNotify content={e} />
              </div>
            </div>
          ))}
        </section>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <section className="flex flex-col gap-2">
          {userData.like ? <LikeComponent /> : ""}
        </section>
      </CustomTabPanel>
    </Box>
  );
}
