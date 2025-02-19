"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoCloseCircleOutline } from "react-icons/io5";

// Images
import mobileVersion from "@/assets/images/home-page/TEF-mob.jpg";
import desktopVersion from "@/assets/images/home-page/TEF-pc.jpg";
import playButton from "@/assets/images/icon-play-round.svg";
import { ResponsiveImage } from "../ResponsiveImage";

const PopUpVideo = () => {
  const [isOpen, setOpen] = useState(false);
  const urlVideo = "/videos/TEF.mp4";

  return (
    <>
      {/* Image with button */}
      <div
        className="flex flex-col relative gap-3 w-full justify-between items-center py-14 h-[27.5rem] sm:h-[40rem] md:h-[52rem] img:h-[22.5rem] 2xl:h-[27.5rem] 3xl:h-[30rem] 4xl:h-[55rem]"
      >
        <ResponsiveImage
          image={desktopVersion}
          imageMobile={mobileVersion}
          placeholder="blur"
          alt={"TEF video"}
          fill
          quality={60}
          style={{
            objectFit: "cover",
            zIndex: -1,
          }}
          priority
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

      {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-[1000] bg-black bg-opacity-75">
          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5"
          >
            <IoCloseCircleOutline className="w-10 h-10 text-white" />
          </button>

          {/* Video Container */}
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
    </>
  );
};

export { PopUpVideo };
