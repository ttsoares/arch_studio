"use client";

import React, { useState } from "react";

import Image from "next/image";

import Welcome from "/public/imgs/home/desktop/image-welcome.jpg";
import TeamDsk from "/public/imgs/home/desktop/image-small-team.jpg";
import TeamTbl from "/public/imgs/home/tablet/image-small-team.jpg";
import TeamMob from "/public/imgs/home/mobile/image-small-team.jpg";

import Slide from "@/components/Slide";
import Buttom from "@/components/Buttom";
import Featured from "@/components/Featured";

//-------------------------------
export default function Home() {
  const [slide, setSlide] = useState(0);

  return (
    <main className="flex flex-col relative w-full min-h-screen md:ml-2 md:px-24 text-white">
      {/*  */}
      <p className="hidden md:block absolute top-5 left-9 text-cus_l_gray transform rotate-90 text-base tracking-widest">
        H O M E
      </p>

      {/* Hero */}
      <div className="w-[90%] relative mx-auto mb-32">
        <Slide index={slide} />
        <div className=" absolute bottom-0 -left-20 flex text-black text-lg font-bold">
          <div
            onClick={() => setSlide(0)}
            className={`   flex w-20 h-20  items-center justify-center ${
              slide !== 0 && "hover:bg-cus_l_gray"
            } hover:cursor-pointer 
              ${
                slide === 0
                  ? "bg-cus_d_blue text-white hover:bg-black"
                  : "bg-white text-black"
              }`}
          >
            <p className="">1</p>
          </div>
          <div
            onClick={() => setSlide(1)}
            className={` 
              flex w-20 h-20  items-center justify-center
              ${slide !== 1 && "hover:bg-cus_l_gray"} 
              hover:cursor-pointer
              ${
                slide === 1
                  ? "bg-cus_d_blue text-white hover:bg-black"
                  : "bg-white text-black"
              }  `}
          >
            <p className="">2</p>
          </div>
          <div
            onClick={() => setSlide(2)}
            className={` 
              flex w-20 h-20  items-center justify-center ${
                slide !== 2 && "hover:bg-cus_l_gray"
              } hover:cursor-pointer
              ${
                slide === 2
                  ? "bg-cus_d_blue text-white hover:bg-black"
                  : "bg-white text-black"
              }`}
          >
            <p className="">3</p>
          </div>
          <div
            onClick={() => setSlide(3)}
            className={` 
              flex w-20 h-20  items-center justify-center ${
                slide !== 3 && "hover:bg-cus_l_gray"
              } hover:cursor-pointer
              ${
                slide === 3
                  ? "bg-cus_d_blue text-white hover:bg-black"
                  : "bg-white text-black"
              }`}
          >
            <p className="">4</p>
          </div>
        </div>
      </div>

      {/* Welcome */}
      <div className="w-[90%] relative flex mx-auto mt-32 mb-32">
        <p className="absolute -top-20 z-20 font-bold text-3xl text-cus_vl_gray">
          Welcome
        </p>
        <div className="mt-20 w-2/3  text-black">
          <div className="w-2/3 mt-1 ml-36 pl-10 space-y-6 text-xs">
            <h2 className="text-xl text-cus_d_blue font-bold">Welcome to</h2>
            <h2 className="text-xl text-cus_d_blue font-bold">Arch Studio</h2>
            <p>
              We have a unique network and skillset to help bring your projects
              to life. Our small team of highly skilled individuals combined
              with our large network put us in a strong position to deliver
              exceptional results.
            </p>
            <p>
              Over the past 10 years, we have worked on all kinds of projects.
              From stations to high-rise buildings, we create spaces that
              inspire and delight.
            </p>
            <p>
              We work closely with our clients so that we understand the
              intricacies of each project. This allows us to work in harmony the
              surrounding area to create truly stunning projects that will stand
              the test of time.
            </p>
          </div>
        </div>
        <div className="w-1/3">
          <Image width={350} height={568} src={Welcome} alt="Building" />
        </div>
      </div>

      {/* Smal team */}
      <div className="w-[90%] relative mx-auto mb-32">
        {/* SD || Mobile*/}
        <div className=" w-[375px] h-[560px] md:hidden brightness-50">
          <Image src={TeamMob} alt="Building" />
        </div>
        {/* MD || Tablet*/}
        <div className="hidden md:block lg:hidden w-[573px] h-[560px]  brightness-50">
          <Image src={TeamTbl} alt="Building" />
        </div>
        {/* LG || Desktop */}
        <div className="hidden lg:block w-[1110px] h-[560px] brightness-50">
          <Image src={TeamDsk} alt="Building" />
        </div>

        <div className="absolute top-[20%] left-[10%] font-bold">
          <h2 className="text-xl text-white font-fold">Small team,</h2>
          <h2 className="text-xl text-white font-fold mb-10">big ideas</h2>
          <Buttom link="about">
            <p>About Us</p>
          </Buttom>
        </div>
      </div>

      {/* Featured */}
      <div className="w-[90%] relative mx-auto text-black ">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-xl font-bold">Features</h2>
          <Buttom link="portfolio">
            <p>See All</p>
          </Buttom>
        </div>
        <Featured />
      </div>
    </main>
  );
}
