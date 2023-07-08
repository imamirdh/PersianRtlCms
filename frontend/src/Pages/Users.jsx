import React from "react";
import Userbox from "../Components/Users/Userbox";
import { ToastContainer } from "react-toastify";
function Users() {
  return (
    <div>
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
      <Userbox />
    </div>
  );
}

export default Users;
