import React from "react";
import Image from "next/image";

import MyMap from "@/components/Map";
import Form from "@/components/Form";

const MyKEY = process.env.API_KEY;

import HeroDsk from "/public/imgs/contact/desktop/image-hero.jpg";
import HeroTbl from "/public/imgs/contact/tablet/image-hero.jpg";
import HeroMob from "/public/imgs/contact/mobile/image-hero.jpg";

import Arrow from "/public/imgs/icon-arrow.svg";

const Page = () => {
  return (
    <main className="flex flex-col relative w-full min-h-screen md:ml-2 md:px-24 text-cus_d_blue">
      <p className="hidden md:block absolute top-12 -left-4 lg:left-2 text-cus_l_gray transform rotate-90 text-base tracking-widest">
        C O N T A C T
      </p>
      {/* Hero */}
      <div className="w-full lg:w-[90%] relative flex mx-auto mb-32">
        <div className="w-full relative">
          {/* LG */}
          <div className="hidden lg:block relative w-[635px] h-[720px]">
            <Image src={HeroDsk} alt="Keyboard" fill />
          </div>
          {/* MD */}
          <div className="hidden md:block  lg:hidden relative w-[573px] h-[720px]">
            <Image src={HeroTbl} alt="Keyboard" fill />
          </div>
          {/* SD */}
          <div className="md:hidden relative w-full h-[240px]">
            <Image src={HeroMob} alt="Keyboard" fill />
          </div>

          <h1 className="hidden md:block absolute lg:top-[130px] md:top-44 md:-right-16 lg:right-5 z-20 font-semibold md:text-[10rem] lg:text-3xl text-cus_vl_gray">
            Contact
          </h1>
          <div
            className="flex flex-col justify-end items-center absolute bg-white 
            w-full pl-8 md:pl-0 h-[350px] -left-7 -bottom-80 
            md:left-14 md:w-[572px] md:h-[431px]
            lg:left-auto lg:-right-40 lg:bottom-0 lg:w-[793px] lg:h-[503px] "
          >
            <div className="flex flex-col items-center justify-end">
              <h2 className="text-[3rem] lg:text-xl font-bold">
                Tell us about
              </h2>
              <h2 className="text-[3rem] lg:text-xl font-bold">your project</h2>
              <p className="ml-10 md:ml-0 md:w-2/3 lg:w-1/2 md:mt-12 lg:mb-8">
                We’d love to hear more about your project. Please, leave a
                message below or give us a call. We have two offices, one in
                Texas and one in Tennessee. If you find yourself nearby, come
                say hello!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Contact details */}
      <div className="w-full lg:w-[90%] lg:mx-auto flex flex-col lg:flex-row mt-52 md:pl-0 lg:mt-0">
        <div className="w-full lg:w-1/3 m-5 text-[3rem] lg:text-xl font-bold text-cus_d_blue">
          <div className="h-1 w-20 border-b-2 border-cus_m_gray lg:mb-20"></div>
          <h2>Contact</h2>
          <h2>Details</h2>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-between lg:w-1/2 ">
          <div className="w-full lg:w-1/2 m-5 text-sm text-cus_d_gray border-2 flex flex-col md:flex-row lg:flex-col justify-between">
            <div>
              <p className="mb-4 font-semibold ">Main Office</p>
              <p>
                Mail: <span className="ml-14">archone@mail.com</span>
              </p>
              <p>
                Address: <span className="ml-7">1892 Chenoweth Drive TN</span>
              </p>
              <p>
                Phone: <span className="ml-5">123-456-3451</span>
              </p>
            </div>
            <div className="mt-6 ml-2 flex justify-start items-center">
              <p className="mr-4 font-bold">View on the map</p>
              <Image src={Arrow} alt="arrow right" width={20} height={20} />
            </div>
          </div>
          <div className="w-full lg:w-1/2 m-5 text-sm text-cus_d_gray border-2 flex lg:flex-col justify-between">
            <div>
              <p className="mb-4 font-semibold ">Office II</p>
              <p>
                Mail: <span className="ml-14">archtwo@mail.com</span>
              </p>
              <p>
                Address: <span className="ml-7">3399 Wines lane TX</span>
              </p>
              <p>
                Phone: <span className="ml-5">832-123-4321</span>
              </p>
            </div>
            <div className="mt-6 ml-2 flex justify-start items-center">
              <p className="mr-4 font-bold">View on the map</p>
              <Image src={Arrow} alt="arrow right" width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[90%] flex lg:mx-auto items-center mb-32 mt-10">
        <MyMap KEY={MyKEY} />
      </div>
      {/* Form */}
      <div className="w-[90%] mx-auto flex flex-col lg:flex-row items-center">
        <div className="w-[90%] lg:w-1/3 text-[3rem] lg:text-xl font-bold mr-5 text-cus_d_blue">
          <h2>Connect</h2>
          <h2>With us</h2>
        </div>
        <div className="w-full">
          <Form />
        </div>
      </div>
    </main>
  );
};

export default Page;
