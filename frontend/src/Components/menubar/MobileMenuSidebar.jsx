import React, { useContext } from "react";
import {
  BiSolidDashboard,
  BiSearch,
  BiHomeAlt2,
  BiShoppingBag,
  BiCommentDetail,
  BiSolidDiscount,
  BiExit,
} from "react-icons/bi";
import { BsSun, BsClock, BsCalendarDate } from "react-icons/bs";
import Clock from "clock-react";
import { MdMenuOpen } from "react-icons/md";
import { FiUsers, FiShoppingCart } from "react-icons/fi";
import SidebarItem from "./SidebarItem";
import AppContext from "../../context/AppContext";
import ReactDOM from "react-dom";
function MobileMenuSidebar() {
  const contextdata = useContext(AppContext);
  let today = new Date().toLocaleDateString("fa-IR");
  return ReactDOM.createPortal(
    <div
      className={
        contextdata.isDarkTheme
          ? "dark w-screen h-screen fixed top-0 bg-opacity-50 bg-black"
          : "w-screen h-screen fixed top-0 bg-opacity-50 bg-black"
      }
      dir="rtl"
    >
      <div class="MobileMenuSidebar font-VazirLight h-screen p-2 w-2/3 fixed right-0 overflow-y-auto text-center bg-slate-200 text-matisse-950 dark:bg-slate-800 dark:text-violet-300 rounded-bl-[70px]">
        <div class="text-matisse-950 dark:text-white ">
          <div class="p-2.5 mt-1 flex items-center justify-between">
            <div className="flex items-center">
              <BiSolidDashboard class="font-bold text-2xl" />
              <h1 class="font-bold text-lg mr-3">داشبورد</h1>
            </div>
            <button
              className="p-2 text-xl border-2 border-slate-700 rounded-full hover:text-violet-400 hover:border-violet-500 hover:translate-x-2 duration-500 transition-all"
              onClick={() => contextdata.setIsMobileSidebar((prev) => !prev)}
            >
              <MdMenuOpen />
            </button>
          </div>
          <div className=" info flex-col items-center space-y-4 p-2.5">
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
          <div class="my-2 bg-slate-900 dark:bg-slate-200 h-[1px]"></div>
        </div>
        <div class="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-slate-700 text-white dark:bg-slate-100 dark:text-slate-900">
          <BiSearch className="text-2xl " />
          <input
            type="text"
            placeholder="Search"
            class="text-base mق-4 w-full bg-transparent focus:outline-none"
          />
        </div>
        <SidebarItem title="صفحه اصلی" toroute="/" icon={<BiHomeAlt2 />} />
        <SidebarItem
          title="محصولات"
          toroute="/Products"
          icon={<BiShoppingBag />}
        />
        <SidebarItem
          title="کامنت ها"
          toroute="/Comments"
          icon={<BiCommentDetail />}
        />
        <SidebarItem title="کاربران" toroute="/Users" icon={<FiUsers />} />
        <SidebarItem
          title="سفارشات"
          toroute="/Orders"
          icon={<FiShoppingCart />}
        />
        <SidebarItem
          title="تخفیف ها"
          toroute="/Discount"
          icon={<BiSolidDiscount />}
        />
        <div class="my-4 bg-gray-600 h-[1px]"></div>
        <button
          onClick={() => contextdata.setIsLogin(false)}
          class="p-2.5 mt-3 w-full flex items-center rounded-md rounded-l-full px-4 duration-300 cursor-pointer hover:bg-violet-600 hover:text-white"
        >
          <BiExit className="text-xl" />
          <span class="text-[15px] mr-2  font-bold">خروج</span>
        </button>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default MobileMenuSidebar;
