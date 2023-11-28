import React from "react";
import Image from "next/image";

import HeroDsk from "/public/imgs/about/desktop/image-hero.jpg";
import HeroTbl from "/public/imgs/about/tablet/image-hero.jpg";
import HeroMob from "/public/imgs/about/mobile/image-hero.jpg";

import Jake from "/public/imgs/about/desktop/avatar-jake.jpg";
import Jackson from "/public/imgs/about/desktop/avatar-jackson.jpg";
import Maria from "/public/imgs/about/desktop/avatar-maria.jpg";
import Thompson from "/public/imgs/about/desktop/avatar-thompson.jpg";

const DATA = [
  {
    img: Jake,
    name: "Jake Richards",
    role: "Chief Architect",
  },
  {
    img: Thompson,
    name: "Thompson Smith",
    role: "Head of Finance",
  },
  {
    img: Jackson,
    name: "Jackson Rourke",
    role: "Lead Designer",
  },
  {
    img: Maria,
    name: "Maria Simpson",
    role: "Senior Architect",
  },
];

import Linkedin from "/public/imgs/icon-linkedin.svg";
import Tweeter from "/public/imgs/icon-twitter.svg";

import Heritage from "/public/imgs/about/desktop/image-heritage.jpg";

const Page = () => {
  return (
    <main className="flex flex-col relative w-full min-h-screen md:ml-2 md:px-24 text-black">
      <p className="hidden md:block absolute top-5 left-7 text-cus_l_gray transform rotate-90 text-base tracking-widest">
        A B O U T
      </p>
      {/* Hero */}
      <div className="w-[90%] relative flex mx-auto mb-32">
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
          <div className="md:hidden relative w-[375px] h-[240px]">
            <Image src={HeroMob} alt="Keyboard" fill />
          </div>

          <h1 className="absolute lg:top-32 md:top-44 md:-right-16 lg:right-5 z-20 font-semibold md:text-[10rem] lg:text-3xl text-cus_l_gray">
            About
          </h1>
          {/*  */}
          <div className="flex flex-col justify-end items-center absolute bottom-0 md:left-14 lg:right-0 bg-white md:w-[572px] md:h-[431px] lg:w-[793px] lg:h-[503px]">
            {/*  */}
            <div className=" flex flex-col items-center justify-end">
              <h2 className="text-xl font-bold">Your team of</h2>
              <h2 className="text-xl font-bold">professionals</h2>
              <p className="md:w-2/3 lg:w-1/2 mt-12 lg:mb-8">
                Our small team of world-class professionals will work with you
                every step of the way. Strong relationships are at the core of
                everything we do. This extends to the relationship our projects
                have with their surroundings.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Heritage */}
      <div className="w-full lg:w-[90%] mx-auto flex mb-32">
        <div className="w-full lg:w-1/2 pr-12">
          <div className="h-1 w-20 border-b-2 border-cus_m_gray mb-20"></div>
          <h2 className="text-xl pt-9">Our</h2>
          <h2 className="mb-12 text-xl">Heritage</h2>
          <div className="w-full lg:w-3/4">
            <p className="mb-4">
              Founded in 2007, we started as a trio of architects. Our
              complimentary skills and relentless attention to detail turned
              Arch into one of the most sought after boutique firms in the
              country.
            </p>
            <p className="mb-4">
              Speciliazing in Urban Design allowed us to focus on creating
              exceptional structures that live in harmony with their
              surroundings. We consider every detail from every surrounding
              element to inform our designs.{" "}
            </p>
            <p>
              Our small team of world-class professionals provides input on
              every project.
            </p>
          </div>
        </div>
        <div className="hidden lg:block w-1/2 pl-5">
          <div className="w-[540px] h-[565px] relative">
            <Image src={Heritage} alt="Building facade" fill />
          </div>
        </div>
      </div>
      {/* Leaders */}
      <div className="w-full lg:w-[90%] mx-auto flex flex-col lg:flex-row">
        <div className="w-1/3 self-start">
          <h2 className="text-xl">The</h2>
          <h2 className="text-xl">Leaders</h2>
        </div>
        <div className="w-full lg:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-y-12">
            {DATA.map((elm, index) => (
              <div key={index} className="group relative mb-10">
                <div className="flex relative md:w-[280px] md:h-[256px] lg:w-[350px] lg:h-[320px]">
                  <Image src={elm.img} alt="Jake" />
                </div>
                <div className="absolute inset-0 md:w-[280px] md:h-[256px] lg:w-[350px] h-0 flex flex-col justify-center items-center bg-black/50 opacity-0 group-hover:lg:h-[320px] group-hover:md:h-[256px] group-hover:opacity-100 duration-500">
                  <div className="flex items-center justify-center space-x-5 invert">
                    <Image
                      className="hover:animate-pulse"
                      src={Linkedin}
                      alt="Linkedin"
                      width={40}
                      height={40}
                    />
                    <Image
                      className="hover:animate-pulse"
                      src={Tweeter}
                      alt="Tweeter"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
                <p className="text-lg font-bold mt-4">{elm.name}</p>
                <p>{elm.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
