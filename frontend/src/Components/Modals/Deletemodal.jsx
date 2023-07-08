import React, { useContext } from 'react';
import ReactDOM from "react-dom";
import AppContext from "../../context/AppContext";
function Deletemodal({cancelActionModal, submitActionModal}) {
    const contextdata = useContext(AppContext);
    return ReactDOM.createPortal(
        <div
            className={contextdata.isDarkTheme?"dark w-screen h-screen fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-opacity-50 bg-black":"w-screen h-screen fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-opacity-50 bg-black"}>
            <div className="bg-slate-50 dark:bg-slate-700 dark:text-white rounded-md text-center p-20">
                <h1 className="font-VazirBold text-2xl">آیا از حذف خود اطمینان دارید؟</h1>
                <div className="modalbutton w-full">
                    <button
                        className="mt-4 mx-4 p-2 px-5 rounded-md  text-slate-700 border-2 border-slate-700 transition-all font-VazirBold dark:bg-white dark:hover:text-white dark:hover:bg-transparent dark:border-white" onClick={()=>cancelActionModal()}>
                        خیر
                    </button>
                    <button
                        className="mt-4 mx-4 p-2 px-5 rounded-md bg-slate-700 text-white hover:text-slate-700 hover:bg-transparent border-2 border-slate-700 transition-all font-VazirBold dark:bg-red-600 dark:hover:text-white dark:hover:bg-transparent dark:border-red-700" onClick={()=>submitActionModal()}>
                        بله
                    </button>

                </div>
            </div>
        </div>, document.getElementById("modal")
    );
}

export default Deletemodal;