import React from "react";
import aboutImg from "@/assets/images/about-page/about-BYD-pc.jpg";
import autoDesktop from "@/assets/images/about-page/auto-pc.png";
import autoMobile from "@/assets/images/about-page/auto-mob.jpg";
import dmpImg from "@/assets/images/about-page/DM-p-PC.png";
import dmpImgMobile from "@/assets/images/about-page/DM-p-MOB.png";
import sysintImg from "@/assets/images/about-page/intelligent-cockpit-system-pc.jpg";
import sysintImgMobile from "@/assets/images/about-page/intelligent-cockpit-system-mob.jpg";
import carsafetyDesktop from "@/assets/images/about-page/vehicle-safety-PC.jpg";
import carsafetyMobile from "@/assets/images/about-page/vehicle-safety-MOB.jpg";
import productionDesktop from "@/assets/images/about-page/market-performance-PC-new.png";
import productionMobile from "@/assets/images/about-page/market-performance-MOB.png";
import pollutionDesktop from "@/assets/images/about-page/pollution-and-emission-reduction-PC-new.jpg";
import pollutionMobile from "@/assets/images/about-page/pollution-and-emission-reduction-MOB-new.jpg";
import bladeDesktop from "@/assets/images/about-page/blade-battery-pc.jpg";
import bladeMobile from "@/assets/images/about-page/blade-battery-mob.jpg";
import platformDesktop from "@/assets/images/about-page/e-Platform-PC-new.png";
import platformMobile from "@/assets/images/about-page/e-Platform-MOB-new.png";
import dmMobile from "@/assets/images/about-page/DM-i-MOB.png";
import dmDesktop from "@/assets/images/about-page/DM-i-PC.png";

// add lazy load
import { PopUpVideo, BgImageWithText } from "@/components";

export const metadata = {
  title: "Acerca de BYD | BYD GRUPO PREMIER",
  description: "Acerca de BYD | BYD GRUPO PREMIER",
};

export default function AboutBYDPage() {
  return (
    <main>
      <PopUpVideo />

      <BgImageWithText
        title="Acerca de BYD"
        description={
          <>
            Fundada en febrero de 1995, BYD es una empresa multifacética de alta
            tecnología dedicada a las innovaciones tecnológicas para una vida
            mejor. Con más de <span className="img:font-bold">28</span> años de
            experiencia en industrias relacionadas con la electrónica,
            automóviles, energías renovables y tránsito ferroviario, BYD ha
            establecido más de <span className="img:font-bold">30</span> parques
            industriales en <span className="img:font-bold">6</span>{" "}
            continentes. Centrándose en la adquisición, el almacenamiento y la
            aplicación de energía, BYD ofrece nuevas soluciones integrales de
            energía con cero emisiones
          </>
        }
        imageDesktop={aboutImg}
      />

      <BgImageWithText
        title="Auto"
        description="BYD Batería Blade y la tecnología de energía híbrida de modo dual ha sido un revolucionario en la industria, acelerando aún más la transición de los vehículos a gasolina a los vehículos eléctricos"
        imageDesktop={autoDesktop}
        imageMobile={autoMobile}
        className="img:text-white"
        small
      />

      <BgImageWithText
        title="Batería Blade"
        imageDesktop={bladeDesktop}
        imageMobile={bladeMobile}
        className="img:text-white img:h-[75vw] xl:h-[70vw] 2xl:h-[62.5vw] 2.5xl:h-[57.5vw] 3xl:h-[53vw]"
        descriptionComponent={
          <div className="text-sm flex flex-col gap-20 img:gap-12 max-img:mt-8 w-[90%] img:w-[50%] img:mr-[55%] 2xl:mt-3">
            <div className="flex flex-col gap-3 pl-5 border-l-2 border-black img:border-white">
              <h4 className="text-[4.722222vw] img:text-2xl font-semibold">
                Ultra Seguridad
              </h4>
              <p className="max-img:text-[3.333333vw] leading-[1.375]">
                La Batería Blade es la única que aprobó en la Penetración de
                Aguja
              </p>
            </div>

            <div className="flex flex-col gap-3 pl-5 border-l-2 border-black img:border-white">
              <h4 className="text-[4.722222vw] img:text-2xl font-semibold">
                Súper Fuerte
              </h4>
              <p className="max-img:text-[3.333333vw] leading-[1.375]">
                La resistencia a la compresión puede alcanzar hasta 46 toneladas
              </p>
            </div>

            <div className="flex flex-col gap-3 pl-5 border-l-2 border-black img:border-white">
              <h4 className="text-[4.722222vw] img:text-2xl font-semibold">
                Autonomía Potente
              </h4>
              <p className="max-img:text-[3.333333vw] leading-[1.375]">
                La Batería Blade otorga a BYD HAN EV una autonomía hasta 602 km
              </p>
            </div>

            <div className="flex flex-col gap-3 pl-5 border-l-2 border-black img:border-white">
              <h4 className="text-[4.722222vw] img:text-2xl font-semibold">
                Alta Capacidad de Carga
              </h4>
              <p className="max-img:text-[3.333333vw] leading-[1.375]">
                Solo se necesita media hora para cargar la batería del 30% al
                80%, con una potencia máxima de descarga instantánea
              </p>
            </div>
          </div>
        }
      />

      <BgImageWithText
        title="DM-i Consumo de Combustible Ultra Bajo"
        imageDesktop={dmDesktop}
        imageMobile={dmMobile}
        className="img:text-white img:h-[75vw] xl:h-[70vw] 2xl:h-[65vw] 2.5xl:h-[57.5vw] 3xl:h-[53vw] text-center"
        descriptionComponent={
          <div className="flex flex-col max-img:gap-8 mt-4 w-full justify-between items-center text-sm img:flex-row img:mt-[40vw] 2.5xl:mt-[35vw] 3xl:mt-[30vw]">
            <div className="flex flex-col gap-5 img:px-[5.208333vw] 4xl:px-[10vw] img:border-r-2 img:border-white">
              <h4 className="text-[4.722222vw] img:text-2xl font-bold">
                3.8 L
              </h4>
              <p className="max-img:text-[3.333333vw] leading-[22px]">
                Consumo de combustible a bajo SOC
              </p>
            </div>
            <div className="flex flex-col gap-5 img:px-[5.208333vw] 4xl:px-[10vw] img:border-r-2 img:border-white">
              <h4 className="text-[4.722222vw] img:text-2xl font-bold">
                43.04 %
              </h4>
              <p className="max-img:text-[3.333333vw] leading-[22px]">
                Eficiencia térmica líder en el mundo
              </p>
            </div>
            <div className="flex flex-col gap-5 img:px-[5.208333vw] 4xl:px-[10vw]">
              <h4 className="text-[4.722222vw] img:text-2xl font-bold">
                1245 km
              </h4>
              <p className="max-img:text-[3.333333vw] leading-[22px]">
                Alcance súper largo
              </p>
            </div>
          </div>
        }
      />

      <BgImageWithText
        title="DM-p Energía Potente y Dinámica"
        description={
          <>
            Aceleración de 0 a 100 km/h en <strong>4.3</strong> segundos
          </>
        }
        imageDesktop={dmpImg}
        imageMobile={dmpImgMobile}
      />

      <BgImageWithText
        title={
          <>
            Plataforma <br className="img:hidden" /> Electrónica 3.0
          </>
        }
        imageDesktop={platformDesktop}
        imageMobile={platformMobile}
        className="img:text-white img:h-[75vw] xl:h-[70vw] 2xl:h-[65vw] 2.5xl:h-[57.5vw] 3xl:h-[53vw] text-center"
        descriptionComponent={
          <div className="text-sm flex flex-col gap-20 img:gap-12 max-img:mt-8 w-[90%] img:w-[50%] img:mr-[55%] 2xl:mt-3 text-left">
            <div className="flex flex-col gap-5 pl-5 border-l-2 border-black img:border-white">
              <h4 className="text-[4.722222vw] img:text-2xl font-semibold">
                Seguridad
              </h4>
              <p className="max-img:text-[3.333333vw] leading-[1.375]">
                La Plataforma Electrónica 3.0 integra Batería Blade ultra segura
                en el chasis, formando una estructura de carrocería EV pura,
                robusta y única
              </p>
            </div>

            <div className="flex flex-col gap-5 pl-5 border-l-2 border-black img:border-white">
              <h4 className="text-[4.722222vw] img:text-2xl font-semibold">
                Eficiencia
              </h4>
              <p className="max-img:text-[3.333333vw] leading-[1.375]">
                Esta nueva plataforma permite un alcance superior a 1000 km a
                través del primer tren motriz eléctrico 8 en 1 del mundo
              </p>
            </div>

            <div className="flex flex-col gap-5 pl-5 border-l-2 border-black img:border-white">
              <h4 className="text-[4.722222vw] img:text-2xl font-semibold">
                Inteligencia
              </h4>
              <p className="max-img:text-[3.333333vw] leading-[1.375]">
                El sistema informático del vehículo supervisa continuamente los
                datos generados para optimizar las condiciones de conducción
              </p>
            </div>

            <div className="flex flex-col gap-5 pl-5 border-l-2 border-black img:border-white">
              <h4 className="text-[4.722222vw] img:text-2xl font-semibold">
                Estética
              </h4>
              <p className="max-img:text-[3.333333vw] leading-[1.375]">
                La carrocería más baja reduce el coeficiente de arrastre a 0.21
                Cd. Los voladizos más cortos y una distancia entre ejes más
                larga amplían significativamente el espacio para los pasajeros
              </p>
            </div>
          </div>
        }
      />

      <BgImageWithText
        title="Sistema de Conexión de Red Inteligente"
        description="Integra perfectamente las funciones del teléfono inteligente en la plataforma del vehículo"
        imageDesktop={sysintImg}
        imageMobile={sysintImgMobile}
        className="text-center img:text-white"
      />

      <BgImageWithText
        title="Seguridad del Vehículo"
        description="Rigurosamente examinado para calidad y seguridad"
        imageDesktop={carsafetyDesktop}
        imageMobile={carsafetyMobile}
        className="text-center img:text-white"
      />

      <BgImageWithText
        title="Hito de Producción"
        description={
          <>
            BYD realizó un hito de <strong>5 millones</strong> de autos de nueva
            energía producidos, lo cual inicia un nuevo capítulo hacia un futuro
            más ecológico y sostenible.
          </>
        }
        imageDesktop={productionDesktop}
        imageMobile={productionMobile}
      />

      <BgImageWithText
        title="Reducción de Contaminación y Emisiones"
        description={
          <>
            Hasta el 11 de octubre de 2022, BYD ha reducido{" "}
            <strong>14,672,117,797</strong> kgs de emisiones de carbono. Así es
            nuestro compromiso de protección con el Planeta
          </>
        }
        imageDesktop={pollutionDesktop}
        imageMobile={pollutionMobile}
        className="text-center img:text-white"
      />
    </main>
  );
}
