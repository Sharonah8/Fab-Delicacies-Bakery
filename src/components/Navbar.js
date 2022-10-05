import React from "react";
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
        <li>About Us</li>
        <li>Find Us</li>
        <li>Place order</li>
        <li>Login</li>
      </ul>
    </div>
  );
}

export default Navbar;
