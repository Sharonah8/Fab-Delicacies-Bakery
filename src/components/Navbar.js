import React from "react";
import { Link } from "react-router-dom";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { MdImageSearch, MdOutlineRestaurantMenu } from "react-icons/md";
// import images from "../Images";

// const mystyle = {
//   height: "60px",
//   color: "white",
// };

function Navbar() {
  return (
    <div className="nav-container">
      {/* <img src="./src/Images/Logo.jpg" alt="Logo" /> */}
      <p className="nav-title">Fab's Bakery</p>
      <ul className="nav-list">
        <Link className="nav-link" to="/aboutUs">About Us</Link>
        <Link className="nav-link" to="/findUs">Find Us</Link>
        <Link className="nav-link" to="/orderCake">Place order</Link>
      </ul>
    </div>
  );
}

export default Navbar;
