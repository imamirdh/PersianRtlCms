import React from "react";
import {
    BiSolidDashboard,
    BiSearch,
    BiHomeAlt2,
    BiShoppingBag,
    BiCommentDetail,
    BiSolidDiscount,
    BiExit,
} from "react-icons/bi";
import {FiUsers, FiShoppingCart} from "react-icons/fi"
import SidebarItem from "./SidebarItem";

function Sidebar({exit}) {
    return (
        <div
            class="sidebar hidden lg:block h-screen p-2 w-1/6 overflow-y-auto text-center bg-slate-200 text-matisse-950 dark:bg-slate-800 dark:text-violet-300 rounded-bl-[70px]">
            <div class="text-matisse-950 dark:text-white ">
                <div class="p-2.5 mt-1 flex items-center">
                    <BiSolidDashboard class="font-bold text-2xl"/>
                    <h1 class="font-bold text-lg mr-3">داشبورد</h1>
                </div>
                <div class="my-2 bg-slate-900 dark:bg-slate-200 h-[1px]"></div>
            </div>
            <div
                class="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-slate-700 text-white dark:bg-slate-100 dark:text-slate-900">
                <BiSearch className="text-2xl "/>
                <input
                    type="text"
                    placeholder="Search"
                    class="text-base mق-4 w-full bg-transparent focus:outline-none"
                />
            </div>
            <SidebarItem title="صفحه اصلی" toroute="/" icon={<BiHomeAlt2/>}/>
            <SidebarItem title="محصولات" toroute="/Products" icon={<BiShoppingBag/>}/>
            <SidebarItem title="کامنت ها" toroute="/Comments" icon={<BiCommentDetail/>}/>
            <SidebarItem title="کاربران" toroute="/Users" icon={<FiUsers/>}/>
            <SidebarItem title="سفارشات" toroute="/Orders" icon={<FiShoppingCart/>}/>
            <SidebarItem title="تخفیف ها" toroute="/Discount" icon={<BiSolidDiscount/>}/>
            <div class="my-4 bg-gray-600 h-[1px]"></div>
            <button onClick={()=>exit(false)}
                class="p-2.5 mt-3 w-full flex items-center rounded-md rounded-l-full px-4 duration-300 cursor-pointer hover:bg-violet-600 hover:text-white">
                <BiExit className="text-xl"/>
                <span class="text-[15px] mr-2  font-bold">خروج</span>
            </button>
        </div>
    );
}

export default Sidebar;
