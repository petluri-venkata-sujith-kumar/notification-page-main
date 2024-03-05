import React from "react";
import { MdCancel } from "react-icons/md";

const CommentNotify = ({ content, onRemove }: { content: string, onRemove: () => void }) => {
  const box = React.useRef(null);
  
  const handleRemove = () => {
    onRemove();
  };
  return (
    <div
      ref={box}
      className="w-[100%] py-2 shadow-lg rounded-md flex justify-between text-[16px] border-b-2 "
    >
      <article className="w-[100%] py-1">
        <div className="flex justify-end opacity-50 pr-3 pb-1">
          <button onClick={handleRemove}>
            <MdCancel className="cursor-pointer transition-all scale-110 duration-200 hover:rotate-[35deg] hover:scale-105 absolute bg-[#a6e6f5bd] rounded-[50%] border-1 scale-105  border-emerald-400" />
          </button>
        </div>
        <span className="pt-2 pl-2 text-teal-800"> {content} </span>
      </article>
    </div>
  );
};

export default CommentNotify;
