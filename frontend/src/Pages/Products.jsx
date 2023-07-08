import React from "react";
import Addprouduct from "../Components/Products/Addprouduct";
import Tableproducts from "../Components/Products/Tableproducts";
import { ToastContainer } from "react-toastify";
function Products(props) {
  return (
    <>
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
      <div className="p-4">
        <h1 className="font-VazirBold text-2xl dark:text-white">
          افزودن محصول جدید
        </h1>
        <Addprouduct />
        <Tableproducts />
      </div>
    </>
  );
}

export default Products;
