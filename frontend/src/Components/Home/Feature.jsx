import React from 'react'
import {AiOutlineArrowUp , AiOutlineArrowDown} from "react-icons/ai";


export default function Feature(props) {
  return (
    <div className=' flex items-center
     bg-slate-500 text-white
    drop-shadow-lg
    lg:w-1/3
    rounded-lg
    p-6
    space-y-4
    border-s-2
    dark:border-white
    border-s-Fiord-500 font-Vazir'
    >
        <div className='w-1/3 flex items-center justify-start text-[70px] text-violet-400'>{props.icon}</div>
        <div className="Featuremainbody space-y-6 w-2/3">
        <h1 className="text-xl font-VazirBold">
            {props.title}
        </h1>
            <div className="flex items-center justify-between">
                <p className="text-3xl" dir='rtl'>{props.price} <span className='text-lg'>تومان</span></p>
                <div className="flex items-center">
                    <span>% {props.percent}</span><span className="text-3xl">{
                    props.percent > 0 ? <AiOutlineArrowUp className="text-green-500"/>:<AiOutlineArrowDown className="text-red-500"/>
                }
                </span>
                </div>
            </div>
        </div>
    </div>
  )
}
