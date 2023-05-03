import { HiOutlineArrowUp } from "react-icons/hi2";
import { motion } from "framer-motion";
import useScrollTop from "../../hooks/useScrollTop";
const ScrollTop = () => {
  const [isScrollTop] = useScrollTop();
  const handleScrollTop = () => {
    document.documentElement.scrollTop = 0;
  };
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 2 }}
      className={`${
        isScrollTop ? "flex" : "hidden"
      } fixed bottom-2 right-2 bg-primary py-2 border-solid z-[9999] border-white border-[1px]  items-center justify-center cursor-pointer`}
      onClick={handleScrollTop}
    >
      <HiOutlineArrowUp className="text-white" size={50} />
    </motion.div>
  );
};

export default ScrollTop;
