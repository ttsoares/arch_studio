import React from "react";
import Link from "next/link";

import { BiRightArrowAlt } from "react-icons/bi";

// width: "fit" or full
const Buttom = ({ children, link = "/", width = "fit" }) => {
  return (
    <Link href={`/${link}`}>
      <div
        className={`${
          width === "full" ? "w-full" : "w-fit"
        } flex px-10 md:px-20 h-20 bg-cus_d_blue text-white items-center justify-center hover:bg-cus_m_gray`}
      >
        <p className="font-bold">{children}</p>
        <BiRightArrowAlt className="w-8 h-8 ml-2" />
      </div>
    </Link>
  );
};

export default Buttom;
