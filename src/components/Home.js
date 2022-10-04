import React from "react";
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import FindUs from "./FindUs";
import Footer from "./Footer";
import Feedback from "./Feedback";

const Home = () => {
  return (
    <div>
      <Navbar />
      <AboutUs />
      <Feedback />
      <FindUs />
      <Footer />
    </div>
  );
};

export default Home;
