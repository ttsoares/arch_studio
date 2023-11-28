import React from "react";
import Image from "next/image";

const DATA = [
  {
    imgs: "image-del-sol.jpg",
    title: "Project Del Sol",
    subti: "January 2016",
  },
  {
    imgs: "image-228b.jpg",
    title: "228B Tower",
    subti: "April 2015",
  },
  {
    imgs: "image-edelweiss.jpg",
    title: "Grand Edelweiss Hotel",
    subti: "December 2013",
  },
  {
    imgs: "image-eebox.jpg",
    title: "Eebox Building",
    subti: "August 2017",
  },
  {
    imgs: "image-federal.jpg",
    title: "Federal II Tower",
    subti: "March 2017",
  },
  {
    imgs: "image-hypers.jpg",
    title: "Hypers",
    subti: "January 2012",
  },
  {
    imgs: "image-netcry.jpg",
    title: "Netcry Tower",
    subti: "August 2012",
  },
  {
    imgs: "image-paramour.jpg",
    title: "Project Paramour",
    subti: "February 2008",
  },
  {
    imgs: "image-prototype.jpg",
    title: "Le Prototype",
    subti: "October 2015",
  },
  {
    imgs: "image-seraph.jpg",
    title: "Seraph Station",
    subti: "September 2019",
  },
  {
    imgs: "image-sxiv.jpg",
    title: "SXIV Tower",
    subti: "March 2011",
  },
  {
    imgs: "image-trinity.jpg",
    title: "Trinity Bank Tower",
    subti: "September 2010",
  },
];

const desk = "/imgs/portfolio/desktop/";
const tblt = "/imgs/portfolio/tablet/";
const mobi = "/imgs/portfolio/mobile/";

const Page = () => {
  return (
    <main className="flex flex-col relative w-full min-h-screen md:ml-2 md:px-24 text-white ">
      {/*  */}
      <p className="hidden md:block absolute top-16 -left-2 text-cus_l_gray transform rotate-90 text-base tracking-widest">
        P O R T F O L I O
      </p>
      {/* Desktop */}
      <div className="hidden w-full self-center lg:grid grid-cols-1 lg:grid-cols-3 gap-y-14 ">
        {DATA.map((img, index) => (
          <div
            key={index}
            className="flex aspect-auto relative justify-center items-center"
          >
            <div className="relative w-[320px] h-[560px] hover:opacity-70 hover:cursor-pointer">
              <Image src={`${desk}${img.imgs}`} alt={img.title} fill />
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/70"></div>
              <div className="text-white absolute bottom-3 left-5 ">
                <p className="text-lg font-bold mr-10">{img.title}</p>
                <p className="text-sm mt-2">{img.subti}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Tablet */}
      <div className="w-full hidden md:flex flex-col  items-center justify-center lg:hidden space-y-8">
        {DATA.map((img, index) => (
          <div
            key={index}
            className="flex aspect-auto relative justify-center items-center"
          >
            <div className="relative w-[573px] h-[240px] hover:opacity-70 hover:cursor-pointer">
              <Image src={`${tblt}${img.imgs}`} alt={img.title} fill />
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/70"></div>
              <div className="text-white absolute bottom-3 left-5 ">
                <p className="text-lg font-bold mr-10">{img.title}</p>
                <p className="text-sm mt-2">{img.subti}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Mobile */}
      <div className="w-full flex flex-col items-center justify-center md:hidden space-y-8">
        {DATA.map((img, index) => (
          <div
            key={index}
            className="flex aspect-auto relative justify-center items-center"
          >
            <div className="relative w-[317px] h-[240px] hover:opacity-70 hover:cursor-pointer">
              <Image src={`${mobi}${img.imgs}`} alt={img.title} fill />
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/70"></div>
              <div className="text-white absolute bottom-3 left-5 ">
                <p className="text-lg font-bold mr-10">{img.title}</p>
                <p className="text-sm mt-2">{img.subti}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;
