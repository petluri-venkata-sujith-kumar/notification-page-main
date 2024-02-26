import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Link, useLocation } from "react-router-dom";
import NotifyModal from "./NotifyModal";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
const Navbar = () => {
  const user = useLocation();
  const userData = user.state.user;

  const [liker, setLiker] = useState(false);
  const [notify, setNotify] = useState(0);

  useEffect(() => {
    setLiker(userData.like);
    {
      liker
        ? setNotify(userData.comment.length + 1)
        : setNotify(userData.comment.length);
    }
    {
      notify > 0
        ? toast.custom((t) => (
            <section className="w-[100%] h-[95vh] flex justify-end items-end">
              <div
                className={`${
                  t.visible ? "animate-enter" : "animate-leave"
                } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 `}
              >
                <div className="flex-1 w-0 p-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 pt-0.5">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={userData.imageUrl}
                        alt="user"
                      />
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {userData.firstName}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        You have New Notifications !!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex border-l border-gray-200">
                  <button
                    onClick={() => toast.dismiss(t.id)}
                    className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Close
                  </button>
                </div>
              </div>
            </section>
          ))
        : "";
    }
  }, [notify]);

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "28ch",
        "&:focus": {
          width: "40ch",
        },
      },
    },
  }));

  return (
    <nav id="navbar">
      <aside className="flex gap-8 nav-side-left text-purple-100">
        Innovators United
        <div className="pl-10">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Now .."
              inputProps={{ "aria-label": "search" }}
              className="border-2 border-[#5c5e5c28] shadow-sm rounded-lg"
            />
          </Search>
        </div>
      </aside>
      <aside className="w-[20%] flex gap-2">
        <NotifyModal prop={notify} />
        <article className="flex relative left-16 text-[17px]">
          <Avatar
            alt="Remy Sharp"
            src={userData.imageUrl}
            className="scale-125 border-2 hover:scale-110 cursor-pointer transition-all duration-200 relative right-8"
          />
          <Link to="/">
            <button className="opacity-85 cursor-pointer px-8 py-2 rounded-lg bg-gray-100 text-black hover:text-white hover:border-2 hover:border-emerald-100 hover:bg-gray-900 transition-all duration-200">
              Logout
            </button>
          </Link>
        </article>
      </aside>
    </nav>
  );
};

export default Navbar;
