import { LuUserCircle } from "react-icons/lu";
import { SlPencil } from "react-icons/sl";
import { AiOutlineHome } from "react-icons/ai";
import { FaChartLine } from "react-icons/fa6";
import UserComponents from "./UserComponents";
import { useLocation } from "react-router-dom";

const SingleUser = () => {
  const user=useLocation();
  const userData=user.state.user

  return (
    <main id="user-container">
      <section id="user-box">
        <aside className="user-box-left relative bottom-2">
          <LuUserCircle className="user-icon" />
          <span className="user-welacome-name ">
            Welcome ,  {userData.firstName} {userData.lastName}
          </span>
        </aside>
        <aside className="user-box-right">
          <SlPencil className="personalize-icon" />{" "}
          <span className="font-mono text-[20px] relative bottom-1"> Personalize </span>
        </aside>
      </section>
      <div className="user-nav-box">
        <span className="triangle-1"></span>
        <article className="user-nav-first">
          <AiOutlineHome /> <span className="user-nav-icon-label">Home</span>
        </article>
        <article className="user-nav-second">
          <FaChartLine />
        <span className="user-nav-icon-label">Growth</span>
        </article>
      </div>
      <UserComponents />
    </main>
  );
};

export default SingleUser;
