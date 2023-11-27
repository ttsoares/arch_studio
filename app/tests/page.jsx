import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-1/3 h-[400px] relative">
        <Image src="/imgs/home/desktop/image-hero-trinity.jpg" fill alt="" />
      </div>
      <div className="w-1/3 h-[400px] relative">
        <Image src="/imgs/home/tablet/image-hero-trinity.jpg" fill alt="" />
      </div>
      <div className="w-1/3 h-[400px] relative">
        <Image src="/imgs/home/mobile/image-hero-trinity.jpg" fill alt="" />
      </div>
    </div>
  );
};

export default Page;
