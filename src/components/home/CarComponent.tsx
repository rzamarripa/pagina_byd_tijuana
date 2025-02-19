import { StaticImageData } from "next/image";
import React from "react";
import { Button } from "../";
import { ResponsiveImage } from "../ResponsiveImage";
import Link from "next/link";

interface CarComponentProps {
  title?: string;
  imageMobile: StaticImageData;
  imageDesktop: StaticImageData;
  link?: string;
}

const CarComponent = ({
  imageMobile,
  imageDesktop,
  title,
  link,
}: CarComponentProps) => {
  return (
    <div
      className={`
          flex 
          flex-col 
          relative 
          gap-3 
          w-[100%] 
          justify-between 
          items-center 
          py-14 
          h-[calc(100vh-4rem)]
          
          max-md:py-[8rem]
          max-img:h-[calc(100vh+2rem)]
        `}
    >
      <ResponsiveImage
        image={imageDesktop}
        imageMobile={imageMobile}
        placeholder="blur"
        alt={`${title} car`}
        fill
        sizes="100vw"
        priority
        quality={70}
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      {title ? (
        <h3 className="text-white text-[4rem] font-bold max-sm:text-[2.25rem] max-sm:text-center max-md:font-semibold max-md:w-[80%]">
          {title}
        </h3>
      ) : (
        <div className="flex-1" />
      )}

      {link && (
        <Link
          href={`/car/${link}`}
          className={`
            flex 
            max-md:flex-col
            max-md:items-center
            justify-center
            gap-3 
            w-[60%] 
            mx-auto
          `}
        >
          <Button className="w-[30%] max-md:w-[60%] max-sm:w-full">
            Conócelo
          </Button>
        </Link>
      )}
    </div>
  );
};

export { CarComponent };
