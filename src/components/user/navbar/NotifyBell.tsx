import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Badge } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BasicTabs from "./BasicTabs";

const NotifyBell = () => {
  const user = useLocation();
  const userData = user.state.user;
  const [liker, setLiker] = useState(false);
  const [flag, setFlag] = useState(false);
  const notifySize = userData.comment.length;

  useEffect(() => {
    {
      liker ? notifySize : notifySize + 1;
    }
  }, [liker]);

  function clicked() {
    setFlag(!flag);
  }

  return (
    <div>
      <Badge color="secondary" badgeContent={notifySize}>
        <button onClick={clicked}>
          <NotificationsNoneIcon className="notify-bell" />
        </button>
      </Badge>
      {flag ? (
        <div
          id="notify-box"
          className="flex flex-col items-center h-[90vh] w-[420px] absolute right-0 top-[73px] transition-all duration-500 border-l-2 border-t-2 border-emerald-900"
        >
          <section className="w-[94%] h-[94%] border-2 border-gray-300 shadow-md rounded-lg bg-[#ffff001e] relative top-6">
            <article className="w-[100%] relative top-1 pl-2 text-left text-[#000000]">
              <h1>Notifications : </h1>
            </article>
            <div className="h-[1px] w-[100%] bg-[#80808054] relative top-1"></div>
            <section className="h-[100%] overflow-y-auto">
              <BasicTabs />
            </section>
          </section>
        </div>
      ) : (
        ""
      )}
      {}
    </div>
  );
};

export default NotifyBell;
