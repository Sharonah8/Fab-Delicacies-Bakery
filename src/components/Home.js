import React from "react";
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import FindUs from "./FindUs";
import Footer from "./Footer";
import Feedback from "./Feedback";
import Slider from "./Slider";
// import OrderCake from "./OrderCake";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      {/* <OrderCake /> */}
      <AboutUs />
      <Feedback />
      <FindUs />
      <Footer />
    </div>
  );
};

export default Home;
