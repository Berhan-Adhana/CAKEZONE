/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const SubTitle = ({ subtitle }) => {
  return (
    <motion.h2
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="text-primary font-pacifico text-[calc(1.325rem+.9vw)] text-center"
    >
      {subtitle}
    </motion.h2>
  );
};
`1`;

export default SubTitle;
