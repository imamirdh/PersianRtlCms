import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
function useFetch(url) {
  const successToast = (msg) =>
    toast.success(`! ${msg}`, {
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

  const errorToast = (msgError) =>
    toast.error(`! ${msgError}`, {
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
  const warnToast = (msgError) =>
    toast.warn(`! ${msgError}`, {
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
  const [datasArray, setDatasArray] = useState([]);
  const getalldataarray = () => {
    fetch(url)
      .then((res) => res.json())
      .then((datas) => setDatasArray(datas));
  };
  useEffect(() => {
    getalldataarray();
  }, []);

  function deleteItemFromDatas(itemid) {
    fetch(url + itemid, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {getalldataarray()
        warnToast("ایتم با موفقیت حذف شد")});
  }

  function updateItemFromDatas(itemid, bodyitem) {
    fetch(url + itemid, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyitem),
    })
      .then((res) => res.json())
      .then((data) => {getalldataarray()
        successToast("ایتم با موفقیت بروزرسانی شد")});
  }

  function addItemFromDatas(bodyitem) {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyitem),
    })
      .then((res) => res.json())
      .then((item) => successToast("ایتم با موفقیت اضافه شد"))
      .catch((err) => errorToast("عملیات اضافه کردن با خطا مواجه شد"));
  }

  return [
    datasArray,
    deleteItemFromDatas,
    updateItemFromDatas,
    addItemFromDatas,
  ];
}

export default useFetch;
