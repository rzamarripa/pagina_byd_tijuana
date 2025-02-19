import { AskQuoteForm, CarComponent, MapContainer, SwiperSlider } from "@/components";
import { carData } from "@/lib";
import Image from "next/image";
import bottom_banner from "@/assets/images/home-page/bottom-bannerPC.jpg";

export default function Home() {
  return (
    <main>
      <div className="relative">
        <SwiperSlider />

        <AskQuoteForm />
      </div>

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
