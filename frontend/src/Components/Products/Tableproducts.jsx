import React, { useState } from "react";
import Deletemodal from "../Modals/Deletemodal";
import Detailsmodal from "../Modals/Detailsmodal";
import Editmodal from "../Modals/Editmodal";
import useFetch from "../../Hooks/useFetch";

function Tableproducts(props) {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowModalDetails, setIsShowModalDetails] = useState(false);
  const [isShowModalEdit, setIsShowModalEdit] = useState(false);
  const [productid, setProductId] = useState(null);
  const [detailsProduct, setDetailProduct] = useState({});

  const [titleProduct, setTitleProduct] = useState("");
  const [countProduct, setCountProduct] = useState("");
  const [popularityProduct, setPopularityProduct] = useState("");
  const [priceProduct, setTPriceProduct] = useState("");
  const [colorsProduct, setColorsProduct] = useState("");
  const [saleProduct, setSaleProduct] = useState("");
  const [imgProduct, setImgProduct] = useState("");

  const [datasArray, deleteItemFromDatas, updateItemFromDatas] = useFetch(
    "http://localhost:8000/api/products/"
  );
  const cancelActionModal = () => {
    setIsShowModal(false);
  };
  const submitActionModal = () => {
    deleteItemFromDatas(productid);
    setIsShowModal(false);
  };

  const hideDetailsmmodal = () => {
    setIsShowModalDetails(false);
  };

  const submitEditModal = (e) => {
    e.preventDefault();
    const bodyitem = {
      title: titleProduct,
      count: countProduct,
      popularity: popularityProduct,
      price: priceProduct,
      sale: saleProduct,
      img: imgProduct,
      colors: colorsProduct,
    };
    console.log(bodyitem);
    updateItemFromDatas(productid, bodyitem);
    setIsShowModalEdit(false);
  };
  return (
    <div className="overflow-auto p-2 bg-white dark:bg-slate-600 dark:text-white mt-4 shadow-lg rounded-md">
      <h1 className="text-2xl font-VazirBold text-center dark:text-white my-4 py-2 border-b-2">
        محصولات
      </h1>
      <table className="w-full text-center">
        <thead className="border-b-2 border-slate-700">
          <td className="p-2 font-VazirBold">عکس</td>
          <td className="p-2 font-VazirBold">اسم</td>
          <td className="p-2 font-VazirBold">قیمت</td>
          <td className="p-2 font-VazirBold">موجودی</td>
          <td></td>
        </thead>
        <tbody>
          {datasArray.map((data) => (
            <tr key={data.id} className="border-b-2 border-b-violet-500">
              <td className="py-4">
                <img src={data.img} alt="" className="w-32 mx-auto" />
              </td>
              <td className="py-4">{data.title}</td>
              <td className="py-4">{data.price}</td>
              <td className="py-4">{data.count}</td>
              <td className="py-4">
                <button
                  className="p-2 mx-1 transition-all rounded-md bg-blue-500 text-white hover:bg-blue-700"
                  onClick={() => {
                    setIsShowModalDetails(true);
                    setDetailProduct(data);
                  }}
                >
                  جزئیات
                </button>
                <button
                  className="p-2 mx-1 transition-all rounded-md bg-red-500 text-white hover:bg-red-700"
                  onClick={() => {
                    setIsShowModal(true);
                    setProductId(data.id);
                  }}
                >
                  حذف
                </button>
                <button
                  className="p-2 mx-1 transition-all rounded-md bg-yellow-500 hover:bg-yellow-700"
                  onClick={() => {
                    setIsShowModalEdit(true);
                    setDetailProduct(data);
                    setTitleProduct(data.title);
                    setColorsProduct(data.colors);
                    setPopularityProduct(data.popularity);
                    setCountProduct(data.count);
                    setTPriceProduct(data.price);
                    setImgProduct(data.img);
                    setSaleProduct(data.sale);
                    setProductId(data.id);
                  }}
                >
                  ویرایش
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isShowModal && (
        <Deletemodal
          cancelActionModal={cancelActionModal}
          submitActionModal={submitActionModal}
        />
      )}
      {isShowModalDetails && (
        <Detailsmodal onhide={hideDetailsmmodal}>
          <div className="flex flex-col bg-white rounded-md">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                      <tr>
                        <th scope="col" className="px-6 py-4">
                          فروش
                        </th>
                        <th scope="col" className="px-6 py-4">
                          رنگ بندی
                        </th>
                        <th scope="col" className="px-6 py-4">
                          مجبوبیت
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4">
                          {detailsProduct.sale}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {detailsProduct.colors}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {detailsProduct.popularity}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Detailsmodal>
      )}

      {isShowModalEdit && (
        <Editmodal onSubmit={submitEditModal}>
          <div className="lg:flex lg:items-start gap-5 ">
            <div className="lg:w-1/2">
              <label htmlFor="">اسم محصول:</label>
              <div className="bg-slate-200 dark:bg-slate-800 dark:shadow dark:text-white rounded-md text-base text-zinc-900 border-r-violet-500 border-r-2 mt-2">
                <input
                  type="text"
                  className="bg-transparent w-full border-none outline-none p-1"
                  placeholder="اسم محصول را بنویسید"
                  value={titleProduct}
                  onChange={(e) => setTitleProduct(e.target.value)}
                />
              </div>
              <label htmlFor="">موجودی محصول:</label>
              <div className="bg-slate-200 dark:bg-slate-800 dark:shadow dark:text-white rounded-md text-base text-zinc-900 border-r-violet-500 border-r-2 mt-2">
                <input
                  type="text"
                  className="bg-transparent w-full border-none outline-none p-1"
                  placeholder="موجودی محصول را بنویسید"
                  value={countProduct}
                  onChange={(e) => setCountProduct(e.target.value)}
                />
              </div>
              <label htmlFor="">میزان محبوبیت محصول:</label>
              <div className="bg-slate-200 dark:bg-slate-800 dark:shadow dark:text-white rounded-md text-base text-zinc-900 border-r-violet-500 border-r-2 mt-2">
                <input
                  type="text"
                  className="bg-transparent w-full border-none outline-none p-1"
                  placeholder="میزان محبوبیت محصول را بنویسید"
                  value={popularityProduct}
                  onChange={(e) => setPopularityProduct(e.target.value)}
                />
              </div>
              <label htmlFor="">تعداد رنگ بندی:</label>
              <div className="bg-slate-200 dark:bg-slate-800 dark:shadow dark:text-white rounded-md text-base text-zinc-900 border-r-violet-500 border-r-2 mt-2">
                <input
                  type="text"
                  className="bg-transparent w-full border-none outline-none p-1"
                  placeholder="تعداد رنگ بندی محصول را بنویسید"
                  value={colorsProduct}
                  onChange={(e) => setColorsProduct(e.target.value)}
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <label htmlFor="">قیمت محصول:</label>
              <div className="bg-slate-200 dark:bg-slate-800 dark:shadow dark:text-white rounded-md text-base text-zinc-900 border-r-violet-500 border-r-2 mt-2">
                <input
                  type="text"
                  className="bg-transparent w-full border-none outline-none p-1"
                  placeholder="قیمت محصول را بنویسید"
                  value={priceProduct}
                  onChange={(e) => setTPriceProduct(e.target.value)}
                />
              </div>
              <label htmlFor="">آدرس عکس محصول:</label>
              <div className="bg-slate-200 dark:bg-slate-800 dark:shadow dark:text-white rounded-md text-base text-zinc-900 border-r-violet-500 border-r-2 mt-2">
                <input
                  type="text"
                  className="bg-transparent w-full border-none outline-none p-1"
                  placeholder="آدرس عکس محصول را بنویسید"
                  value={imgProduct}
                  onChange={(e) => setImgProduct(e.target.value)}
                />
              </div>
              <label htmlFor="">میزان فروش محصول:</label>
              <div className="bg-slate-200 dark:bg-slate-800 dark:shadow dark:text-white rounded-md text-base text-zinc-900 border-r-violet-500 border-r-2 mt-2">
                <input
                  type="text"
                  className="bg-transparent w-full border-none outline-none p-1"
                  placeholder="میزان فروش محصول را بنویسید"
                  value={saleProduct}
                  onChange={(e) => setSaleProduct(e.target.value)}
                />
              </div>
            </div>
          </div>
        </Editmodal>
      )}
    </div>
  );
}

export default Tableproducts;
