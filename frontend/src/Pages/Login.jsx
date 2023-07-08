import React, { useContext, useEffect, useState } from "react";
import AppContext from "./../context/AppContext";
import { BsSun, BsClock, BsCalendarDate } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";
import Clock from "clock-react";
function Login({ onLogin, eror, erorhandler }) {
  const contextdata = useContext(AppContext);
  const [userNameAdmin, setUserNameAdmin] = useState("");
  const [passwordAdmin, setPasswordAdmin] = useState("");
  const formHandler = (e) => {
    e.preventDefault();
    onLogin(userNameAdmin, passwordAdmin);
  };
  let today = new Date().toLocaleDateString("fa-IR");

  return (
    <div className="w-screen h-screen dark:bg-slate-700 bg-slate-50 overflow-hidden font-Vazir">
      <div
        className="navbarlogin h-[10%] w-full flex items-center justify-between bg-white border-b-2 border-b-violet-500 dark:bg-slate-600 dark:text-white"
        dir="rtl"
      >
        <div className="info flex items-center gap-5 ms-4">
          <div className="clock flex items-center gap-5">
            <div className="text-4xl">
              <BsClock />
            </div>
            <div className="italic text-lg font-VazirBold">
              <Clock />
            </div>
          </div>
          <div className="date flex items-center gap-5">
            <div className="text-4xl">
              <BsCalendarDate />
            </div>
            <div className="italic text-lg font-VazirBold">
              {today}
            </div>
          </div>
        </div>
        <div className="btncontrol">
          <button
            className="me-5 p-2 text-xl border-2 rounded-full hover:text-violet-400 hover:border-violet-500 hover:rotate-45 duration-500 transition-all"
            onClick={() => contextdata.setIsDarkTheme((prev) => !prev)}
          >
            {contextdata.isDarkTheme ? <BsSun /> : <BiMoon />}
          </button>
        </div>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <div className="lg:w-1/4 bg-white shadow-2xl border-e-4 border-violet-500 rounded-3xl p-12 dark:bg-slate-600 dark:text-white">
          <h1 className="text-center text-lg font-VazirBold">ورود به پنل</h1>
          <form className="text-center">
            <div
              className={
                eror
                  ? "border-2 border-red-500 bg-slate-200 dark:bg-slate-800 dark:shadow dark:text-white rounded-md text-base text-zinc-900 border-r-violet-500 border-r-2 mt-2"
                  : "bg-slate-200 dark:bg-slate-800 dark:shadow dark:text-white rounded-md text-base text-zinc-900 border-r-violet-500 border-r-2 mt-2"
              }
            >
              <input
                type="text"
                className="bg-transparent w-full border-none outline-none p-4"
                placeholder="نام کاربری"
                value={userNameAdmin}
                onChange={(e) => {
                  setUserNameAdmin(e.target.value);
                  erorhandler(false);
                }}
              />
            </div>
            <div
              className={
                eror
                  ? "border-2 border-red-500 bg-slate-200 dark:bg-slate-800 dark:shadow dark:text-white rounded-md text-base text-zinc-900 border-r-violet-500 border-r-2 mt-2"
                  : "bg-slate-200 dark:bg-slate-800 dark:shadow dark:text-white rounded-md text-base text-zinc-900 border-r-violet-500 border-r-2 mt-2"
              }
            >
              <input
                type="text"
                className="bg-transparent w-full border-none outline-none p-4"
                placeholder="رمز عبور"
                value={passwordAdmin}
                onChange={(e) => {
                  setPasswordAdmin(e.target.value);
                  erorhandler(false);
                }}
              />
            </div>
            <button
              className="w-1/2 mt-4 p-2 px-4 rounded-md bg-slate-700 text-white hover:text-slate-700 hover:bg-transparent border-2 border-slate-700 transition-all font-VazirBold dark:bg-violet-600 dark:hover:text-white dark:hover:bg-transparent dark:border-violet-600"
              onClick={(e) => formHandler(e)}
            >
              ورود
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
