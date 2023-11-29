"use client";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Welcome from "/public/imgs/home/desktop/image-welcome.jpg";
import TeamDsk from "/public/imgs/home/desktop/image-small-team.jpg";
import TeamTbl from "/public/imgs/home/tablet/image-small-team.jpg";
import TeamMob from "/public/imgs/home/mobile/image-small-team.jpg";

import Slide from "@/components/Slide";
import Button from "@/components/Button";
import Featured from "@/components/Featured";

//-------------------------------
export default function Home() {
  const [slide, setSlide] = useState(0);

  return (
    <main className="flex flex-col relative w-full min-h-screen md:ml-2 md:px-24 text-white">
      {/*  */}
      <p className="hidden md:block absolute top-5 left-2 lg:left-9 text-cus_l_gray transform rotate-90 text-base tracking-widest">
        H O M E
      </p>

      {/* Hero */}
      <div className="w-full lg:w-[90%]  lg:mx-auto mb:20 lg:mb-32 relative">
        <Slide index={slide} />
        <div className="hidden absolute bottom-0 -left-20 md:flex text-black text-lg font-bold">
          <div
            onClick={() => setSlide(0)}
            className={`   flex w-20 h-20  items-center justify-center ${
              slide !== 0 && "hover:bg-cus_l_gray"
            } hover:cursor-pointer 
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
              flex w-20 h-20  items-center justify-center
              ${slide !== 1 && "hover:bg-cus_l_gray"} 
              hover:cursor-pointer
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
              flex w-20 h-20  items-center justify-center ${
                slide !== 2 && "hover:bg-cus_l_gray"
              } hover:cursor-pointer
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
              flex w-20 h-20  items-center justify-center ${
                slide !== 3 && "hover:bg-cus_l_gray"
              } hover:cursor-pointer
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

      {/* Welcome */}
      <div className="w-full lg:w-[90%] relative flex flex-col lg:flex-row lg:mx-auto mt-10 lg:mt-32 mb-20 lg:mb-32 overflow-hidden">
        <p className="hidden md:block self-center lg:absolute -top-20 z-20 font-bold text-[10rem] lg:text-3xl text-cus_vl_gray">
          Welcome
        </p>
        <div className="lg:mt-20 w-full lg:w-2/3  text-black">
          <div className="w-full px-5 md:px-0 lg:w-2/3 mt-1 lg:ml-36 lg:pl-10 space-y-6 text-xs">
            <h2 className="text-[4rem] leading-[3rem] md:text-xl text-cus_d_blue font-bold">
              Welcome to
            </h2>
            <h2 className="text-[4rem] leading-[3rem] md:text-xl text-cus_d_blue font-bold">
              Arch Studio
            </h2>
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
        <div className="hidden lg:block w-1/3">
          <Image width={350} height={568} src={Welcome} alt="Building" />
        </div>
      </div>

      {/* Smal team */}
      <div className="w-full lg:w-[90%] relative lg:mx-auto mb-20 lg:mb-32">
        {/* SD || Mobile*/}
        <div className=" w-[378px] h-[560px] md:hidden brightness-50">
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
          <h2 className="text-[4rem] leading-[3.8rem] md:text-xl text-white font-fold">
            Small team,
          </h2>
          <h2 className="text-[4rem] leading-[3.8rem] md:text-xl text-white font-fold mb-10">
            big ideas
          </h2>
          <Link href="/about">
            <Button>
              <p>About Us</p>
            </Button>
          </Link>
        </div>
      </div>

      {/* Featured */}
      <div className="w-full lg:w-[90%] relative lg:mx-auto text-black px-8 md:px-0">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-xl font-bold">Featured</h2>
          {/* For MD and LG */}
          <div className="hidden md:block">
            <Link href="/portfolio">
              <Button>
                <p>See All</p>
              </Button>
            </Link>
          </div>
        </div>
        <Featured />
        {/* Only for SD */}
        <div className="md:hidden mt-5">
          <Link href="/portfolio">
            <Button width="full">
              <p>See All</p>
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
