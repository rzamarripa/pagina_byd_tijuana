import { AskQuoteForm, CarComponent, MapContainer, SwiperSlider } from "@/components";
import { carData } from "@/lib";
import { readBanners } from "@/lib/bannersStore";
import Image from "next/image";
import bottom_banner from "@/assets/images/home-page/bottom-bannerPC.jpg";

export default async function Home() {
  const customSlides = await readBanners();

  return (
    <main>
      <div className="relative">
        <SwiperSlider customSlides={customSlides} />

        <AskQuoteForm className="max-img:hidden" />
      </div>

      <section className="img:hidden py-6 px-4 flex justify-center">
        <AskQuoteForm
          className="
            relative
            top-0
            left-0
            translate-x-0
            mr-0
            w-full
            max-w-md

            max-img:top-0
            max-img:left-0
            max-img:translate-x-0
            max-img:mr-0
            max-img:w-full

            max-sm:w-full
          "
        />
      </section>

      <section className="flex flex-col">
        {carData.map((car, index) => (
          <CarComponent key={index} {...car} />
        ))}
      </section>

      <section
        className={`
          flex 
          flex-col 
          relative 
          
          h-[15vh] 
          xs:h-[16vh] 
          sm:h-[21vh]
          md:h-[28.5vh]
          lg:h-[31.25vh]
          img:h-[37vh]
          xl:h-[40vh]
          2xl:h-[45.5vh]
          3xl:h-[57.5vh]
        `}
      >
        <Image
          src={bottom_banner}
          alt="Acerca de BYD"
          placeholder="blur"
          fill
          sizes="100vw"
          quality={70}
          style={{
            objectFit: "cover",
            zIndex: -1,
          }}
          priority
        />
      </section>

      <MapContainer />
    </main>
  );
}
