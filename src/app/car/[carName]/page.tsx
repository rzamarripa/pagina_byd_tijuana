import React from "react";
import {
  CarSection,
  PerformanceSection,
  TechnicalFile,
  VideoBg,
} from "@/components";
import { CarData, carsData } from "@/lib";
import { notFound } from "next/navigation";

export async function generateMetadata({ params: { carName } }: CarPageProps) {
  const car = carsData.find((car) => car.id === carName) as CarData;

  if (!car)
    return {
      title: "BYD",
      description: "BYD",
    };

  return {
    title: car.metadata.title,
    description: car.metadata.description,
  };
}

interface CarPageProps {
  params: {
    carName: string;
  };
}

const CarPage = ({ params: { carName } }: CarPageProps) => {
  const car = carsData.find((car) => car.id === carName) as CarData;

  if (!car) return notFound();

  return (
    <main>
      {car?.backgroundVideoSection && (
        <VideoBg
          carInfo={car.backgroundVideoSection}
          name={car.backgroundVideoSection.title || car.title}
        />
      )}

      {car?.preSection && <CarSection carInfo={car.preSection} />}

      <PerformanceSection carInfo={car.performanceSection} />

      {car.sections.map((section, index) => (
        <CarSection key={index} carInfo={section} />
      ))}

      <TechnicalFile carInfo={car.technicalData} title={car.title} />
    </main>
  );
};

export default CarPage;
