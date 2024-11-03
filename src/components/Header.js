import { CART_LOGO_URL, LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

let Header = () => {
  const [btnName, setbtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className=" nav-items">
        <ul>
          <li>
            Online Status : {onlineStatus?"🟢":"🔴"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to = "/about">About Us</Link>
          </li>
          <li>
            <Link to = "/contact">Contact Us</Link>
          </li>
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
