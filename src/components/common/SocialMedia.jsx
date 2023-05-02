/* eslint-disable react/prop-types */
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  const SocialIconWrapper = ({ children }) => (
    <span className="bg-primary p-3  text-white relative border-inner hover:text-dark cursor-pointer  ">
      {children}
    </span>
  );
  return (
    <div className="flex  gap-x-6">
      <SocialIconWrapper>
        <Link to="www.twitter.com" target="_blank">
          <FaTwitter size={25} className="transition-all duration-500" />
        </Link>
      </SocialIconWrapper>
      <SocialIconWrapper>
        <Link to="www.facebook.com" target="_blank">
          <FaFacebookF size={25} className="transition-all duration-500" />
        </Link>
      </SocialIconWrapper>
      <SocialIconWrapper>
        <Link to="www.linkedin.com" target="_blank">
          <FaLinkedinIn size={25} className="transition-all duration-500" />
        </Link>
      </SocialIconWrapper>
    </div>
  );
};

export default SocialMedia;
