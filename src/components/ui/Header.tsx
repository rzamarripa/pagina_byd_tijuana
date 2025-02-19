import React from "react";
import Image from "next/image";
import logo from "@/assets/images/public-icon/logo.svg";
import Navbar from "./Navbar";
import Link from "next/link";

const Header = () => {
  return (
    <header
      className={`
        bg-[#252728] 
        px-[2rem]
        h-[4rem] 
        flex 
        items-center 
        justify-between 
        2xl:justify-normal
        fixed  
        top-0 
        w-full 
        z-[999]
        opacity-[0.98]
    `}
    >
      <div className="flex items-center 2xl:absolute 2xl:px-[1.75rem]">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            className="w-[6.25rem] xxs:w-[9.5rem] xs:w-[12.5rem] md:w-[14rem] lg:w-[12rem] xl:w-[14rem] 2xl:w-[10rem] h-auto"
            priority
          />
        </Link>
      </div>

      <Navbar />
    </header>
  );
};

export { Header };
