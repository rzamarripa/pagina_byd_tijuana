import React, { Fragment } from "react";
import DropdownClient from "./FooterSectionDropdown";
import { electricVehicles, hybridVehicles } from "@/lib";
import Link from "next/link";

const Dropdown = ({
  children,
  className,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title: string;
}) => (
  <DropdownClient title={title} className={className} component={children} />
);

const FooterNavigation = () => {
  const cars = electricVehicles.concat(hybridVehicles);
  const termsLinks = [
    // { title: "Política de Privacidad", link: "" },
    // { title: "Política de Cookies", link: "" },
    // { title: "Términos de Uso", link: "" },
    { title: "Términos y Condiciones", link: "" },
    // { title: "Datos Privacidad", link: "" },
  ];

  return (
    <div
      className={`
            flex 
            flex-col 
            gap-3
            font-bold 
            leading-6 
            tracking-[-0.32px]
            
            img:flex-row 
            img:justify-between
            img:gap-8
            img:px-3
        `}
    >
      <Dropdown title="Modelos">
        <div className="flex flex-col gap-2">
          {cars.map((car, i) => (
            <Fragment key={i}>
              <Link href={car.link || "#"} className="img:font-bold img:text-sm">
                {car.carName.split(" ")[0] === "BYD"
                  ? car.carName
                  : `BYD ${car.carName.split(" ")[0]}`}
              </Link>
            </Fragment>
          ))}
        </div>
      </Dropdown>

      <div className="img:flex img:flex-col img:gap-[22px]">
        <Dropdown title="Acerca de BYD" className="mb-2">
          <div className="flex flex-col gap-2">
            <Link href="/about-byd">Acerca de BYD</Link>
            {/* <Link href="#">Noticias</Link> */}
            <Link href="/contact-us">Contáctanos</Link>
          </div>
        </Dropdown>

        <Dropdown title="Términos" className="hidden img:flex">
          <div className="flex flex-col gap-2">
            {termsLinks.map((term, i) => (
              <Fragment key={i}>
                <Link href={term.link || "#"}>{term.title}</Link>
              </Fragment>
            ))}
          </div>
        </Dropdown>
      </div>

      <Dropdown title="Términos" className="img:hidden">
        <div className="flex flex-col gap-2">
          {termsLinks.map((term, i) => (
            <Fragment key={i}>
              <Link href={term.link || "#"}>{term.title}</Link>
            </Fragment>
          ))}
        </div>
      </Dropdown>

      <Link
        className="hover:underline text-sm font-medium tracking-[-0.24px] leading-4 img:font-bold img:text-sm"
        href="/eventos"
      >
        Eventos
      </Link>
    </div>
  );
};

export default FooterNavigation;
