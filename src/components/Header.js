import { CART_LOGO_URL, LOGO_URL } from "../utils/constants";
import { useState } from "react";

let Header = () => {
  const [btnName, setbtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className=" nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>
            <img className="cart" src={CART_LOGO_URL} alt="Logo"></img>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              (btnName === "Login")? setbtnName("Logout") : setbtnName("Login");
              
            }}
          >
            {" "}
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
