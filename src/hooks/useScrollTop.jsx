import { useEffect, useState } from "react";

const useScrollTop = () => {
  const [isScrolledTop, setIsScrolledTop] = useState(false);

  useEffect(() => {
    const handleScrollTop = () => {
      if (window.scrollY > 700) setIsScrolledTop(true);
      else setIsScrolledTop(false);
    };
    window.addEventListener("scroll", handleScrollTop);

    return () => window.removeEventListener("scroll", handleScrollTop);
  }, [isScrolledTop]);

  return [isScrolledTop];
};

export default useScrollTop;
