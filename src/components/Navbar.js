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
      <img src="./src/Images/Logo.jpg" alt="Logo" />
      <ul className="nav-list">
        <Link calssName="" to="/aboutUs">About Us</Link>
        <Link>Find Us</Link>
        <li>Place order</li>
        <li>Login</li>
      </ul>
    </div>
  );
}

export default Navbar;
