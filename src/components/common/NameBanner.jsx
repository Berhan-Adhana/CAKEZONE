/* eslint-disable react/prop-types */
const NameBanner = ({ title }) => {
  return (
    <div className="common-bg h-[10rem] flex items-center justify-center ">
      <h1 className="text-white text-[calc(1.475rem+2.7vw)] font-bold font-oswald uppercase ">
        {title}
      </h1>
    </div>
  );
};

export default NameBanner;
