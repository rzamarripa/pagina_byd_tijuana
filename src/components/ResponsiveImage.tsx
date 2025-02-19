/* eslint-disable jsx-a11y/alt-text */
"use client";
import { useWindowSize } from "@/hooks";
import Image, { ImageProps, StaticImageData } from "next/image";
import React from "react";

interface Props extends Omit<ImageProps, "src"> {
  image: StaticImageData;
  imageMobile?: StaticImageData | false;
}

/**
 * @param {Props} props
 * @returns Image
 */
export const ResponsiveImage = ({ image, imageMobile, ...props }: Props) => {
  const windowSize = useWindowSize();
  const isMobile = windowSize?.width ? windowSize.width <= 992 : false;
  const imageToDisplay = isMobile && imageMobile ? imageMobile : image;

  return <Image src={imageToDisplay} {...props} />;
};
