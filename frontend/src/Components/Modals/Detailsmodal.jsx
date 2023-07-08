import React, { useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import AppContext from "../../context/AppContext";
function Detailsmodal({ onhide, children }) {
  const contextdata = useContext(AppContext);
  useEffect(() => {
    window.addEventListener("mousedown", onhide);
    return () => window.removeEventListener("mousedown", onhide);
  });
  return ReactDOM.createPortal(
    <div
      className={
        contextdata.isDarkTheme
          ? "dark w-screen h-screen fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-opacity-50 bg-black"
          : "w-screen h-screen fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-opacity-50 bg-black"
      }
      dir="rtl"
    >
      {children}
    </div>,
    document.getElementById("modal")
  );
}

export default Detailsmodal;
