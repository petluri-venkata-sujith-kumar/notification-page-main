import { FaHeart } from "react-icons/fa6";
import Avatar from "@mui/material/Avatar";

const LikeComponent = () => {
  return (
    <div className=" w-[100%] py-2 shadow-lg rounded-md flex justify-between text-[16px] border-b-2 ">
      <article className="flex gap-2">
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/2.jpg"
          className="hover:scale-110 cursor-pointer transition-all duration-200"
        />
        <span className="pt-2 pl-2 text-teal-800">Admin Liked your photo</span>
      </article>

      <FaHeart className="text-red-400 relative top-3 right-3 scale-125"/>
    </div>
  );
};

export default LikeComponent;
