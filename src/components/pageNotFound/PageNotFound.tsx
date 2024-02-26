import { Link } from "react-router-dom";
import img from "../media/penguin img.jpg";
import { IoArrowBackSharp } from "react-icons/io5";

const PageNotFound = () => {
  return (
    <div className="notfound-container">
      <div className="content">
        <h2>Sorry</h2>
        <h2>Sorry</h2>
        <div className="container-1">
          <div className="inner-container-1">
            <h4>Page Not Found</h4>
          </div>
          <div className="para-content">
            <p>Either Something Get wrong or the page doesn't exist anymore</p>
          </div>
          <div className="inner-container-2">
            <img className="gif" src={img} />
          </div>
        </div>
        <div>
          <Link to="/">
            <span className="flex justify-end">
              <IoArrowBackSharp className="relative right-3 top-[10px] scale-125 opacity-75 hover:opacity-100"/>
              <h1 className=" text-red-500 text-[20px] cursor-pointer hover:underline hover:underline-offset-2">
                {" "}
                Go Back{" "}
              </h1>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
