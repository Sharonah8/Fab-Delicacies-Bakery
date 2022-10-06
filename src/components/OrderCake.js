import React, { useState, useEffect } from "react";

function OrderCake() {
  const [inputdata, setInputdata] = useState({
    name: "",
    quantity: "",
    comment: "",
  });
  function handleChange(e) {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  }

  return (
    <div className="order-form">
      Hello world
      <input
        type="text"
        name="name"
        value={inputdata.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="quantity"
        value={inputdata.quantity}
        onChange={handleChange}
      />
      <input
        type="text"
        name="comment"
        value={inputdata.comment}
        onChange={handleChange}
      />
    </div>
  );
}

export default OrderCake;
