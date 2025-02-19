"use client";
import React from "react";
import CountUpComp from "react-countup";

interface CountUpProps {
  end: number;
  className?: string;
  start: number;
  duration: number;
  separator?: string;
  [key: string]: unknown;
}

const getDecimalPlaces = (num: number) => {
  const numStr = num.toString();
  if (numStr.includes(".")) {
    return numStr.split(".")[1].length;
  }
  return 0;
};

const CountUp = ({
  end,
  start,
  duration,
  separator,
  ...props
}: CountUpProps) => {
  const decimalPlaces = getDecimalPlaces(end);

  return (
    <CountUpComp
      end={end}
      start={start}
      duration={duration}
      separator={separator}
      decimals={decimalPlaces}
      {...props}
    />
  );
};

export { CountUp };
