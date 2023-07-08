import React, { useContext } from "react";
import ReactDOM from "react-dom";
import AppContext from "../../context/AppContext";
function Editmodal({ children ,onSubmit }) {
  const contextdata = useContext(AppContext);
  return ReactDOM.createPortal(
    <div
      className={contextdata.isDarkTheme?"dark w-screen h-screen fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-opacity-50 bg-black":"w-screen h-screen fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-opacity-50 bg-black"}
      dir="rtl"
    >
      <div className="p-4 rounded-lg shadow-lg bg-white dark:bg-slate-600 w-5/6 lg:w-1/2">
        <form action="#" className="">
          {children}
          <div className="flex items-center justify-end">
            <button
              className="mt-4 p-2 px-4 rounded-md bg-slate-700 text-white hover:text-slate-700 hover:bg-transparent border-2 dark:border-yellow-500 border-slate-700 transition-all font-VazirBold dark:bg-yellow-500 dark:hover:text-white dark:hover:bg-transparent dark:hover:border-white"
                onClick={onSubmit}
            >
              ویرایش 
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Editmodal;
