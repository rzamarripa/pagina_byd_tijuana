import React from "react";
import { EventsForm, MapContainer, ResponsiveEventImage } from "@/components";

export const metadata = {
  title: "Eventos | BYD GRUPO PREMIER",
  description: "Eventos",
};

export default function EventosPage() {
  return (
    <main>
      <section className="relative overflow-hidden text-white min-h-[260vw] object-cover sm:min-h-[225vw] img:min-h-[85vw] 2xl:min-h-[70vw] h-full">
        <ResponsiveEventImage
          image="https://imagenes.masoft.mx/bydtijuana/web.jpg"
          imageMobile="https://imagenes.masoft.mx/bydtijuana/mob.jpg"
          width={800}
          height={500}
          quality={65}
          alt="imagen de fondo de eventos"
          className={`
          absolute 
          block 
          w-full 
          h-full
          object-cover

          inset-0 
          -z-10
        `}
        />
        <div className="absolute inset-0 bg-black opacity-40 -z-10"></div>
        <div
          className={`
          absolute 
          top-1/2 
          left-0 
          translate-x-1/2 
          -translate-y-1/2 
          w-[480px] 
          
          max-img:w-[80%] 
          max-img:top-10
          max-img:left-1/2
          max-img:-translate-x-1/2
          max-img:-translate-y-0

          max-sm:w-[90%]
        `}
        >
          <EventsForm />
        </div>
      </section>

      <MapContainer disableVideo />
    </main>
  );
}
