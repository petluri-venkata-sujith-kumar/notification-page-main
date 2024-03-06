import Avatar from "@mui/material/Avatar";
import img from "../media/india.png";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import "@fontsource/roboto/500.css";
import { Link, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const AdminNavbar = () => {
  const user = useLocation();

  const userData = user.state.user;
  const handleLogout=()=>{
    window.localStorage.removeItem("loginUser")
    toast.success('logout Successfully !')
   }
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
      // vertical padding + font size from searchIcon
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
    <nav className="bg-[#F9FAFB] w-[100%] h-[11vh] z-10 sticky top-0 flex items-center">
      <article className="w-[75%] flex ">
        <h3 className="text-gray-800 font-mono pt-[12px] pl-7 text-[18px]">
          Welcome,
          <span className="text-emerald-500">
            {userData.firstName} {userData.lastName}{" "}
          </span>{" "}
        </h3>
        <div className="pl-10">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Users .."
              inputProps={{ "aria-label": "search" }}
              className="border-2 border-[#5c5e5c28] shadow-sm rounded-lg"
            />
          </Search>
        </div>
      </article>
      <article className="w-[25%] flex justify-end pt-2 pr-4">
        <Avatar
          alt="Remy Sharp"
          src={userData.imageUrl}
          className="scale-125 hover:scale-110 cursor-pointer transition-all duration-200"
        />
        <img
          src={img}
          alt=""
          className="scale-[0.6] relative bottom-6 right-4"
        />

        <Link to="/">
          <button onClick={handleLogout} className="py-2 opacity-85 cursor-pointer px-8 rounded-lg bg-gray-900 text-white hover:text-black hover:border-2 hover:border-emerald-900 hover:bg-white transition-all duration-200">
            Logout
          </button>
        </Link>
      </article>
    </nav>
  );
};

export default AdminNavbar;
