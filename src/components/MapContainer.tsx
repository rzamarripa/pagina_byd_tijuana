"use client";
import React, { useState } from "react";
import Image from "next/image";
import locationImg from "@/assets/images/new-location.png";
import playButton from "@/assets/images/icon-play-round.svg";
import { IoCloseCircleOutline } from "react-icons/io5";

interface MapContainerProps {
  disableVideo?: boolean;
}

export const MapContainer = ({ disableVideo = true }: MapContainerProps) => {
  const [isOpen, setOpen] = useState(false);
  const urlVideo = "/videos/location.mp4";

  return (
    <React.Fragment>
      <section className="relative h-[600px] w-full">
        {/* Video */}
        {!disableVideo && (
          <div className="relative w-[100%] h-[50%] lg:w-[25%] left-0 lg:h-full">
            <div className="relative w-full h-full">
              <Image
                src={locationImg}
                placeholder="blur"
                alt={"TEF video"}
                className="block w-[100%] h-[100%] object-cover"
                sizes="100vw"
                quality={75}
              />

              <button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[4.5rem] h-[4.5rem] bg-primary flex items-center justify-center rounded-full cursor-pointer z-10"
                onClick={() => setOpen(true)}
              >
                <Image
                  src={playButton}
                  alt="play button"
                  className="w-[2.5rem] h-[2.5rem]"
                  fill
                  priority
                />
              </button>
            </div>
          </div>
        )}

        {/* Google Map */}
        <div
          className={`
            absolute 
            right-0 
            

            ${
              !disableVideo
                ? `
                w-[100%]
                lg:top-0 
                h-[50%]
                lg:h-full
                max-lg:bottom-0
                lg:w-[75%]
              `
                : `
                w-[100%]
                top-0
                h-full
              `
            }
          `}
        >
          <div className="w-full h-full">
       
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d695.8377436376278!2d-117.0108280159362!3d32.52053581112668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d949004c54cdeb%3A0x98c27289b07dca74!2sBYD%20Tijuana!5e1!3m2!1ses-419!2smx!4v1739939036319!5m2!1ses-419!2smx"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {isOpen && !disableVideo && (
        <div className="fixed inset-0 flex items-center justify-center z-[1000] bg-black bg-opacity-75">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5"
          >
            <IoCloseCircleOutline className="w-10 h-10 text-white" />
          </button>
          <div className="relative w-full max-w-[80%] aspect-video bg-black rounded-md shadow-[0px_20px_40px_rgba(0,0,0,0.5)]">
            <video
              autoPlay
              loop
              muted
              controls
              preload="auto"
              className="w-full h-full rounded-md"
            >
              <source src={urlVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
