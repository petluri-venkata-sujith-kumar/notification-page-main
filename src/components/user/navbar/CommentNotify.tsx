import React from "react";
import Avatar from "@mui/material/Avatar";
import { useLocation } from "react-router-dom";
import { MdCancel } from "react-icons/md";

const CommentNotify = ({ content }: { content: string }) => {
  // const user = useLocation();
  // const userData = user.state.user;
  // console.log(userData);
  // console.log(userData.comment);

  const box = React.useRef(null);

  const deleteComment = (event: React.SyntheticEvent) => {
    box.current.style.display = 'none';
  };

  return (
    <div  ref={box}  className="w-[100%] py-2 shadow-lg rounded-md flex justify-between text-[16px] border-b-2 ">
      <article className="w-[100%] py-1">
        <div className="flex justify-end opacity-50 pr-3 pb-1">
          <button>
            <MdCancel className="cursor-pointer transition-all scale-110 duration-200 hover:rotate-[35deg] hover:scale-105 absolute bg-[#a6e6f5bd] rounded-[50%] border-1 scale-105  border-emerald-400" />
          </button>
        </div>
        <span className="pt-2 pl-2 text-teal-800"> {content} </span>
      </article>
    </div>
  );
};

export default CommentNotify;
