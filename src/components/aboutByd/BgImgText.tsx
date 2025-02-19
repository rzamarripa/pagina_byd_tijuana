import { StaticImageData } from "next/image";
import React from "react";
import { cn } from "@/lib";
import { ResponsiveImage } from "../ResponsiveImage";

interface BgImageWithTextBaseProps {
  title: string | React.ReactNode;
  imageMobile?: StaticImageData;
  imageDesktop: StaticImageData;
  className?: string;
  imageClassName?: string;
  contentCenter?: boolean;
  small?: boolean;
}

interface DescriptionTextProps extends BgImageWithTextBaseProps {
  description: string | React.ReactNode;
  descriptionComponent?: never;
}

interface DescriptionComponentProps extends BgImageWithTextBaseProps {
  description?: never;
  descriptionComponent: React.ReactNode;
}

type BgImageWithTextProps = DescriptionTextProps | DescriptionComponentProps;

export const BgImageWithText = ({
  title,
  description = "",
  imageMobile,
  imageDesktop,
  className = "",
  imageClassName = "",
  contentCenter = false,
  descriptionComponent,
  small = false,
}: BgImageWithTextProps) => {
  const normalContentClassName = `flex flex-col gap-5 justify-center items-center w-[80%]`;
  const centeredContentClassName = `flex flex-col gap-5 justify-center items-center w-[80%] img:justify-start img:items-start img:text-left img:w-[65%] img:mt-28`;

  return (
    <section
      className={cn(
        `
            flex 
            flex-col 
            justify-between 
            ${
              !contentCenter
                ? "items-center"
                : "items-center img:items-start img:px-32"
            }
            relative
            
            max-img:gap-[32.638889vw]

            ${small ? "img:h-[41.207vw]" : "img:h-[55vw]"}
        `,
        className
      )}
    >
      <div
        className={cn(
          !contentCenter ? normalContentClassName : centeredContentClassName,
          `sm:gap-10 img:gap-[1.875vw]`,
          "transition-transform duration-500 ease-out transform translate-y-10 opacity-0 animate-fade-in"
        )}
      >
        <h1
          className={`
            font-semibold 
            max-img:mt-[13.888889vw]
            max-img:text-[6.111111vw]
            img:mt-[6.25vw]
            img:text-[40px]
            img:leading-[65px]
          `}
        >
          {title}
        </h1>
        {!descriptionComponent ? (
          <p
            className={`
              max-img:text-[3.333333vw]
              img:text-base
              img:leading-7
              ${contentCenter ? "text-left" : "text-center"}
            `}
          >
            {description}
          </p>
        ) : (
          descriptionComponent
        )}
      </div>

      <ResponsiveImage
        image={imageDesktop}
        imageMobile={imageMobile}
        placeholder="blur"
        alt={`BYD GRUPO PREMIER ABOUT PAGE IMAGE ${title}`}
        width={960}
        height={540}
        quality={75}
        className={cn(
          `
            w-full
            h-full

            object-center
            object-cover
            min-h-[300px]

            xs:h-[400px]


            md:h-[700px]
            lg:h-[830px]

            img:absolute 
            img:inset-0 
            img:h-full 
            img:w-full
            img:-z-10
          `,
          imageClassName
        )}
        priority
      />
    </section>
  );
};
