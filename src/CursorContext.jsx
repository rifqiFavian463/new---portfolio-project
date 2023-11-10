import { createContext, useEffect, useState } from "react";

export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  const [cursorBG, setCursorBG] = useState("default");
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,
  });

  const mouseEnterHandler = () => {
    setCursorBG("text");
  };

  const mouseLeaveHandler = () => {
    setCursorBG("default");
  };

  useEffect(() => {
    let move = (e) => {
      setCursorPos({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  });

  let cursorVariants = {
    default: {
      x: `${cursorPos.x - 1350}px`,
      y: `${cursorPos.y - 10}px`,
      backgroundColor: "#ffffff",
    },
    text: {
      width: "100px",
      height: "100px",
      x: `${cursorPos.x - 1320}px`,
      y: `${cursorPos.y - 35}px`,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
  };
  return <CursorContext.Provider value={{ cursorVariants, cursorBG, mouseEnterHandler, mouseLeaveHandler }}>{children}</CursorContext.Provider>;
};

export default CursorProvider;
