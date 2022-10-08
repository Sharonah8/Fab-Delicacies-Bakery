import React from "react";
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import Slider from "./Slider";
import Cakes from "./Cakes";
import OrderCake from "./OrderCake";

import { Routes, Route } from "react-router-dom";
const Home = () => {
  return (
    <Routes>
      <Route element={<Slider />} path="/" />
      <Route element={<Cakes />} path="/cakes" />
      <Route element={<AboutUs />} path="/aboutUs" />
      <Route element={<OrderCake />} path="/orderCake" />
    </Routes>
  );
};

export default Home;
