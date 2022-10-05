import React from "react";
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import FindUs from "./FindUs";
import Footer from "./Footer";
import Feedback from "./Feedback";
import Slider from "./Slider";
import Cakes from "./Cakes";
// import OrderCake from "./OrderCake";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      {/* <OrderCake /> */}
      <Cakes />
      <AboutUs />
      <Feedback />
      <FindUs />
      <Footer />
    </div>
  );
};

export default Home;
