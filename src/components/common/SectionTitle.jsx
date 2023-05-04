import { motion } from "framer-motion";
import SubTitle from "./SubTitle";
import Title from "./Title";
import TitleDecoration from "./TitleDecoration";

// eslint-disable-next-line react/prop-types
const SectionTitle = ({ subTitle, title, isWhite }) => {
  return (
    <div className="py-5 overflow-x-hidden">
      <SubTitle subtitle={subTitle} />
      {/* section Title */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="flex items-center flex-col justify-center"
      >
        <Title title={title} isWhite={isWhite} />
        <TitleDecoration />
      </motion.div>
    </div>
  );
};

export default SectionTitle;
