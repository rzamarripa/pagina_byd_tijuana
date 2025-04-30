import React from "react";
import { ContactForm, ContactHeading, MapContainer } from "@/components";

export const metadata = {
  title: "Contáctanos | BYD GRUPO PREMIER",
  description: "Contáctanos | BYD GRUPO PREMIER",
};

export default function ContactUsPage() {
  return (
    <main>
      <ContactHeading />

      <section
        className={`
            flex
            w-[1436px]
            max-w-[calc(100%-100px)]
            mt-[7.34375vw]
            mb-[3.6458vw]
            mx-auto

            max-img:flex-col
            max-img:w-[86.111111vw]
            max-img:mt-[18.055556vw]
            max-img:mb-0
        `}
      >
        <div
          className={`
                w-[23.1771vw] 
                pr-[3.2vw]

                max-img:w-auto
                max-img:pr-0
                max-img:flex
                max-img:flex-col
                max-img:items-center
            `}
        >
          <h3
            className={`
                text-[32px]
                leading-[1.3]
                font-semibold
                mb-[1.71875vw]

                max-img:text-[6.666667vw]
                max-img:text-center
                max-img:mb-[7.777778vw]
            `}
          >
            BYD - Tijuana
          </h3>
          <div
            className={`
                w-[100px]
                h-[2px]
                bg-black
                mb-[2.34375vw]
                
                max-img:w-[125px]
                max-img:mb-[12.638889vw]
            `}
          />
          <p
            className={`
                text-base 
                leading-[1.6] 
                text-[#888888]

                max-img:text-[4.444444vw]
                max-img:text-center
                max-img:text-[#4e5356]
            `}
          >
            Atención al Cliente: 664 210 8256
            <br />
            Localización: Tijuana, Baja California
            <br />
            Dirección: P.º de los Héroes 10493, Zona Urbana Rio Tijuana, 22010 Tijuana, B.C.
          </p>
        </div>
        <div
          className={`
                flex-1
                border-l-[1px]
                border-solid
                border-[#cecece]
                pl-[6.510417vw]

                max-img:border-none
                max-img:p-0
            `}
        >
          <div
            className={`
              max-img:mt-[19.027778vw]
              max-img:text-center
            `}
          >
            <h2
              className={`
                text-[32px]
                leading-[1.25]
                font-semibold
                mb-[1.145833vw]

                max-img:text-[6.666667vw]
                max-img:text-[#4e5356]
                max-img:mb-[10.555556vw]
              `}
            >
              Contáctanos para más información
            </h2>
            <p
              className={`
                text-[#888888] 
                leading-[1.6] 
                text-base 

                max-img:text-[4.444444vw] 
                max-img:text-[#4e5356]
              `}
            >
              Por favor, ten en cuenta que todos los campos marcados con un (*)
              son obligatorios.
            </p>
          </div>

          <div className="mt-[2.083333vw] max-img:mt-[0.972222vw]">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Mapa */}
      <MapContainer />
    </main>
  );
}
