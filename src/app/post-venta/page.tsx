import React from "react";
import { PostVentaGallery, ResponsiveImage } from "@/components";
import pcImg from "@/assets/images/post-venta/pc.png";
import mobImg from "@/assets/images/post-venta/mob.png";
import headingPc from "@/assets/images/post-venta/web-header.jpg";
import headingMob from "@/assets/images/post-venta/mob-header.jpg";

export default function PostVentaPage() {
  return (
    <main>
      <section
        className={`
          w-full
          text-white
          mb-[5vw]
          
          max-img:overflow-hidden
        `}
      >
        <div className="relative ">
          <div
            className={`
              absolute
              top-[120px]
              left-0
              right-0
              m-auto
              w-[80%]
              text-center

              max-img:w-[79%]
            `}
          >
            <h2
              className={`
                text-[40px]
                font-semibold
                leading-tight
                mb-4
                overflow-hidden
                text-ellipsis
                uppercase

                max-img:text-[6.6666666667v]
                max-3xl:text-[32px]
              `}
            >
              Único taller especializado BYD
            </h2>
          </div>

          <div
            className={`
              object-cover 
              h-[734px]

              max-img:h-[180.361111vw]
            `}
          >
            <ResponsiveImage
              image={pcImg}
              imageMobile={mobImg}
              placeholder="blur"
              width={1440}
              height={1080}
              className="block w-full h-auto object-cover"
              alt="Unico taller especializado BYD image post-venta"
              priority
              quality={75}
            />
          </div>

          <div
            className={`
              w-[1440px]
              max-w-[90%]
              absolute
              left-0
              right-0
              bottom-[-412px]

              m-auto
              z-1
              
              max-xs:top-[70vw]
              max-sm:top-[17.5rem]
              max-md:top-[40vw]
              max-lg:top-[35vw]
              max-img:top-[30vw]
              max-img:w-[86%]
              max-img:bottom-[unset]
              max-img:h-[52.083333vw]

              max-xl:bottom-[-150px]

              max-2.5xl:bottom-[-180px]

              max-3xl:h-[641px]
              max-3xl:bottom-[-167px]
              max-3xl:w-[1140px]
            `}
          >
            <div className="h-full">
              <ResponsiveImage
                image={headingPc}
                imageMobile={headingMob}
                placeholder="blur"
                width={800}
                height={500}
                className="block w-full h-auto object-fill"
                alt="taller image post-venta"
                priority
                quality={65}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-img:-mt-[10rem] 3xl:mt-[20rem]">
        <PostVentaGallery />
      </section>
    </main>
  );
}
