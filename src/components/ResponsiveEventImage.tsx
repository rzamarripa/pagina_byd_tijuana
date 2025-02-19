/* eslint-disable jsx-a11y/alt-text */
"use client";
import { useWindowSize } from "@/hooks";
import Image, { ImageProps } from "next/image";
import React from "react";

interface Props extends Omit<ImageProps, "src"> {
  image: string;
  imageMobile?: string | false;
  blurDataURL?: string; // Agregar esta propiedad
}

/**
 * @param {Props} props
 * @returns Image
 */
export const ResponsiveEventImage = ({ image, imageMobile, blurDataURL, ...props }: Props) => {
  const windowSize = useWindowSize();
  const isMobile = windowSize?.width ? windowSize.width <= 992 : false;
  const imageToDisplay = isMobile && imageMobile ? imageMobile : image;

  return <Image src={imageToDisplay} blurDataURL={blurDataURL} {...props} />;
};