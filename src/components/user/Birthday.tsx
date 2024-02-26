import React from "react";
import { PiCakeLight } from "react-icons/pi";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Zoom from "@mui/material/Zoom";
import FormControlLabel from "@mui/material/FormControlLabel";
import birth from "../media/Animation - 1708363372216.mp4";
import { useLocation } from "react-router-dom";

const Birthday = () => {
  const user=useLocation();
  const userData=user.state.user
  const birthDate = new Date(userData.dateOfBirth);
  const dayOfMonth = birthDate.getDate();
  const monthIndex = birthDate.getMonth();
  
  // Array of month names
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const icon1 = (
    <Paper
      sx={{
        m: 1,
        width: 100,
        height: 100,
        borderRadius: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      elevation={4}
    >
      <h1>{dayOfMonth}</h1>
    </Paper>
  );
  const icon2 = (
    <Paper
      sx={{
        m: 1,
        width: 100,
        height: 100,
        borderRadius: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 5,
      }}
      elevation={0}
    >
      <h1>{months[monthIndex]}</h1>
    </Paper>
  );
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div id="birthday-box">
      <section className="w-[100%] h-[20%] flex justify-between border-b-2 border-yellow-100">
        <h1 className="w-[100%] pl-1 text-left">Birthday !!</h1>
        <article>
          <PiCakeLight />
        </article>
      </section>
      <section>
        <article className="birthday-icon">
          <Box sx={{ height: 180 , transform:"scale(0.94)", position:"relative", bottom:"10px" }}>
            <FormControlLabel
              control={<Switch checked={checked} onChange={handleChange} />}
              label="lets see Birthday "
            />
            <Box sx={{ display: "flex",position:"relative", right:"10px"  }}>
              <Zoom in={checked}>{icon1}</Zoom>
              <Zoom
                in={checked}
                style={{ transitionDelay: checked ? "500ms" : "0ms" }}
              >
                {icon2}
              </Zoom>
            </Box>
          </Box>

          {checked ? (
            <video
              src={birth}
              loop
              autoPlay
              className="z-10 relative bottom-44 left-[220px] opacity-70 rounded-[50%] border-2 border-emerald-400"
              width={70}
            ></video>
          ) : (
            ""
          )}
        </article>
      </section>
    </div>
  );
};

export default Birthday;
