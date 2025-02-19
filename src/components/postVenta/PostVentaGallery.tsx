import React from "react";
import { dataPostVenta } from "@/lib";
import Image from "next/image";
import { Button } from "../PrimaryButton";

export const PostVentaGallery = () => {
  return (
    <div className="w-full overflow-hidden relative">
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
            {dataPostVenta.map((item, index) => (
              <li
                className={`
                    flex
                    items-center
                    ${index % 2 ? "flex-row-reverse" : ""}
                    mb-[4.6875vw]

                    max-img:flex-col
                    max-img:mb-[25.277778vw]
                  `}
                key={index}
              >
                <Image
                  src={item.img}
                  alt={item.title + " image"}
                  className="w-full h-full block max-img:mb-[5.555556vw] img:w-1/2"
                  width={1440}
                  height={1080}
                  priority  
                  quality={75}
                  placeholder="blur"
                />

                <div
                  className={`
                      flex
                      flex-col
                      max-img:text-center
                      max-img:gap-[3.472222vw]

                      ${index % 2 ? "img:pr-[5vw]" : "img:pl-[5vw]"}
                      img:w-1/2
                    `}
                >
                  <h2 className="text-2xl img:mb-[45px] max-img:text-[3.888889vw]">
                    {item.title}
                  </h2>
                  <p className="text-base max-img:text-[3.333333vw] leading-[1.6]">
                    {item.descriptions.length > 1 ? (
                      item.descriptions.map((description, index) => (
                        <React.Fragment key={index}>
                          {description}
                          <br />
                        </React.Fragment>
                      ))
                    ) : (
                      <React.Fragment>{item.descriptions[0]}</React.Fragment>
                    )}
                  </p>

                  {item.buttons?.length && (
                    <div
                      className={`
                          flex
                          gap-4
                          w-full
                          max-img:flex-col
                          max-img:gap-0
                          max-img:justify-center
                          max-img:items-center
                        `}
                    >
                      {item.buttons.map((button, index) => (
                        <Button key={index} className="w-full max-img:w-auto">
                          {button.text}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
