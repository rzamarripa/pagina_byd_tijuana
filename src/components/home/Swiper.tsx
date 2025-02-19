"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import web_dolphin from "@/assets/images/home-page/carrusel/web_dolphin-mini.jpg";
import web_king from "@/assets/images/home-page/carrusel/web_king.jpg";
import web_songpro from "@/assets/images/home-page/carrusel/web_song-pro.jpg";

import mobile_dolphin from "@/assets/images/home-page/carrusel/mob_dolphin-mini.jpg";
import mobile_king from "@/assets/images/home-page/carrusel/mob_king.jpg";
import mobile_songpro from "@/assets/images/home-page/carrusel/mob_song-pro.jpg";
import { Button } from "../";
import { useRouter } from "next/navigation";

const SwiperSlider = () => {
  const links = [
    { link: "/dolphin-mini" },
    { link: "/king" },
    { link: "/song-pro-dmi" },
  ];

  const images = {
    web: [web_dolphin, web_king, web_songpro],
    mobile: [mobile_dolphin, mobile_king, mobile_songpro],
  };

  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imagesToShow = isMobile ? images.mobile : images.web;

  return (
    <Swiper
      modules={[Navigation, Pagination, EffectFade]}
      loop={true}
      spaceBetween={50}
      slidesPerView={1}
      effect="fade"
      navigation
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="max-h-[calc(100vh-4rem)] lg:max-h-[calc(100vh-2rem)] overflow-y-hidden"
    >
      {imagesToShow.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-[950px] xl:h-[920px]">
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              quality={70}
              placeholder="blur"
              priority
            />
          </div>

          <div
            className={`
                absolute
                left-1/2
                top-[83%]
                xl:top-[85%]
                transform
                -translate-x-1/2
                w-full
                flex
                items-center
                justify-center
                `}
          >
            <Button
              onClick={() => router.push(`car/${links[index].link}`)}
              className="w-[95%] md:w-[40%] lg:w-[50%] xl:w-[15%]"
            >
              Saber más
            </Button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export { SwiperSlider };
