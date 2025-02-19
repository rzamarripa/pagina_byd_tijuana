import React from "react";
import type { PerformanceSection as TPerformanceSection } from "@/lib";
import { ResponsiveImage } from "../ResponsiveImage";
import { CountUp } from "../CountUp";
import { AskQuoteForm } from "../AskQuoteForm";

export const PerformanceSection = (props: { carInfo: TPerformanceSection }) => {
  const { list, text, imageMobile, imageDesktop, quoteForm } = props.carInfo;

  //TODO: add title
  return (
    <div className="relative overflow-hidden text-white ">
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
          placeholder="blur"
          alt="Performance Section"
          fill
          style={{
            zIndex: -1,
          }}
          quality={75}
          priority
        />
      </div>

      {/* Title */}
      {props.carInfo.title && (
        <div
          className={`
            absolute
            animate-fade-in
            w-[1064px]
            max-w-[90%]
            left-0
            right-0
            m-auto
            text-center
            top-[5.729167vw]

            max-img:
            max-img:
            max-img:
            max-img:
          `}
        >
          <h2
            className={`
              max-img:text-[7.444444vw]
              max-img:mb-[2.555556vw]
            `}
          >
            {props.carInfo.title}
          </h2>
        </div>
      )}

      {/* Text */}
      <ul
        className={`
          animate-fade-in
          absolute
          left-0
          right-0
          bottom-[110px]
          m-auto
          flex
          justify-center
          text-center
          max-w-[90%]
          w-[1440px]

          max-img:max-w-[86.416667vw]
          max-img:bottom-auto
          max-img:top-[45.833333vw]
          max-img:flex-wrap
          max-img:justify-between
        `}
      >
        {list.map((item, index) => (
          <li
            key={index}
            className={`
              relative
              min-w-[400px]

              
              max-img:min-w-[unset]
              max-img:w-1/2
              max-img:mb-[5vw]
              max-img:px-[4.166667vw]
              
              img:min-w-[248px]
              2xl:min-w-[312px]
            `}
          >
            <h3
              className={`
                text-[32px] 
                mb-[18px] 
                font-semibold

                max-img:text-left 
                max-img:min-w-[80px] 
                max-img:mb-0
              `}
            >
              {item?.titleNumbers && (
                <CountUp
                  start={0}
                  end={item.titleNumbers}
                  duration={3.5}
                  separator=","
                  className="inline-block"
                />
              )}
              {item.title}
            </h3>
            <p
              className={`
                text-[16px]
                leading-[1.375]
                max-img:text-[3.333333vw]
                max-img:text-left
              `}
            >
              {item.description}
            </p>
            <div
              className={`
                absolute
                top-0
                bottom-0
                right-0
                m-auto
                w-[1px]
                bg-[#707070]
                h-[80%]

                ${index === list.length - 1 && index % 2 !== 0 ? "hidden" : ""}
                ${
                  index === list.length - 3 && index % 2 !== 0
                    ? "max-img:hidden"
                    : ""
                }
                ${
                  list.length % 2 !== 0 && index % 2 !== 0
                    ? "max-img:hidden"
                    : ""
                }
              `}
            />
          </li>
        ))}
      </ul>

      {/* Description */}
      <div
        className={`
          absolute
          left-0
          right-0
          m-auto
          bottom-[16px]
          max-w-[95%]
          text-xs
          z-10
          
          max-img:max-w-[86%]
          max-img:bottom-[4.44444444vw]
          max-img:text-[3.333333vw]
        `}
      >
        <p
          className={`
          animate-fade-in
          absolute
          bottom-0
          right-0
          leading-[1.375]
          w-full
        `}
        >
          {text}
        </p>
      </div>

      {quoteForm && (
        <AskQuoteForm
          car={props.carInfo.title}
          className={`
            top-[0%] 

            img:top-[0px] 
            img:mr-2 
            img:h-[350px] 
            img:overflow-y-auto
            img:w-[320px]

            xl:h-[400px]

            2xl:top-[4%]
            2xl:mr-10
            2xl:h-auto
            2xl:overflow-[unset]

            max-img:top-[45%]
            max-img:z-40
          `}
        />
      )}
    </div>
  );
};
