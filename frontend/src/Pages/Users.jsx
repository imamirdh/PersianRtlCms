import React, { useState } from "react";
import InputForm from "../Components/Input/Input";
import {
  maxValidator,
  minValidator,
  requiredValidator,
} from "../Validations/rules";
import Button from "../Components/Input/Button";
import Table from "../Components/Table/Table";
import { useForm } from "../Hooks/useForm";

import { MdOutlineAddShoppingCart, MdViewList } from "react-icons/md";
import {
  HiOutlineTrash,
  HiOutlinePencil,
  HiOutlineUserAdd,
  HiOutlineLockClosed
} from "react-icons/hi";
function Users(props) {
  const [pageHandle, setPageHanler] = useState("list");
  const [formstate, onInputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      shortName: {
        value: "",
        isValid: false,
      },
      price: {
        value: "",
        isValid: false,
      },
      support: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  return (
    <>
      <div className="buttons flex items-center gap-2 mt-2 px-2">
        <Button
          className={` border-zinc-700 text-zinc-500  rounded-md border-2 p-2 px-4 text-center text-sm transition-all hover:bg-transparent hover:border-orange-300 hover:text-orange-300 font-Dana flex items-center gap-2 ${
            pageHandle === "form" && "!border-orange-300 !text-orange-300"
          }`}
          onClick={() => setPageHanler("form")}
          icon={<HiOutlineUserAdd className="text-lg" />}
        >
          افزودن کاربر
        </Button>
        <Button
          className={`border-zinc-700 text-zinc-500  rounded-md border-2 p-2 px-4 text-center text-sm transition-all hover:bg-transparent hover:border-orange-300 hover:text-orange-300 font-Dana flex items-center gap-2 ${
            pageHandle === "list" && "!border-orange-300 !text-orange-300"
          }`}
          onClick={() => setPageHanler("list")}
          icon={<MdViewList className="text-lg" />}
        >
          لیست کاربران
        </Button>
      </div>
      {pageHandle === "list" && (
        <div className="p-2">
          <p className="font-MorabbaBold text-xl dark:text-orange-200 text-gray-700 border-b dark:border-zinc-300 border-orange-300  py-2 my-2">
            لیست کاربران 
          </p>
          <Table
            th={["نام", "نام کاربری", "ایمیل","شماره تلفن", "تاریخ ثبت نام ","کنترل"]}
          >
            <tr>
              <td>امیررضا</td>
              <td>imamirdh</td>
              <td>imamirdh@gmail.com</td>
              <td>091212345678</td>
              <td></td>
              <td>
              <Button className="group relative border-2 border-zinc-400 p-2 rounded-md hover:border-rose-500 transition-all">
                <HiOutlineTrash className="text-zinc-500 text-lg hover:text-orange-300 group-hover:text-rose-500 dark:text-zinc-300" />
                <span className="absolute -top-full -right-full hidden bg-white p-1 text-sm rounded-lg border border-zinc-500 group-hover:block dark:bg-zinc-700 ">حذف</span>
              </Button>
              <Button className="group relative border-2 border-zinc-400 p-2 rounded-md hover:border-yellow-500 transition-all">
                <HiOutlinePencil className="text-zinc-500 text-lg hover:text-orange-300 group-hover:text-yellow-500 dark:text-zinc-300" />
                <span className="absolute -top-full -right-full hidden bg-white p-1 text-sm rounded-lg border border-zinc-500 group-hover:block dark:bg-zinc-700 ">ویرایش</span>
              </Button>
              <Button className="group relative border-2 border-zinc-400 p-2 rounded-md hover:border-rose-500 transition-all">
                <HiOutlineLockClosed className="text-zinc-500 text-lg  group-hover:text-rose-500 dark:text-zinc-300" />
                <span className="w-28 absolute -top-full -right-full hidden bg-white p-1 text-sm rounded-lg border border-zinc-500 group-hover:block dark:bg-zinc-700 ">بن کردن کاربر</span>
              </Button>
              
            </td>
            </tr>
           
          </Table>
        </div>
      )}
      {pageHandle === "form" && (
        <div className="p-2">
          <p className="font-MorabbaBold text-xl dark:text-orange-200 text-gray-700 border-b dark:border-zinc-300 border-orange-300  py-2 my-2">
            افزودن کاربر جدید
          </p>
          <form action="" className="p-2">
            <div className="row lg:flex lg:items-center gap-5 space-y-5 lg:space-y-0">
              <InputForm
                element="input"
                id="name"
                onInputHandler={onInputHandler}
                lable="نام و نام خانوادگی"
                validations={[requiredValidator(), minValidator(3)]}
                className={`lg:w-[33%] h-12 dark:text-gray-200`}
              />
              <InputForm
                element="input"
                id="username"
                onInputHandler={onInputHandler}
                lable="نام کاربری "
                validations={[requiredValidator(), minValidator(3)]}
                className={`lg:w-[33%] h-12 dark:text-gray-200`}
              />
              <InputForm
                element="input"
                id="phone"
                onInputHandler={onInputHandler}
                lable="شماره تلفن"
                validations={[requiredValidator(), minValidator(3)]}
                className={`lg:w-[33%] h-12 dark:text-gray-200`}
              />
            </div>
            <div className="row mt-5 lg:flex lg:items-center gap-5 space-y-5 lg:space-y-0">
              <InputForm
                element="input"
                id="email"
                onInputHandler={onInputHandler}
                lable="ایمیل"
                validations={[requiredValidator(), minValidator(3)]}
                className={`lg:w-[33%] h-12 dark:text-gray-200`}
              />
              <InputForm
                element="input"
                id="password"
                onInputHandler={onInputHandler}
                lable="رمز عبور "
                validations={[requiredValidator(), minValidator(3)]}
                className={`lg:w-[33%] h-12 dark:text-gray-200`}
              />
              <Button className="bg-zinc-600 text-orange-200  rounded-2xl border-2 p-2 px-4 text-center text-sm transition-all hover:bg-transparent hover:border-orange-300 dark:hover:border-orange-300 hover:text-orange-300 dark:bg-transparent dark:border-orange-200   font-Dana">
                افزودن کاربر
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default Users;

