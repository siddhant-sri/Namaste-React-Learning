import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between p-4 bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="w-44" src={LOGO_URL} alt="logo" />
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
          <li className="px-4 text-xl">Cart</li>
          <button
            className="border border-black bg-purple-300 hover:bg-purple-200 p-2 m-2 rounded text-lg"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
