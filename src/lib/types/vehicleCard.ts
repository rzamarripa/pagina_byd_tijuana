import { StaticImageData } from "next/image";

export interface Vehicle {
    carPicturePath: string | StaticImageData;
    carName: string;
    text: string;
    link: string;
}