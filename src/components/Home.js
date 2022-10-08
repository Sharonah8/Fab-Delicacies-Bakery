import React from "react";
import AboutUs from "./AboutUs";
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
