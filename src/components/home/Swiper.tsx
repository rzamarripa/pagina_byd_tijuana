"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import banner_shark from "@/assets/images/home-page/carrusel/web_shark_julio26.jpg";
import banner_dolphin_mini from "@/assets/images/home-page/carrusel/web_dolphin-mini_julio26.jpg";
import banner_song_pro from "@/assets/images/home-page/carrusel/web_song-pro_julio26.jpg";
import banner_song_plus from "@/assets/images/home-page/carrusel/web_song-plus_julio26.jpg";
import banner_yuan_pro from "@/assets/images/home-page/carrusel/web_yuan-pro_julio26.jpg";
import { Button } from "../";
import { useRouter } from "next/navigation";

const defaultSlides = [
  { image: banner_shark, link: "/car/BYDSHARK" },
  { image: banner_dolphin_mini, link: "/car/dolphin-mini" },
  { image: banner_song_pro, link: "/car/song-pro-dmi" },
  { image: banner_song_plus, link: "/car/song-plus-dmi" },
  { image: banner_yuan_pro, link: "/car/yuan-pro" },
];

type CustomSlide = { id: string; image: string; link: string };

const SwiperSlider = ({ customSlides }: { customSlides?: CustomSlide[] }) => {
  const router = useRouter();
  const slides =
    customSlides && customSlides.length > 0 ? customSlides : defaultSlides;

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
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className={`
              relative
              w-full
              aspect-[16/9]

              img:aspect-auto
              img:h-[950px]
              xl:h-[920px]
            `}
          >
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              quality={70}
              placeholder={
                typeof slide.image === "string" ? "empty" : "blur"
              }
              priority
            />
          </div>

          <div
            className={`
                flex
                items-center
                justify-center
                py-4

                img:absolute
                img:left-1/2
                img:top-[85%]
                img:-translate-x-1/2
                img:w-full
                img:py-0
                `}
          >
            <Button
              onClick={() => router.push(slide.link)}
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
