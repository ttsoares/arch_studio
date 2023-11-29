import React from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "./Button";

const DATA = [
  {
    title1: "Project",
    title2: "Paramour",
    text: "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
    imgdk: "/imgs/home/desktop/image-hero-paramour.jpg",
    imgtb: "/imgs/home/tablet/image-hero-paramour.jpg",
    imgmb: "/imgs/home/mobile/image-hero-paramour.jpg",
  },
  {
    title1: "Seraph",
    title2: "Station",
    text: "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
    imgdk: "/imgs/home/desktop/image-hero-seraph.jpg",
    imgtb: "/imgs/home/tablet/image-hero-seraph.jpg",
    imgmb: "/imgs/home/mobile/image-hero-seraph.jpg",
  },
  {
    title1: "Federal II",
    title2: "Tower",
    text: "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
    imgdk: "/imgs/home/desktop/image-hero-federal.jpg",
    imgtb: "/imgs/home/tablet/image-hero-federal.jpg",
    imgmb: "/imgs/home/mobile/image-hero-federal.jpg",
  },
  {
    title1: "Trinity Bank",
    title2: "Tower",
    text: "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
    imgdk: "/imgs/home/desktop/image-hero-trinity.jpg",
    imgtb: "/imgs/home/tablet/image-hero-trinity.jpg",
    imgmb: "/imgs/home/mobile/image-hero-trinity.jpg",
  },
];

const Slide = ({ index }) => {
  return (
    <>
      {/* SD || Mobile*/}
      <div className="relative w-[375px] h-[560px] md:hidden brightness-50">
        <Image src={DATA[index].imgmb} alt={DATA[index].title1} fill />
      </div>
      {/* MD || Tablet*/}
      <div className="hidden md:block lg:hidden w-[573px] h-[720px]  brightness-50">
        <Image src={DATA[index].imgtb} alt={DATA[index].title1} fill />
      </div>
      {/* LG || Desktop */}
      <div className="hidden lg:block w-[1110px] h-[720px] brightness-50">
        <Image src={DATA[index].imgdk} alt={DATA[index].title1} fill />
      </div>

      <div className="absolute top-20 left-5 md:bottom-[20%] md:left-40">
        <h1 className="text-[4rem] leading-[3.2rem] md:text-2xl font-bold">
          {DATA[index].title1}
        </h1>
        <h1 className="text-[4rem] leading-[3.2rem] md:text-2xl font-bold">
          {DATA[index].title2}
        </h1>
        <p className="w-full md:w-[40%] my-10">{DATA[index].text}</p>

        <Link href="/portfolio">
          <Button>
            <p>See Our Portfolio</p>
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Slide;
