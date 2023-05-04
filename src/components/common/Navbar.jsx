import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isTop, setIsTop] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  console.log(isSticky);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleMenuClicked = (event) => {
    event.preventDefault();
    setIsMenuOpened(!isMenuOpened);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.screenY >= 35) {
        setIsSticky(true);
      } else setIsSticky(false);

      if (window.scrollY >= 70) {
        setIsTop(true);
      } else setIsTop(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  const menuLinks = [
    {
      name: "Home",
      linkTo: "/",
    },
    {
      name: "ABout Us",
      linkTo: "/about",
    },
    {
      name: "Menu & Pricing",
      linkTo: "/menu-pricing",
    },
    {
      name: "Master Chefs",
      linkTo: "/master-chefs",
    },
    {
      name: "Contact Us",
      linkTo: "/contact",
    },
  ];

  return (
    <div>
      {/* Desktop */}
      <nav
        className={`hidden bg-dark lg:flex items-center gap-x-5 justify-center transition-[height] duration-500 ${
          isTop ? "sticky inset-0" : ""
        } z-[999999]  h-[87px]`}
      >
        {menuLinks.map((menu, index) => (
          <motion.span
            key={index}
            initial={{ x: -50, y: 50, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.5+ 1 }}
            viewport={{ once: true }}
          >
            <NavLink
              to={menu.linkTo}
              className="uppercase text-[18px] font-oswald font-bold text-white hover:text-primary transition-all ease duration-700 block relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 overflow-hidden  after:w-0 after:h-[1px] after:bg-white after:left-[50%] hover:after:left-0 hover:after:w-full after:transition-all after:ease after:duration-500"
            >
              {menu.name}
            </NavLink>
          </motion.span>
        ))}
      </nav>
      {/* Mobile and Tablet */}
      <nav className={`${isMenuOpened ? "menu" : "hideMenu"} }  lg:hidden`}>
        {menuLinks.map((menu, index) => (
          <NavLink key={index} to={menu.linkTo} className="menuItem">
            {menu.name}
          </NavLink>
        ))}
      </nav>

      <div
        onClick={(event) => handleMenuClicked(event)}
        className="w-[3.5rem] h-[3.5rem] border-solid border-white  border-2 rounded-full bg-primary fixed cursor-pointer bottom-0 m-[1em] z-[9999] flex items-center justify-center shadow-lg lg:hidden"
      >
        <FaBars size={30} className="text-white " />
      </div>
    </div>
  );
};

export default Navbar;
