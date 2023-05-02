import SubTitle from "./SubTitle";
import Title from "./Title";
import TitleDecoration from "./TitleDecoration";



// eslint-disable-next-line react/prop-types
const SectionTitle = ({ subTitle, title,isWhite }) => {
  return (
    <div>
      
      <SubTitle subtitle={subTitle} />
      {/* section Title */}
      <div className="flex items-center flex-col justify-center">
        <Title title={title} isWhite={isWhite} />
        <TitleDecoration />
      </div>
    </div>
  );
};

export default SectionTitle;
