import React from "react";
import { TechnicalData } from "@/lib";
import { ResponsiveImage } from "../ResponsiveImage";
import { Button } from "../PrimaryButton";
import Link from "next/link";

interface TechnicalFileProps {
  carInfo: TechnicalData;
  title: string;
}

export const TechnicalFile = (props: TechnicalFileProps) => {
  const {
    buttonUrl,
    techImageMobile: imageMobile,
    techImageDesktop: imageDesktop,
    textBlack,
    buttonColor,
  } = props.carInfo;

  return (
    <div className="relative overflow-hidden text-white">
      {/* Image */}
      <div
        className={`
          max-h-full
          relative
          overflow-hidden
          w-[999vw]
          object-cover
          min-h-[40vw] 
          max-w-[100%]
          h-[55vw] 

          max-img:min-h-[200vw]
          max-img:h-[200vw]
        `}
      >
        <ResponsiveImage
          image={imageDesktop}
          imageMobile={imageMobile}
          alt="Performance Section"
          placeholder="blur"
          fill
          style={{
            zIndex: -1,
            objectFit: "cover",
          }}
          quality={75}
          priority
        />
      </div>

      {/* Button */}
      <div
        className={`
            absolute
            w-[1440px]
            max-w-[90%]
            left-0
            right-0
            m-auto
            top-[43.5%]
            translate-y-[-50%]

            max-img:w-[86%]
            max-img:max-w-[86%]
            max-img:top-[27.777778vw]
            max-img:translate-y-[0]
            max-img:flex
            max-img:flex-col
            max-img:items-center
            max-img:justify-center

            animate-fade-in
        `}
      >
        <h3
          className={`
            text-[40px]
            mb-[50px]
            font-semibold

            max-img:text-[4.444444vw]
            max-img:mb-[8.333333vw]
            max-img:text-center

            ${textBlack ? "text-black" : "text-white"}
          `}
        >
          {props.carInfo?.title || props.title}
        </h3>
        {props.carInfo?.buttonUrl && (
          <Link href={buttonUrl} target="_blank" rel="noopener noreferrer">
            <Button
              className={`
                max-img:w-[86%]
                max-img:flex
                max-img:items-center
                max-img:justify-center
                max-img:p-[3.472222vw]

                img:min-w-[200px]
            `}
              color={buttonColor}
            >
              Ficha Técnica
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
