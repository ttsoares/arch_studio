import React from "react";
import Image from "next/image";

import Arrow from "/public/imgs/icon-arrow.svg";

// width: "fit" or full
// type: "botton" or "submit"
const Buttom = ({ children, type = "button", width = "fit", ppxx = 20 }) => {
  return (
    <button
      type={type}
      className={` px-${ppxx} ${
        width === "full" ? "w-full" : "w-fit"
      } flex h-20 bg-cus_d_blue text-white items-center justify-center hover:bg-cus_m_gray `}
    >
      {children && <p className={`font-bold mr-4`}>{children}</p>}
      <Image
        className="invert"
        src={Arrow}
        alt="right arrow"
        width={20}
        height={20}
      />
    </button>
  );
};

export default Buttom;
