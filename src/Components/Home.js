/* eslint-disable no-unused-vars */
import Reactو, { useEffect }  from "react";
import Counters from "../Components/Counters"
import BannerImage from "../Assets/home-phone.png";
import Apple from "../Assets/Apple.png";
import Android from "../Assets/Android.png";
import HomeNavbar from "./HomeNavbar";
import { FiArrowRight } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(()=>{
    AOS.init({duration: 2000});
   }, []);
  return (
    <div className="home-container" id="Home">
        
      <HomeNavbar />
      <div className="home-banner-container">
    
        <div className="col-md-6 home-text-section">
          <h1 className="primary-text-home">
          Simplified Group Payment Solutions
          </h1>
          <p className="secondary-text-home" >
          Gather and divide expenses among groups of friends, family, or
                colleagues effortlessly. Join now to organize and chip in for
                your preferred group endeavors
          </p>
          <div className="store-links">
          <a id="android" href="Android"><img border="0" alt="Apple" src={Android} ></img></a>
          <a id="apple" href="Apple"><img border="0" alt="Apple" src={Apple} ></img></a>
          </div>
        </div>
        <div className="col-md-6 home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
      {/* <Counters /> */}
    </div>
    
  );
};

export default Home;
