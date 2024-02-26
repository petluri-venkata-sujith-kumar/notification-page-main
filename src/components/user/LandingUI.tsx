import "../sass/main.scss";
import SingleUser from "./SingleUser";
import Navbar from "./navbar/Navbar";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const LandingUI = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section data-aos="zoom-in-down" data-aos-duration="2000" id="ui-container">
      <Navbar />
      <SingleUser />
    </section>
  );
};

export default LandingUI;
