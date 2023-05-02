/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export const Counter = ({ maxValue }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count >= maxValue) {
        clearInterval(interval);
      } else {
        setCount(count + 100);
      }
    }, 0.1);

    return () => clearInterval(interval);
  }, [count, maxValue]);

  return <h1 className="font-bold font-oswald text-white">{count}</h1>;
};
