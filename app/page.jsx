"use client";

import React, { useState } from "react";

import Slide from "@/components/Slide";

//-------------------------------
export default function Home() {
  const [slide, setSlide] = useState(0);

  return (
    <main className="flex flex-col relative w-full min-h-screen md:ml-2 md:px-24">
      <p className="hidden md:block absolute top-0 left-9 text-cus_l_gray transform rotate-90 text-xl tracking-widest">
        H O M E
      </p>
      <div className="w-full md:w-[90%] relative mx-auto text-white">
        <Slide index={slide} />
        <div className=" absolute bottom-0 -left-20 flex text-black text-lg font-bold">
          <div
            onClick={() => setSlide(0)}
            className={`   flex w-20 h-20  items-center justify-center hover:bg-cus_l_gray hover:cursor-pointer 
            ${
              slide === 0
                ? "bg-cus_d_blue text-white hover:bg-cus_d_blue"
                : "bg-white text-black"
            }`}
          >
            <p className="">1</p>
          </div>
          <div
            onClick={() => setSlide(1)}
            className={` 
            flex w-20 h-20  items-center justify-center hover:bg-cus_l_gray hover:cursor-pointer
            ${
              slide === 1
                ? "bg-cus_d_blue text-white hover:bg-cus_d_blue"
                : "bg-white text-black"
            }  `}
          >
            <p className="">2</p>
          </div>
          <div
            onClick={() => setSlide(2)}
            className={` 
              
            flex w-20 h-20  items-center justify-center hover:bg-cus_l_gray hover:cursor-pointer
            ${
              slide === 2
                ? "bg-cus_d_blue text-white hover:bg-cus_d_blue"
                : "bg-white text-black"
            }`}
          >
            <p className="">3</p>
          </div>
          <div
            onClick={() => setSlide(3)}
            className={` 
              
            flex w-20 h-20  items-center justify-center hover:bg-cus_l_gray hover:cursor-pointer
            ${
              slide === 3
                ? "bg-cus_d_blue text-white hover:bg-cus_d_blue"
                : "bg-white text-black"
            }`}
          >
            <p className="">4</p>
          </div>
        </div>
      </div>
    </main>
  );
}
