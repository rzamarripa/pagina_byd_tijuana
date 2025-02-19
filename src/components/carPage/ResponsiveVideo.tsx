"use client";
import { useWindowSize } from "@/hooks";
import React from "react";
import { cn } from "@/lib";

interface ResponsiveVideoProps extends React.HTMLAttributes<HTMLVideoElement> {
  video: string;
  videoMobile?: string;
  className?: string;
}

const ResponsiveVideo = ({
  video,
  videoMobile,
  className,
}: ResponsiveVideoProps) => {
  const windowSize = useWindowSize();
  const isMobile = windowSize?.width ? windowSize.width <= 992 : false;

  const videoToDisplay = isMobile && videoMobile ? videoMobile : video;

  return (
    <video autoPlay loop muted playsInline className={cn("w-full", className)}>
      <source type="video/mp4" src={videoToDisplay} />
    </video>
  );
};

export { ResponsiveVideo };
