import { CART_LOGO_URL, LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserInfoContext from "../utils/UserInfoContext";
import { useSelector } from "react-redux";

let Header = () => {
  const [btnName, setbtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserInfoContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className = "flex justify-between bg-pink-100 shadow-lg m-2 sm:bg-orange-100 lg:bg-green-200">
      <div className="logo-container">
        <img className="w-48" src={LOGO_URL}></img>
      </div>
      <div className=" flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-2  text-black font-medium ">
            Online Status : {onlineStatus?"🟢":"🔴"}
          </li>
          <li className="px-2  text-black font-medium ">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2  text-black font-medium ">
            <Link to = "/about">About Us</Link>
          </li>
          <li className="px-2  text-black font-medium ">
            <Link to = "/contact">Contact Us</Link>
          </li>
          <li className="px-2  text-black font-medium ">
            <Link to = "/grocery">Grocery</Link>
          </li>
          <li className="px-2   text-black font-bold flex ">
            <Link to = "/cart"><img className="w-5 pt-1 "  src={CART_LOGO_URL} alt="Logo"></img> </Link> ( {cartItems.length} items ) 
          </li> 
          <button
            className=" px-2 bg-pink-300 text-black font-medium rounded-md shadow-sm hover:bg-pink-200"
            onClick={() => {
              (btnName === "Login")? setbtnName("Logout") : setbtnName("Login");
              
            }}
          >
            
            {btnName}
          </button>
          <li className="px-2   text-black font-medium ">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
