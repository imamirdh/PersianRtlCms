import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import { BsSun, BsClock, BsCalendarDate } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";
import { MdMenuOpen } from "react-icons/md";
import Clock from "clock-react";
function Navbar({ name, lastname, task, img }) {
  const contextdata = useContext(AppContext);
  let today = new Date().toLocaleDateString("fa-IR");
  return (
    <div className="navbar p-2 flex justify-between items-center h-[10%] bg-slate-800 text-white rounded-bl-[70px] border-b">
      <div className="profile flex items-center">
        <img src={img} alt="prof" className="w-12 h-12 rounded-full border" />
        <div className="mx-2 ">
          <p>
            {name} {lastname}
          </p>
          <span className="text-sm text-slate-300">{task}</span>
        </div>
      </div>
      <div className="iconsnavbar flex items-center justify-end px-5">
        <div className="hidden info lg:flex items-center gap-5 me-4">
          <div className="clock flex items-center gap-5">
            <div className="text-3xl">
              <BsClock />
            </div>
            <div className="italic text-lg font-VazirLight">
              <Clock />
            </div>
          </div>
          <div className="date flex items-center gap-5">
            <div className="text-3xl">
              <BsCalendarDate />
            </div>
            <div className="italic text-lg font-VazirLight">{today}</div>
          </div>
        </div>
        <button
          className="me-5 p-2 text-xl border-2 rounded-full hover:text-violet-400 hover:border-violet-500 hover:rotate-45 duration-500 transition-all"
          onClick={() => contextdata.setIsDarkTheme((prev) => !prev)}
        >
          {contextdata.isDarkTheme ? <BsSun /> : <BiMoon />}
        </button>
        <button
          className="lg:hidden me-5 p-2 text-xl border-2 rounded-full hover:text-violet-400 hover:border-violet-500 hover:translate-x-2 duration-500 transition-all"
          onClick={() => contextdata.setIsMobileSidebar((prev) => !prev)}
        >
          <MdMenuOpen />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
