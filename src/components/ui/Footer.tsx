import React from "react";
import FooterNavigation from "./FooterNavigation";
import facebookIcon from "@/assets/images/public-icon/social-media/facebook.svg";
import instagramIcon from "@/assets/images/public-icon/social-media/ins.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className={`
      bg-[#252728]
      text-white
      leading-snug
      px-8
      py-6

      md:px-20
      md:pt-14

      lg:pt-[4.5rem]

      img:px-24
      img:py-[4.5rem]
    `}
    >
      <div className="flex flex-col gap-8 pt-6">
        <FooterNavigation />

        <div
          className={`
            img:flex
            img:flex-row
            img:justify-between
          `}
        >
          <p
            className={`
              text-center 
              p-2 
              pb-12 
              text-xs 
              tracking-[-0.16px] 

              md:pb-[7rem] 
              lg:pb-32 

              img:pb-0
              img:p-0
              img:pt-10
            `}
          >
            ©Todos los derechos reservados por BYD Premier Tijuana.
          </p>

          <div
            className={`
              flex 
              flex-col 
              gap-3 
              justify-center 
              items-center

              img:flex-row
              img:items-end
            `}
          >
            <span className="font-medium text-xs">Síganos</span>

            <div className="flex items-center justify-center gap-5 ml-1 m-0 p-0">
              <Link href="https://www.facebook.com/bydpremiertijuana" target="_blank">
                <Image
                  src={facebookIcon}
                  alt="facebook icon"
                  width={21}
                  height={21}
                  className="hover:opacity-100 opacity-40"
                />
              </Link>
              {/* <Link href="#">
                <Image
                  src={twitterIcon}
                  alt="twitter icon"
                  width={21}
                  height={21}
                  className="hover:opacity-100 opacity-40"
                />
              </Link> */}
              <Link href="https://www.instagram.com/byd.tijuana/" target="_blank">
                <Image
                  src={instagramIcon}
                  alt="instagram icon"
                  width={21}
                  height={21}
                  className="hover:opacity-100 opacity-40"
                />
              </Link>
              {/* <Link href="#">
                <Image
                  src={youtubeIcon}
                  alt="youtube icon"
                  width={21}
                  height={21}
                  className="hover:opacity-100 opacity-40"
                />
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
