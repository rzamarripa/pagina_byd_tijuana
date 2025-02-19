"use client";
import { useWindowSize } from "@/hooks";
import { SectionCarPage } from "@/lib";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../PrimaryButton";
import { AskQuoteForm } from "../AskQuoteForm";

export const CarSection = (props: { carInfo: SectionCarPage }) => {
  const {
    title,
    description,
    imageDesktop,
    imageMobile,
    buttons,
    buttonsText,
    collapse,
    collapseData,
    textBlack,
    buttonColor,
    smallText,
    flex,
    flexData,
    quoteForm,
  } = props.carInfo;
  const [showMore, setShowMore] = useState(false);
  const router = useRouter();

  const windowSize = useWindowSize();
  const isMobile = windowSize?.width ? windowSize.width <= 992 : false;
  const image = isMobile && imageMobile ? imageMobile : imageDesktop;

  return (
    <div>
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
          <Image
            src={image}
            alt="Performance Section"
            placeholder="blur"
            fill
            style={{
              zIndex: -1,
              objectFit: "cover",
            }}
            loading="lazy"
            quality={75}
          />
        </div>

        <div
          className={`
          absolute
          w-[1050px]
          max-w-[90%]
          left-0
          right-0
          top-[5.7291666667vw]
          m-auto
          text-center
          animate-fade-in
          ${textBlack ? "text-black" : ""}

          max-img:top-[26.1111111vw]
          max-img:w-[86%]
        `}
        >
          <h2
            className={`
              ${
                flex
                  ? `
                text-black 
                mb-[5.2vw] 
                mt-[3vw] 
                max-img:mb-[13.8888889vw]
                text-[2.0833333333vw]

                max-2xl:mb-[7.5v2]

                max-2.5xl:mb-[6.588556vw]
                `
                  : "mb-4 max-img:mb-[5.555556vw] max-xl:mb-5 w-full"
              }
            `}
          >
            {title}
          </h2>
          {!flex ? (
            <p
              className={`
                  text-base
                  leading-[1.6]
      
                  max-img:text-[3.333333vw]
                `}
            >
              {description}
            </p>
          ) : (
            <div className="flex gap-10 max-img:flex-col-reverse">
              <p
                className={`
                  text-base
                  leading-[1.6]
      
                  max-img:text-[3.333333vw]
                  text-black
                  text-left
                `}
              >
                {flexData.description.map((item, index) => (
                  <React.Fragment key={index}>
                    <span>{item}</span>
                    <br />
                  </React.Fragment>
                ))}
              </p>

              <div className="relative m-auto">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                >
                  <source src={flexData.video} type="video/mp4" />
                </video>
              </div>
            </div>
          )}
        </div>

        {buttons && (
          <div
            className={`
                animate-fade-in
                absolute
                m-auto
                left-0
                right-0
                bottom-[3.3333333333vw]
                flex
                justify-center
                items-center
                ${buttonsText.length > 1 ? "gap-5 max-img:flex-col" : "gap-2"}

                max-img:bottom-[8.333333vw]
            `}
          >
            {buttonsText.map((button, index) => (
              <Button
                key={index}
                onClick={() => router.push(button.link || "/")}
                className={`
                    min-w-[200px]
                    max-img:py-[3.472222vw]
                    max-img:w-[53.333333vw]
                    max-img:text-[3.611111vw]
                `}
                color={buttonColor}
              >
                {button.text}
              </Button>
            ))}
          </div>
        )}
        {quoteForm && (
          <AskQuoteForm
            className="img:max-2xl:bottom-1 img:max-2xl:mr-1 img:max-2xl:top-[unset]"
            car={props.carInfo.title}
          />
        )}
      </div>

      {/* Collapse */}
      {collapse && (
        <div
          className={`
            relative
            z-[100]
            bottom-[88px]

            max-img:bottom-[20.138889vw]
          `}
        >
          <div
            className={`
                sticky
                top-[150px]
                z-[100]

                max-img:top-[27.777778vw]
            `}
          >
            <span
              className={`
                absolute
                left-0
                right-0
                m-auto
                block
                w-[40px]
                h-[40px]
                leading-[100%]
                text-[#7D7D7D]
                text-[38px]
                text-center
                bg-white
                rounded-[50%]
                cursor-pointer
                z-[100]
                font-light
                shadow-[1px_2px_10px_-1px_rgba(0,0,0,0.57)]
                
                transition
                duration-500
                ${showMore ? "rotate-45" : "rotate-0"}

                hover:bg-[#383737]
                hover:opacity-90
                hover:text-white

                max-img:w-[10.138889vw]
                max-img:h-[10.138889vw]
                max-img:leading-[10.138889vw]
                max-img:text-[6.944444vw]
              `}
              onClick={() => setShowMore(!showMore)}
            >
              +
            </span>
            <span
              className={`
                absolute
                left-[50%]
                top-[52px]
                text-white
                text-center
                z-[110]
                translate-x-[-50%]
                ${showMore ? "hidden" : ""}

                max-img:top-[13.0555555556vw]
                max-img:leading-[1]
                max-img:text-[3.5vw]
              `}
            >
              Conoce Más
            </span>
          </div>

          {/* Collapse Data */}
          {showMore && (
            <div
              className={`
                dropdown-enter 
                relative 
                overflow-visible
                block
                translate-y-[131px]
                z-0 

                max-img:translate-y-[30.8125vw]
                max-img:max-h-auto 
                max-img:h-fit
              `}
            >
              <div className="flex flex-col gap-4">
                <ul
                  className={`
                        w-[1440px]
                        max-w-[90%]
                        mx-auto
                        mt-[58px]
                        mb-[9.416667vw]
                        
                        max-img:w-[86%]
                        max-img:max-w-[86%]
                        max-img:mt-[15.888889vw]
                        max-img:mb-[25.277778vw]
                        `}
                >
                  {collapseData.map((data, index) => (
                    <li
                      key={index}
                      className={`
                          flex
                          ${
                            data.imagePosition === "right"
                              ? "flex-row-reverse"
                              : ""
                          }
                          mb-[4.6875vw]

                          max-img:flex-col
                          max-img:mb-[25.277778vw]
                      `}
                    >
                      {data.video ? (
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full block max-img:mb-[5.555556vw] img:w-1/2"
                        >
                          <source type="video/mp4" src={data.video} />
                        </video>
                      ) : (
                        <Image
                          src={
                            isMobile && data?.imageMobile
                              ? (data.imageMobile as StaticImageData)
                              : (data.imageDesktop as StaticImageData)
                          }
                          alt={data.title + " image"}
                          className="w-full h-full block max-img:mb-[5.555556vw] img:w-1/2"
                          width={1200}
                          height={675}
                          priority
                          quality={80}
                        />
                      )}

                      <div
                        className={`
                          flex
                          flex-col
                          max-img:text-center
                          max-img:gap-[3.472222vw]

                          ${
                            data.imagePosition === "left"
                              ? "img:pl-[5vw]"
                              : "img:pr-[5vw]"
                          }
                          img:w-1/2
                       `}
                      >
                        <h2 className="text-2xl img:mb-[45px] max-img:text-[3.888889vw]">
                          {data.title}
                        </h2>
                        <p className="text-base max-img:text-[3.333333vw] leading-[1.6]">
                          {data.descriptions
                            ? data.descriptions.map((description, index) => (
                                <React.Fragment key={index}>
                                  {description}
                                  <br />
                                </React.Fragment>
                              ))
                            : data.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}

      {smallText && (
        <div
          className={`
            animate-fade-in
            absolute
            m-auto
            left-7
            bottom-[14px]
            flex
            justify-center
            items-center

            max-img:bottom-[8.333333vw]
        `}
        >
          <p className="text-xs text-white">{smallText}</p>
        </div>
      )}
    </div>
  );
};
