"use client";
import { electricVehicles, hybridVehicles } from "@/lib";
import React, { useState } from "react";
import { IoClose, IoMenuSharp } from "react-icons/io5";
import { VehicleCard } from "./VehicleCard";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModelsOpen, setIsModelsOpen] = useState(false);

  const [isElectricalVehiclesOpen, setIsElectricalVehiclesOpen] =
    useState(true);
  const [isHybridVehiclesOpen, setIsHybridVehiclesOpen] = useState(false);

  const handleModelsLeave = () => {
    setIsModelsOpen(false);
  };

  const handleExit = () => {
    setIsMenuOpen(false);
    setIsModelsOpen(false);
  };

  return (
    <>
      {/* Mobile */}
      <div className="2xl:hidden flex items-end justify-between text-white gap-5">
        <div className="relative w-[1.5rem] h-[1.5rem]">
          <IoMenuSharp
            className={`absolute top-0 left-0 w-full h-full cursor-pointer transform transition-all duration-500 ease-in-out ${
              isMenuOpen
                ? "opacity-0 scale-0 rotate-90"
                : "opacity-100 scale-100 rotate-0"
            }`}
            onClick={() => setIsMenuOpen(true)}
          />
          <IoClose
            className={`absolute top-0 left-0 w-full h-full cursor-pointer transform transition-all duration-500 ease-in-out ${
              isMenuOpen
                ? "opacity-100 scale-100 rotate-0"
                : "opacity-0 scale-0 rotate-90"
            }`}
            onClick={() => setIsMenuOpen(false)}
          />
        </div>

        <div
          className={`absolute 
            h-[calc(100vh-64px)] 
            top-[64px] 
            right-0 
            sm:max-h-[calc(100vh-146px)]
            lg:max-h-[calc(100vh-150px)]
            xl:max-h-[calc(100vh-170px)]
            left-0 
            bg-white 
            flex 
            flex-col 
            px-6
            py-8
            ${isMenuOpen ? "block" : "hidden"} 
            overflow-y-auto
            z-10
          `}
        >
          <div className="flex flex-col mt-2 text-[#252728] font-bold md:text-[20px] leading-snug">
            <Link className="my-3" href="/" onClick={handleExit}>
              Inicio
            </Link>
            <div
              className="my-3 cursor-pointer"
              onMouseEnter={() => setIsModelsOpen(true)}
              onMouseLeave={handleModelsLeave}
            >
              <span>Modelos</span>

              {isModelsOpen && (
                <div
                  className={`
                    mt-10 
                    flex 
                    flex-col 
                    text-sm 
                    md:text-base
                    md:font-semibold
                    leading-[26px]

                    md:flex-row
                    md:w-full
                  `}
                >
                  <div
                    className={`
                        justify-between 
                        pr-2 
                        flex 
                        md:flex-col 
                        md:justify-normal 
                        gap-2 
                        md:w-2/3 
                        xl:w-1/3
                    `}
                  >
                    <div>
                      <span
                        onMouseEnter={() => {
                          setIsElectricalVehiclesOpen(true);
                          setIsHybridVehiclesOpen(false);
                        }}
                        className={`
                        ${isElectricalVehiclesOpen ? "underline mb-3" : ""}
                        text-right
                    `}
                      >
                        Vehículos Eléctricos
                      </span>
                    </div>
                    <div>
                      <span
                        onMouseEnter={() => {
                          setIsElectricalVehiclesOpen(false);
                          setIsHybridVehiclesOpen(true);
                        }}
                        className={`
                        ${isHybridVehiclesOpen ? "underline mb-3" : ""}
                        text-right
                        max-md:ml-[0.9rem]
                    `}
                      >
                        Vehículos Híbridos
                      </span>
                    </div>
                  </div>
                  <div
                    className={`
                        overflow-hidden 
                        transition-all 
                        duration-500
                        ${
                          isElectricalVehiclesOpen || isHybridVehiclesOpen
                            ? "max-h-[60vh] xs:max-h-[45vh]"
                            : "max-h-0"
                        }
                        min-h-[50px]
                        mb-3
                        overflow-y-auto
                        sm:grid

                        md:mt-[-2.2rem]
                        md:w-full
                        lg:justify-between
                        xl:grid-cols-3
                    `}
                  >
                    {isElectricalVehiclesOpen &&
                      electricVehicles.map((vehicle) => (
                        <VehicleCard
                          key={vehicle.link}
                          vehicle={vehicle}
                          handleClose={handleExit}
                        />
                      ))}

                    {isHybridVehiclesOpen &&
                      hybridVehicles.map((vehicle) => (
                        <VehicleCard
                          key={vehicle.link}
                          vehicle={vehicle}
                          handleClose={handleExit}
                        />
                      ))}
                  </div>
                </div>
              )}
            </div>
            <Link className="my-3" href="/eventos" onClick={handleExit}>
              Eventos
            </Link>
            <Link className="my-3" href="/post-venta" onClick={handleExit}>
              Post-venta
            </Link>
            <Link className="my-3" href="/about-byd" onClick={handleExit}>
              Acerca de BYD
            </Link>
            <Link className="my-3" href="/contact-us" onClick={handleExit}>
              Contáctanos
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden 2xl:flex mx-auto gap-6 3xl:gap-10 font-semibold text-white">
        <Link
          href="/"
          onMouseEnter={handleModelsLeave}
          className="cursor-pointer hover:underline"
        >
          Inicio
        </Link>
        <div onMouseEnter={() => setIsModelsOpen(true)}>
          <span className={`${isModelsOpen ? "underline" : ""} cursor-pointer`}>
            Modelos
          </span>

          {isModelsOpen && (
            <div
              className={`
                    flex 
                    leading-[26px]
                    absolute
                    h-[calc(100vh-64px)] 
                    top-[64px] 
                    right-0 
                    left-0 
                    overflow-y-auto
                    bg-white 
                    text-[#252728] 
                    font-bold 
                    text-[20px] 
                    max-h-[calc(100vh-320px)]
                    z-10

                    max-4xl:py-[48px] 
                    max-4xl:px-[64px] 
                    max-4xl:pb-[100px]
                    4xl:py-[64px] 
                    4xl:px-[220px] 
                    4xl:max-h-[50vh]
                    `}
              onMouseLeave={handleModelsLeave}
            >
              <div
                className={`
                        flex 
                        flex-col 
                        max-xs:mr-[100px] 
                        pr-2 
                        justify-normal 
                        w-1/3
                        mt-3
                        gap-6
                    `}
              >
                <div>
                  <span
                    onMouseEnter={() => {
                      setIsElectricalVehiclesOpen(true);
                      setIsHybridVehiclesOpen(false);
                    }}
                    className={`
                        ${isElectricalVehiclesOpen ? "underline mb-3" : ""}
                        text-right
                        cursor-pointer
                    `}
                  >
                    Vehículos Eléctricos
                  </span>
                </div>
                <div>
                  <span
                    onMouseEnter={() => {
                      setIsElectricalVehiclesOpen(false);
                      setIsHybridVehiclesOpen(true);
                    }}
                    className={`
                        ${isHybridVehiclesOpen ? "underline mb-3" : ""}
                        text-right
                        max-md:ml-[0.9rem]
                        cursor-pointer
                    `}
                  >
                    Vehículos Híbridos
                  </span>
                </div>
              </div>
              <div
                className={`
                        transition-all 
                        duration-500
                        mb-3
                        grid
                        grid-cols-3
                        3xl:flex 
                        3xl:flex-wrap
                        w-[80%]
                        3xl:w-full
                        3xl:h-fit
                        3xl:gap-4
                        `}
              >
                {isElectricalVehiclesOpen &&
                  electricVehicles.map((vehicle) => (
                    <VehicleCard
                      key={vehicle.link}
                      vehicle={vehicle}
                      handleClose={handleModelsLeave}
                    />
                  ))}

                {isHybridVehiclesOpen &&
                  hybridVehicles.map((vehicle) => (
                    <VehicleCard
                      key={vehicle.link}
                      vehicle={vehicle}
                      handleClose={handleModelsLeave}
                    />
                  ))}
              </div>
            </div>
          )}
        </div>
        <Link
          href="/eventos"
          onMouseEnter={handleModelsLeave}
          className="cursor-pointer hover:underline"
        >
          Eventos
        </Link>
        <Link
          href="/post-venta"
          onMouseEnter={handleModelsLeave}
          className="cursor-pointer hover:underline"
        >
          Post-venta
        </Link>
        <Link
          href="/about-byd"
          onMouseEnter={handleModelsLeave}
          className="cursor-pointer hover:underline"
        >
          Acerca de BYD
        </Link>
        <Link
          href="/contact-us"
          onMouseEnter={handleModelsLeave}
          className="cursor-pointer hover:underline"
        >
          Contáctanos
        </Link>
      </div>
    </>
  );
};

export default Navbar;
