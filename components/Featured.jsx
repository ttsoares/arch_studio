import React from "react";
import Image from "next/image";

import DelSolDsk from "/public/imgs/portfolio/desktop/image-del-sol.jpg";
import DelSolTbl from "/public/imgs/portfolio/tablet/image-del-sol.jpg";
import DelSolMob from "/public/imgs/portfolio/mobile/image-del-sol.jpg";
import Dsk228B from "/public/imgs/portfolio/desktop/image-228b.jpg";
import Tbl228B from "/public/imgs/portfolio/tablet/image-228b.jpg";
import Mob228B from "/public/imgs/portfolio/mobile/image-228b.jpg";
import LeProtDsk from "/public/imgs/portfolio/desktop/image-prototype.jpg";
import LeProtTbl from "/public/imgs/portfolio/tablet/image-prototype.jpg";
import LeProtMob from "/public/imgs/portfolio/mobile/image-prototype.jpg";

const Featured = () => {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 w-full   text-white">
      {/*  Del Sol */}
      <div className="w-1/3   relative">
        {/* SD || Mobile*/}
        <div className="md:hidden relative w-[311px] h-[240px]  brightness-50">
          <Image src={DelSolMob} alt="Del Sol" fill />
        </div>
        {/* MD || Tablet*/}
        <div className="hidden md:block lg:hidden relative  w-[573px] h-[240px]  brightness-50">
          <Image src={DelSolTbl} alt="Del Sol" fill />
        </div>
        {/* LG || Desktop */}
        <div className="hidden lg:block relative  w-[350px] h-[560px] brightness-50">
          <Image src={DelSolDsk} alt="Del Sol" fill />
          <p className="absolute top-8 right-0 text-3xl font-bold text-white/50">
            1
          </p>
        </div>
        <div className="absolute w-52 h-14 bottom-12 left-10">
          <p className="text-lg font-extrabold mb-2">Project Del Sol</p>
          <p className="text-xs">View All Project</p>
        </div>
      </div>
      {/* 228B Tower */}
      <div className="w-1/3   relative">
        {/* SD || Mobile*/}
        <div className="md:hidden relative w-[311px] h-[240px]  brightness-50">
          <Image src={Mob228B} alt="Del Sol" fill />
        </div>
        {/* MD || Tablet*/}
        <div className="hidden md:block lg:hidden relative  w-[573px] h-[240px]  brightness-50">
          <Image src={Tbl228B} alt="Del Sol" fill />
        </div>
        {/* LG || Desktop */}
        <div className="hidden lg:block relative  w-[350px] h-[560px] brightness-50">
          <Image src={Dsk228B} alt="Del Sol" fill />
          <p className="absolute top-8 right-0 text-3xl font-bold text-white/50">
            2
          </p>
        </div>
        <div className="absolute w-52 h-14 bottom-12 left-10">
          <p className="text-lg font-extrabold mb-2">228B Tower</p>
          <p className="text-xs">View All Project</p>
        </div>
      </div>
      {/*  */}
      <div className="w-1/3   relative">
        {/* SD || Mobile*/}
        <div className="md:hidden relative w-[311px] h-[240px]  brightness-50">
          <Image src={LeProtMob} alt="Del Sol" fill />
        </div>
        {/* MD || Tablet*/}
        <div className="hidden md:block lg:hidden relative  w-[573px] h-[240px]  brightness-50">
          <Image src={LeProtTbl} alt="Del Sol" fill />
        </div>
        {/* LG || Desktop */}
        <div className="hidden lg:block relative  w-[350px] h-[560px] brightness-50">
          <Image src={LeProtDsk} alt="Del Sol" fill />
          <p className="absolute top-8 right-0 text-3xl font-bold text-white/50">
            3
          </p>
        </div>
        <div className="absolute w-52 h-14 bottom-12 left-10">
          <p className="text-lg font-extrabold mb-2">Le Prototipe</p>
          <p className="text-xs">View All Project</p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
