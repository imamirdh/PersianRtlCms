import React from "react";
import CommentBox from "../Components/Comments/CommentBox";
import useFetch from "../Hooks/useFetch";
import { ToastContainer } from "react-toastify";

function Comments() {
  const [comentsdata, deleteItemFromcomentDatas, updateItemFromcomentDatas] =
    useFetch("http://localhost:8000/api/comments/");
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
      <h1 className="overflow-auto text-2xl font-VazirBold text-center dark:text-white my-4 py-2 border-b-2">
        جدید ترین نظرات
      </h1>
      {comentsdata.map((coment) => (
        <CommentBox
          coment={coment}
          updateItemFromcomentDatas={updateItemFromcomentDatas}
          deleteItemFromcomentDatas={deleteItemFromcomentDatas}
        />
      ))}
    </div>
  );
}

export default Comments;
