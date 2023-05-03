import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Banner from "./components/common/Banner";
import Error from "./pages/Error";
import ScrollTop from "./components/common/ScrollTop";
import { About, Contacts, Home, MasterChef, MenuAndPricing } from "./pages";

export const Dashboard = () => {
  // Initialize the animation library
  useEffect(() => {}, []);
  return (
    <div className="">
      <Banner />
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollTop />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/menu-pricing",
        element: <MenuAndPricing />,
      },
      {
        path: "/master-chefs",
        element: <MasterChef />,
      },
      {
        path: "/contact",
        element: <Contacts />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
