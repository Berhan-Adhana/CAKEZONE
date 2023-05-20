/* eslint-disable react/prop-types */
import classNames from "classnames";

const Button = ({ children, primary, secondary, ...rest }) => {
  const customClassNames = classNames(
    rest.className,
    "py-4 px-12 text-white font-oswald font-bold relative before:absolute before:border-[1px] before:border-white  before:content-[''] before:top-2 before:left-2 before:right-2 before:bottom-2 transition-all duration-300 hover:scale-105 hover:rounded-md hover:shadow-lg",
    {
      "bg-primary hover:text-black": primary,
      "bg-dark hover:text-primary": secondary,
    }
  );
  return (
    <button className={customClassNames} {...rest}>
      {children}
    </button>
  );
};

export default Button;
