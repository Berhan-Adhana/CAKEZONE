import React, { Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Banner from "./components/common/Banner";
import Error from "./pages/Error";
import Aos from "aos";
import ScrollTop from "./components/common/ScrollTop";

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const MasterChef = React.lazy(() => import("./pages/MasterChef"));
const MenuAndPricing = React.lazy(() => import("./pages/MenuAndPricing"));
const Contacts = React.lazy(() => import("./pages/Contacts"));

export const Dashboard = () => {
  // Initialize the animation library
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Banner />
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollTop />
    </>
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
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
