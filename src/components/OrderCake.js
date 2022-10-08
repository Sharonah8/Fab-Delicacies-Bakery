import React, { useState } from "react";

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

      <button className="form-btn" onClick={handleChang}>
        Submit
      </button>

      <table border={2} cellPadding={10}>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Quantity</td>
            <td>Customization Message</td>
          </tr>
          {inputarr.map((info, ind) => {
            return (
              <tr key={ind}>
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
