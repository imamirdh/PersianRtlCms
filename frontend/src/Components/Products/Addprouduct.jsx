import React, { useState } from "react";
import useFetch from "../../Hooks/useFetch";
function Addprouduct(props) {
  const [titleProduct, setTitleProduct] = useState("");
  const [countProduct, setCountProduct] = useState("");
  const [popularityProduct, setPopularityProduct] = useState("");
  const [priceProduct, setTPriceProduct] = useState("");
  const [colorsProduct, setColorsProduct] = useState("");
  const [saleProduct, setSaleProduct] = useState("");
  const [imgProduct, setImgProduct] = useState("");
  const [datasArray,addItemFromDatas] = useFetch("http://localhost:8000/api/products/");
  const submitAddForm = (e) => {
    e.preventDefault();
    const bodyitem = {
      title: titleProduct,
      price: priceProduct,
      count: countProduct,
      img: imgProduct,
      popularity: popularityProduct,
      sale: saleProduct,
      colors: colorsProduct,
    };
    addItemFromDatas(bodyitem)
    console.log(bodyitem);
    setTitleProduct("");
    setCountProduct("");
    setPopularityProduct("");
    setTPriceProduct("");
    setColorsProduct("");
    setSaleProduct("");
    setImgProduct("");
  };
  return (
    <div className="p-4 rounded-lg dark:bg-slate-600 shadow-lg">
      <form action="#" className="">
        <div className="lg:flex items-start gap-5">
          <div className="lg:w-1/2">
            <div className="bg-slate-200 dark:bg-slate-800 dark:shadow dark:text-white rounded-md text-base text-zinc-900 border-r-violet-500 border-r-2 mt-2">
              <input
                type="text"
                className="bg-transparent w-full border-none outline-none p-1"
                placeholder="اسم مجصول را بنویسید"
                value={titleProduct}
                onChange={(e) => setTitleProduct(e.target.value)}
              />
            </div>
            <div className="bg-slate-200 dark:bg-slate-800 dark:shadow dark:text-white rounded-md text-base text-zinc-900 border-r-violet-500 border-r-2 mt-2">
              <input
                type="text"
                className="bg-transparent w-full border-none outline-none p-1"
                placeholder="موجودی محصول را بنویسید"
                value={countProduct}
                onChange={(e) => setCountProduct(e.target.value)}
              />
            </div>
            <div className="bg-slate-200 dark:bg-slate-800 dark:shadow dark:text-white rounded-md text-base text-zinc-900 border-r-violet-500 border-r-2 mt-2">
              <input
                type="text"
                className="bg-transparent w-full border-none outline-none p-1"
                placeholder="میزان محبوبیت محصول را بنویسید"
                value={popularityProduct}
                onChange={(e) => setPopularityProduct(e.target.value)}
              />
            </div>
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
            <div className="bg-slate-200 dark:bg-slate-800 dark:shadow dark:text-white rounded-md text-base text-zinc-900 border-r-violet-500 border-r-2 mt-2">
              <input
                type="text"
                className="bg-transparent w-full border-none outline-none p-1"
                placeholder="قیمت محصول را بنویسید"
                value={priceProduct}
                onChange={(e) => setTPriceProduct(e.target.value)}
              />
            </div>
            <div className="bg-slate-200 dark:bg-slate-800 dark:shadow dark:text-white rounded-md text-base text-zinc-900 border-r-violet-500 border-r-2 mt-2">
              <input
                type="text"
                className="bg-transparent w-full border-none outline-none p-1"
                placeholder="آدرس عکس محصول را بنویسید"
                value={imgProduct}
                onChange={(e) => setImgProduct(e.target.value)}
              />
            </div>
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
        <div className="flex items-center justify-end">
          <button
            className="mt-4 p-2 px-4 rounded-md bg-slate-700 text-white hover:text-slate-700 hover:bg-transparent border-2 border-slate-700 transition-all font-VazirBold dark:bg-violet-600 dark:hover:text-white dark:hover:bg-transparent dark:border-violet-600"
            onClick={(e) => submitAddForm(e)}
          >
            افزودن محصول
          </button>
        </div>
      </form>
    </div>
  );
}

export default Addprouduct;
