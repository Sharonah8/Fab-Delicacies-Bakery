import React from "react";
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import FindUs from "./FindUs";
import Footer from "./Footer";
import Feedback from "./Feedback";
import Slider from "./Slider";
import Cakes from "./Cakes";
import OrderCake from "./OrderCake";

import { Routes, Route } from "react-router-dom";
const Home = () => {
  return (
    <Routes>
      <Route element={<Slider />} path="/" />
      {/* <Slider />
     
      <Cakes /> */}

      <Route element={<Cakes />} path="/cakes" />
      <Route path="/aboutUs" element={<AboutUs />} />
      {/* <Feedback />
      <FindUs /> */}
      <Route element={<OrderCake />} path="/orderCake" />
      {/* <Footer /> */}
    </Routes>
  );
};

export default Home;
