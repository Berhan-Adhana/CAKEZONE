import { AiOutlineMail } from "react-icons/ai";
import { FaBirthdayCake } from "react-icons/fa";
import { BsPhoneVibrate } from "react-icons/bs";

const Banner = () => {
  return (
    <div className="hidden h-[70px] gap-x-[5rem] lg:flex items-center justify-between bg-white w-full px-[65px]">
      {/* 1 */}
      <div className="flex items-center gap-x-4">
        <AiOutlineMail size={30} className="text-primary" />
        <div className="flex flex-col">
          <h6 className="uppercase font-[500] font-oswald">EMAIL US</h6>
          <a href="mailto:info@example.com" className="text-gray">
            info@example.com
          </a>
          <p></p>
        </div>
      </div>
      {/* 2 */}
      <div className="bg-primary h-full flex items-center justify-center grow">
        <div className="flex border-solid border-2 w-[99%] justify-center border-white gap-x-4 items-center cursor-pointer">
          <FaBirthdayCake className="text-black" size={50} />
          <p className="text-white uppercase text-[calc(1.375rem+1.5vw)] font-oswald font-bold ">
            CAKEZONE
          </p>
        </div>
      </div>
      {/* 3 */}
      <div className="flex items-center gap-x-4">
        <BsPhoneVibrate size={30} className="text-primary" />
        <div className="flex flex-col">
          <h6 className="uppercase font-[500] font-oswald">CALL US</h6>
          <a href="tel:+0123456789" className="text-gray">
            +012 345 6789
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
