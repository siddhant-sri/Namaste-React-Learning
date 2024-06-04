import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "../src/Components/Header";
import Body from "../src/Components/Body";
import About from "./Components/About";
import Error from "./Components/Error";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Components/Cart";

const AppLayout = () => {
  const [userName, setUserName] = useState();

  // let's say for auth we will get user data
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Siddhant Srivastava",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
