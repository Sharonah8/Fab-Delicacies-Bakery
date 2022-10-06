import React from "react";
import OrderButton from "./OrderButton";

const Slider = () => {
  return (
    <div className="slider-container">
      <p>
        Fab's Bakery, strives in providing fresh bake food to the community
        where it operates. With its commitment to produce quality bakery
        products cost effectively, in an environment that is perfectly clean,
        safe and friendly to both employees and the community.
      </p>
      {/* <button className="slider-btn"><OrderButton /> </button> */}
      <OrderButton />
    </div>
  );
};

export default Slider;
