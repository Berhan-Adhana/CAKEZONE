import { BsArrowRight, BsTelephone } from "react-icons/bs";
import { FaBirthdayCake } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoMailOpenOutline } from "react-icons/io5";
import SocialMedia from "./SocialMedia";
import { NavLink } from "react-router-dom";
const Footer = () => {
  const footerLinks = [
    {
      name: "Home",
      linkTo: "/",
    },
    {
      name: "ABout Us",
      linkTo: "/about",
    },
    {
      name: "Our Services",
      linkTo: "/services",
    },
    {
      name: "Meet the team",
      linkTo: "/teams",
    },
    {
      name: "Latest blog",
      linkTo: "/blogs",
    },
    {
      name: "Contact Us",
      linkTo: "/contact",
    },
  ];
  return (
    <footer className="section common-bg">
      <div className="flex flex-col md:flex-row justify-between gap-x-8 items-center lg:items-start">
        <div className="bg-primary p-4 md:h-screen lg:h-max relative flex flex-col gap-y-6 md:self-start md:grow md:shrink-0  md:w-1/2 border-inner lg:w-2/5 lg:max-w-[320px] py-12 md:top-0 lg:-top-12 ">
          <span className="flex  justify-center border-white gap-x-4 items-center cursor-pointer">
            <FaBirthdayCake className="text-black" size={37} />
            <p className="text-white uppercase text-[calc(1.375rem+1.5vw)] font-oswald font-bold ">
              CAKEZONE
            </p>
          </span>
          <p className="text-white">
            Lorem diam sit erat dolor elitr et, diam lorem justo labore amet
            clita labore stet eos magna sit. Elitr dolor eirmod duo tempor
            lorem, elitr clita ipsum sea. Nonumy rebum et takimata ea takimata
            amet gubergren, erat rebum magna lorem stet eos. Diam amet et kasd
            eos duo dolore no.
          </p>
        </div>
        <div className="flex flex-col gap-y-6 items-center lg:flex-row lg:justify-between">
          <div className=" flex flex-col gap-y-4 mt-12">
            <h4 className="font-bold text-primary font-oswald">GET IN TOUCH</h4>
            <span className="flex gap-x-2 ">
              <IoLocationSharp size={30} className="text-primary" />
              <p className="text-white">123 Street, New York, USA</p>
            </span>
            <span className="flex gap-x-2">
              <IoMailOpenOutline size={30} className="text-primary" />
              <a href="mailto:info@example.com" className="text-white">
                info@example.com
              </a>
            </span>
            <span className="flex gap-x-2">
              <BsTelephone size={30} className="text-primary" />
              <a href="tel:+012 345 67890" className="text-white">
                +012 345 67890
              </a>
            </span>
            <div className="mt-2">
              <SocialMedia />
            </div>
          </div>
          <div className="flex flex-col gap-y-2 mt-12">
            <h4 className="font-bold text-primary font-oswald ">QUICK LINKS</h4>
            {footerLinks.map((link, index) => (
              <span
                key={index}
                className="flex gap-x-2 items-center group transition-all duration-500"
              >
                <BsArrowRight
                  size={30}
                  className="text-primary group-hover:translate-x-1"
                />
                <NavLink
                  to={link.linkTo}
                  className="text-white whitespace-nowrap capitalize"
                >
                  {link.name}
                </NavLink>
              </span>
            ))}
          </div>
          <div className="lg:w-1/5 flex flex-col items-center gap-y-2 mt-12">
            <h4 className="font-bold text-primary font-oswald">NEWSLETTER</h4>
            <p className="text-white">
              Amet justo diam dolor rebum lorem sit stet sea justo kasd
            </p>
            <div className=" h-[50px] w-full  relative mb-12">
              <input
                type="text"
                placeholder="Your Email"
                className="border-none outline-none h-full w-full shrink-0 grow placeholder:pl-2"
              />
              <button className="absolute right-0 text-white w-max px-2 bg-primary h-full font-oswald font-bold ">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
