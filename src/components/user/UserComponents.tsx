import  {  useRef } from "react";
import Calender from "./Calender";
import Birthday from "./Birthday";
import Welcome from "./Welcome";
import Learning from "./Learning";
import SocialLinks from "./SocialLinks";

const UserComponents = () => {
  let box: any = useRef();

  return (
    <section className="components-container">
      <div className="user-component1">
        <div className="user-calender" ref={box}>
          <Calender />
        </div>
      </div>
      <div className="user-component2">
        <div className="user-birthday" ref={box}>
          <Birthday />
        </div>
        <div className="user-welcome" ref={box}>
          <SocialLinks />
        </div>
      </div>
      <div className="user-component3">
        <div className="user-learning h-[230px]" ref={box}>
          <Learning />
        </div>
        <div className="user-morelinks" ref={box}>
          <Welcome />
        </div>
      </div>
    </section>
  );
};

export default UserComponents;
