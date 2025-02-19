import { BackgroundVideoSection } from "@/lib";
import Link from "next/link";
import React from "react";
import { ResponsiveVideo } from "./ResponsiveVideo";
import { Button } from "../PrimaryButton";
import { AskQuoteForm } from "../AskQuoteForm";

export const VideoBg = (props: {
  carInfo: BackgroundVideoSection;
  name: string;
}) => {
  const {
    title,
    description,
    video,
    videoMobile,
    buttons,
    buttonsText,
    smallText,
    smallTextDescription,
  } = props.carInfo;

  return (
    <section className="relative">
      <div className="max-img:h-[200vw] relative w-full overflow-hidden object-cover">
        <div className="h-full">
          <ResponsiveVideo
            video={video}
            videoMobile={videoMobile}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div
        className={`
          absolute 
          animate-fade-in 
          w-[1060px] 
          max-w-[90%] 
          left-0 
          right-0 
          m-auto 
          text-center
          text-white
          top-[5.7291666667vw]

          max-img:w-[86%] 
          max-img:top-[26.111111vw]
        `}
      >
        <h2>{title}</h2>
        <span className="max-img:text-[3.333333vw] text-base leading-[1.6]">
          {description}
        </span>
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
            <Link
              key={index}
              href={button.link}
              className={`
                    min-w-[200px]
                    max-img:py-[3.472222vw]
                    max-img:w-[53.333333vw]
                    max-img:text-[3.611111vw]
                `}
            >
              <Button>{button.text}</Button>
            </Link>
          ))}
        </div>
      )}

      {smallText && (
        <div
          className={`
            animate-fade-in
            absolute
            m-auto
            left-7
            bottom-[10px]
            flex
            justify-center
            items-center

            max-img:bottom-[8.333333vw]
        `}
        >
          <p className="text-xs text-white">{smallTextDescription}</p>
        </div>
      )}

      <AskQuoteForm car={props.name} />
    </section>
  );
};
