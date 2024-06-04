import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log("items", cartItems);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="w-48" src={LOGO_URL} alt="logo" />
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4 items-center">
          <li className="px-4 text-xl">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4 text-xl">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-xl">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 text-xl">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
          <button
            className="border border-black bg-purple-300 hover:bg-purple-200 p-2 m-2 rounded text-lg"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="p-2 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
