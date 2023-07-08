import React, { useState } from "react";
import Editmodal from "../Modals/Editmodal";
import Deletemodal from "../Modals/Deletemodal";
function CommentBox({
  coment,
  deleteItemFromcomentDatas,
  updateItemFromcomentDatas,
}) {
  const [isShowCommentBody, setIsShowCommentBody] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [commentNewBody, setCommentNewBody] = useState(null);
  const [commentId, setCommentId] = useState(null);

  function editCommentHandler(e) {
    e.preventDefault();
    setIsShowEditModal(false);
    const bodyitem = {
      body: commentNewBody,
    };
    updateItemFromcomentDatas(commentId, bodyitem);
  }

  function cancelActionModal() {
    setIsShowDeleteModal(false);
  }
  function submitActionModal() {
    deleteItemFromcomentDatas(commentId);
    setIsShowDeleteModal(false);
  }
  return (
    <div className="mx-4 my-4 p-4 w-100 shadow rounded-md cursor-pointer transition-all hover:bg-slate-300 bg-white dark:bg-slate-500 text-black dark:text-violet-200 border-s-2 border-s-violet-600">
      <div className="commentheader lg:flex">
        <div className="flex items-center md:w-1/3 gap-4">
          <label className="text-lg font-VazirBold">محصول:</label>
          <p>{coment.productID}</p>
        </div>
        <div className="lg:flex lg:w-1/3 gap-4">
          <div className="date flex items-center gap-4">
            <label className="text-lg font-VazirBold">تاریخ:</label>
            <p>{coment.date}</p>
          </div>
          <div className="date flex items-center gap-4">
            <label className="text-lg font-VazirBold">ساعت:</label>
            <p>{coment.hour}</p>
          </div>
          <div className="date flex items-center gap-4">
            <label className="text-lg font-VazirBold">کاربر:</label>
            <p>{coment.userID}</p>
          </div>
        </div>
        <div className="flex items-center justify-center lg:gap-4 overflow-auto">
          <button
            className="p-2 mx-1 transition-all rounded-md bg-blue-500 text-white hover:bg-blue-700"
            onClick={() => setIsShowCommentBody((prev) => !prev)}
          >
            {isShowCommentBody ? "عدم نمایش" : "نمایش"}
          </button>
          <button className="p-2 mx-1 transition-all rounded-md bg-blue-500 text-white hover:bg-blue-700">
            پاسخ
          </button>
          <button
            className="p-2 mx-1 transition-all rounded-md bg-yellow-500 hover:bg-yellow-700"
            onClick={() => {
              setIsShowEditModal(true);
              setCommentNewBody(coment.body);
              setCommentId(coment.id);
            }}
          >
            ویرایش
          </button>
          <button
            className="p-2 mx-1 transition-all rounded-md bg-red-500 text-white hover:bg-red-700"
            onClick={() => {
              setIsShowDeleteModal(true);
              setCommentId(coment.id);
            }}
          >
            حذف
          </button>
        </div>
      </div>
      <div
        className={
          isShowCommentBody
            ? "visible opacity-100 transition-all mt-4 p-2 border-t-2"
            : "hidden opacity-0 transition-all"
        }
      >
        <p>{coment.body}</p>
      </div>
      {isShowEditModal && (
        <Editmodal onSubmit={editCommentHandler}>
          <div className="bg-slate-200 dark:bg-slate-800 dark:shadow dark:text-white rounded-md text-base text-zinc-900 border-r-violet-500 border-r-2 mt-2">
            <input
              type="text"
              className="bg-transparent w-full border-none outline-none p-4"
              value={commentNewBody}
              onChange={(e) => setCommentNewBody(e.target.value)}
            />
          </div>
        </Editmodal>
      )}
      {isShowDeleteModal && (
        <Deletemodal
          cancelActionModal={cancelActionModal}
          submitActionModal={submitActionModal}
        ></Deletemodal>
      )}
    </div>
  );
}

export default CommentBox;
