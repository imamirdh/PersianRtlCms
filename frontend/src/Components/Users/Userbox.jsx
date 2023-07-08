import React, { useState } from "react";
import useFetch from "../../Hooks/useFetch";
import Detailsmodal from "../Modals/Detailsmodal";
import Deletemodal from "../Modals/Deletemodal";
import Editmodal from "../Modals/Editmodal";
function Userbox() {
  const [datasArray, deleteItemFromDatas, updateItemFromDatas] = useFetch(
    "http://localhost:8000/api/users/"
  );

  const [isShowModalDetails, setIsShowModalDetails] = useState(false);
  const [isShowModalEdit, setIsShowModalEdit] = useState(false);
  const [isShowModalDelete, setIsShowModalDelete] = useState(false);
  const [detailsUser, setDetailUser] = useState(null);
  const [userCity, setUserCity] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userScore, setUserScore] = useState("");
  const [userBuy, setUserBuy] = useState("");
  const [userFirstname, setUserFirstname] = useState("");
  const [userLastname, setUserLastname] = useState("");
  const [userUsername, setUserUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [userID, setUserID] = useState(null);

  function cancelActionModal() {
    setIsShowModalDelete(false);
  }
  function submitActionModal() {
    setIsShowModalDelete(false);
    deleteItemFromDatas(userID);
  }

  function editModalSubmit(e) {
    e.preventDefault();
    const bodyitem = {
        firsname: userFirstname,
        lastname: userLastname,
        username: userUsername,
        password: userPassword,
        phone: userPhone,
        city: userCity,
        email: userEmail,
        address: userAddress,
        score: userScore,
        buy: userBuy,
    };
    updateItemFromDatas(userID,bodyitem);
    setIsShowModalEdit(false);
  }
  return (
    <div className="overflow-auto p-2 bg-white dark:bg-transparent dark:text-white mt-4 shadow-lg rounded-md">
      <h1 className="text-2xl font-VazirBold text-center dark:text-white my-4 py-2 border-b-2">
        کاربران
      </h1>
      <table className="w-full text-center">
        <thead className="border-b-2 border-slate-700 dark:border-b-violet-400">
          <td className="p-2 font-VazirBold">نام</td>
          <td className="p-2 font-VazirBold">نام خانوادگی</td>
          <td className="p-2 font-VazirBold">نام کاربری</td>
          <td className="p-2 font-VazirBold">رمز عبور</td>
          <td></td>
        </thead>
        <tbody>
          {datasArray.map((data) => (
            <tr className="border-b border-b-black dark:border-b-violet-300 bg-slate-100 dark:bg-slate-500 dark:text-violet-300">
              <td className="py-4">{data.firsname}</td>
              <td className="py-4">{data.lastname}</td>
              <td className="py-4">{data.username}</td>
              <td className="py-4">{data.password}</td>
              <td className="py-4">
                <button
                  className="p-2 mx-1 transition-all rounded-md bg-blue-500 text-white hover:bg-blue-700"
                  onClick={() => {
                    setIsShowModalDetails(true);
                    setDetailUser(data);
                  }}
                >
                  جزئیات
                </button>
                <button
                  className="p-2 mx-1 transition-all rounded-md bg-red-500 text-white hover:bg-red-700"
                  onClick={() => {
                    setIsShowModalDelete(true);
                    setUserID(data.id);
                  }}
                >
                  حذف
                </button>
                <button
                  className="p-2 mx-1 transition-all rounded-md bg-yellow-500 dark:text-white hover:bg-yellow-700"
                  onClick={() => {
                    setIsShowModalEdit(true);
                    setUserID(data.id)
                    setUserCity(data.city);
                    setUserPhone(data.phone);
                    setUserAddress(data.address);
                    setUserEmail(data.email);
                    setUserScore(data.score);
                    setUserBuy(data.buy);
                    setUserFirstname(data.firsname);
                    setUserLastname(data.lastname);
                    setUserUsername(data.username);
                    setUserPassword(data.password);
                  }}
                >
                  ویرایش
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isShowModalDetails && (
        <Detailsmodal onhide={() => setIsShowModalDetails(false)}>
          <div className="w-3/4 p-2 rounded-lg bg-white dark:bg-slate-600 overflow-auto">
            <table className="w-full text-center">
              <thead className="border-b-2 dark:text-white border-slate-700 dark:border-b-violet-400">
                <td className="p-2 font-VazirBold">شماره تماس</td>
                <td className="p-2 font-VazirBold">شهر</td>
                <td className="p-2 font-VazirBold">آدرس</td>
                <td className="p-2 font-VazirBold">امتیاز کاربر</td>
                <td className="p-2 font-VazirBold">میزان خرید</td>
              </thead>
              <tbody>
                <tr className="border-b border-b-black dark:border-b-violet-300 bg-slate-100 dark:bg-slate-500 dark:text-white">
                  <td className="py-4">{detailsUser.phone}</td>
                  <td className="py-4">{detailsUser.city}</td>
                  <td className="py-4">{detailsUser.address}</td>
                  <td className="py-4">{detailsUser.score}</td>
                  <td className="py-4">{detailsUser.buy}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Detailsmodal>
      )}
      {isShowModalDelete && (
        <Deletemodal
          cancelActionModal={cancelActionModal}
          submitActionModal={submitActionModal}
        ></Deletemodal>
      )}
      {isShowModalEdit && (
        <Editmodal onSubmit={editModalSubmit}>
          <div className="lg:flex lg:items-start gap-5 dark:text-white">
            <div className="lg:w-1/2">
              <label htmlFor="">نام جدید:</label>
              <div className="bg-slate-200 dark:bg-slate-800 dark:shadow dark:text-white rounded-md text-base text-zinc-900 border-r-violet-500 border-r-2 mt-2">
                <input
                  type="text"
                  className="bg-transparent w-full border-none outline-none p-1"
                  placeholder="نام جدید را وارد کنید"
                  value={userFirstname}
                  onChange={(e) => setUserFirstname(e.target.value)}
                />
              </div>
              <label htmlFor="">نام خانوادگی جدید:</label>
              <div className="bg-slate-200 dark:bg-slate-800 dark:shadow dark:text-white rounded-md text-base text-zinc-900 border-r-violet-500 border-r-2 mt-2">
                <input
                  type="text"
                  className="bg-transparent w-full border-none outline-none p-1"
                  placeholder="نام خانوادگی جدید را ئارد کنید"
                  value={userLastname}
                  onChange={(e) => setUserLastname(e.target.value)}
                />
              </div>
              <label htmlFor="">نام کاربری جدید:</label>
              <div className="bg-slate-200 dark:bg-slate-800 dark:shadow dark:text-white rounded-md text-base text-zinc-900 border-r-violet-500 border-r-2 mt-2">
                <input
                  type="text"
                  className="bg-transparent w-full border-none outline-none p-1"
                  placeholder="نام کاربری جدید را وارد کنید"
                  value={userUsername}
                  onChange={(e) => setUserUsername(e.target.value)}
                />
              </div>
              <label htmlFor="">رمز عبور حدید</label>
              <div className="bg-slate-200 dark:bg-slate-800 dark:shadow dark:text-white rounded-md text-base text-zinc-900 border-r-violet-500 border-r-2 mt-2">
                <input
                  type="text"
                  className="bg-transparent w-full border-none outline-none p-1"
                  placeholder="رمز عبور جدید را وارد کنید"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <label htmlFor="">شهر جدید کاربر:</label>
              <div className="bg-slate-200 dark:bg-slate-800 dark:shadow dark:text-white rounded-md text-base text-zinc-900 border-r-violet-500 border-r-2 mt-2">
                <input
                  type="text"
                  className="bg-transparent w-full border-none outline-none p-1"
                  placeholder="شهر جدید کاربر را وارد کنید"
                  value={userCity}
                  onChange={(e) => setUserCity(e.target.value)}
                />
              </div>
              <label htmlFor="">آدرس جدید کاربر:</label>
              <div className="bg-slate-200 dark:bg-slate-800 dark:shadow dark:text-white rounded-md text-base text-zinc-900 border-r-violet-500 border-r-2 mt-2">
                <input
                  type="text"
                  className="bg-transparent w-full border-none outline-none p-1"
                  placeholder="آدرس جدید کاربر را وارد کنید"
                  value={userAddress}
                  onChange={(e) => setUserAddress(e.target.value)}
                />
              </div>
              <label htmlFor="">شماره همراه:</label>
              <div className="bg-slate-200 dark:bg-slate-800 dark:shadow dark:text-white rounded-md text-base text-zinc-900 border-r-violet-500 border-r-2 mt-2">
                <input
                  type="text"
                  className="bg-transparent w-full border-none outline-none p-1"
                  placeholder="شماره همراه جدید کاربر را وارد کنید"
                  value={userPhone}
                  onChange={(e) => setUserPhone(e.target.value)}
                />
              </div>
              <label htmlFor="">پست الکترونیکی:</label>
              <div className="bg-slate-200 dark:bg-slate-800 dark:shadow dark:text-white rounded-md text-base text-zinc-900 border-r-violet-500 border-r-2 mt-2">
                <input
                  type="text"
                  className="bg-transparent w-full border-none outline-none p-1"
                  placeholder="پست الکترونیکی جدید را وارد کنید"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </div>
              <label htmlFor="">امتیاز کاربر:</label>
              <div className="bg-slate-200 dark:bg-slate-800 dark:shadow dark:text-white rounded-md text-base text-zinc-900 border-r-violet-500 border-r-2 mt-2">
                <input
                  type="text"
                  className="bg-transparent w-full border-none outline-none p-1"
                  placeholder="امتیاز جدید کاربر را وارد کنید"
                  value={userScore}
                  onChange={(e) => setUserScore(e.target.value)}
                />
              </div>
              <label htmlFor="">میزان خرید:</label>
              <div className="bg-slate-200 dark:bg-slate-800 dark:shadow dark:text-white rounded-md text-base text-zinc-900 border-r-violet-500 border-r-2 mt-2">
                <input
                  type="text"
                  className="bg-transparent w-full border-none outline-none p-1"
                  placeholder="میزان خرید جدید را وارد کنید"
                  value={userBuy}
                  onChange={(e) => setUserBuy(e.target.value)}
                />
              </div>
            </div>
          </div>
        </Editmodal>
      )}
    </div>
  );
}

export default Userbox;
