import React from 'react'
import { ResponsiveImage } from "@/components";
import pcImg from "@/assets/images/contact-me/pc.jpg";
import mobImg from "@/assets/images/contact-me/mob.jpg";

export const ContactHeading = () => {
  return (
    <div
        className={`
          relative 
          overflow-hidden
          w-full
        `}
      >
        <ResponsiveImage
          image={pcImg}
          imageMobile={mobImg}
          placeholder="blur"
          width={800}
          height={500}
          className="block w-full h-auto object-cover"
          alt="Contact Us image"
          priority
          quality={65}
        />

        <div
          className={`
            absolute
            top-1/2
            left-[12.552083vw]
            text-left
            -translate-y-1/2     
            text-white

            max-img:left-1/2
            max-img:-translate-x-1/2
            max-img:-translate-y-1/2
            max-img:text-center
            max-img:w-full
          `}
        >
          <h2
            className={`
                font-medium
                leading-[1.375]
                mb-3

                max-img:text-[10.133333vw] 
                img:text-[46px]
                2xl:text-[56px]
            `}
          >
            Contacta Con Nosotros
          </h2>
        </div>
      </div>
  )
}
