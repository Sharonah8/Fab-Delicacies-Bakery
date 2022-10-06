import React, { useState, useEffect } from "react";

function OrderCake() {
  const [inputarr, setInputarr] = useState([]);

  const [inputdata, setInputdata] = useState({
    name: "",
    quantity: "",
    comment: "",
  });

  function handleChange(e) {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  }

  let { name, quantity, comment } = inputdata;
  function handleChang() {
    setInputarr([...inputarr, { name, quantity, comment }]);
    // console.log(inputarr);
    setInputdata({ name: "", quantity: "", comment: "" });
  }

  function handleChang2() {
    console.log("data is", inputarr);
  }

  return (
    <div className="order-form">
      <input
        className="order-input"
        type="text"
        name="name"
        value={inputdata.name}
        onChange={handleChange}
        placeholder="Enter cake type"
      />
      <input
        className="order-input"
        type="text"
        name="quantity"
        value={inputdata.quantity}
        onChange={handleChange}
        placeholder="Quantity in kg"
      />
      <input
        className="order-input"
        type="text"
        name="comment"
        value={inputdata.comment}
        onChange={handleChange}
        placeholder="Message on cake"
      />

      <button className="form-btn" onClick={handleChang2}>
        Submit
      </button>

      <table border={1} cellPadding={10}>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Quantity</td>
            <td>Customization</td>
          </tr>
          {inputarr.map((info, ind) => {
            return (
              <tr>
                <td>{info.name}</td>
                <td>{info.quantity}</td>
                <td>{info.comment}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default OrderCake;
