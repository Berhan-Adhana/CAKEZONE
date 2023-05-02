// eslint-disable-next-line react/prop-types
const Title = ({ title, isWhite }) => {
  return (
    <h1
      className={`text-[calc(1.475rem+2.7vw)] text-center font-oswald ${
        isWhite ? "text-white" : ""
      }`}
    >
      {" "}
      {title}
    </h1>
  );
};

export default Title;
