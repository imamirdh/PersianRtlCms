import Sidebar from "./Components/menubar/Sidebar";
import Navbar from "./Components/menubar/Navbar";
import { useRoutes } from "react-router-dom";
import Routes from "./Routes";
import AppContext from "./context/AppContext";
import { useState } from "react";
import MobileMenuSidebar from "./Components/menubar/MobileMenuSidebar";

import useFetch from "./Hooks/useFetch";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
function App() {
  let route = useRoutes(Routes);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isMobileSidebar, setIsMobileSidebar] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isErrorLog, setIsErrorLog] = useState(false);
  const [fnameAdmin, setFnameAdmin] = useState("");
  const [lnameAdmin, setLnameAdmin] = useState("");
  const [taskAdmin, setTaskAdmin] = useState("");
  const [profileImgAdmin, setProfileImgAdmin] = useState("");

  const successToast = (msgtoast) =>
    toast.success(`! ${msgtoast}`, {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      className: "w-[26rem]",
    });

  // const [datasArray] = useFetch("http://localhost:8000/api/admins/");

  // const isLoginHandler = (username, password) => {
  //   datasArray.map((data) => {
  //     if (data.username === username && data.password === password) {
  //       setIsLogin(true);
  //       setFnameAdmin(data.firstname);
  //       setLnameAdmin(data.lastname);
  //       setTaskAdmin(data.task);
  //       setProfileImgAdmin(data.img);
  //       successToast("ورود موفقیت آمیز بود");
  //     } else setIsErrorLog(true)
  //   });
  // };
  return (
    <div className={isDarkTheme ? "App dark" : "App"}>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <AppContext.Provider
        value={{
          isDarkTheme,
          setIsDarkTheme,
          isMobileSidebar,
          setIsMobileSidebar,
          setIsLogin,
        }}
      >
      
          <div>
            {isMobileSidebar && <MobileMenuSidebar />}
            <div dir="rtl">
              <div className="font-Vazir flex h-screen bg-slate-50 dark:bg-slate-700">
                <Sidebar exit={setIsLogin} />
                <div className="w-full lg:w-5/6">
                  <Navbar
                    name={fnameAdmin}
                    lastname={lnameAdmin}
                    task={taskAdmin}
                    img={profileImgAdmin}
                  />
                  <div className=" h-[90%] overflow-y-auto">{route}</div>
                </div>
              </div>
            </div>
          </div>
       
      </AppContext.Provider>
    </div>
  );
}

export default App;
