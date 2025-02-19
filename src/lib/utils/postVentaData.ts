import section1 from "@/assets/images/post-venta/image-01-Mob.png";
import section2 from "@/assets/images/post-venta/image-02-pc.jpg";
import section3 from "@/assets/images/post-venta/image-03-pc.jpg";
import section4 from "@/assets/images/post-venta/image-04-pc.jpg";
import { StaticImageData } from "next/image";

type TPostVenta = {
    img: StaticImageData;
    title: string;
    descriptions: string[];
    buttons?: {
        text: string;
        link: string;
    }[];
};

export const dataPostVenta: TPostVenta[] = [
    {
        img: section1,
        title: "Garantía",
        descriptions: [
            "Una política de garantía integral está en un lugar para usted.",
            "Para obtener más detalles sobre la garantía, por favor comuníquese con el distribuidor local de BYD.",
        ],
    },
    {
        img: section2,
        title: "Mantenimiento / Reparación",
        descriptions: [
            "Un servicio oportuno, accesible y placentero, solo para usted.",
        ],
    },
    {
        img: section3,
        title: "Piezas de Repuesto",
        descriptions: [
            "Las piezas de repuesto genuinas de BYD brindan un suministro eficiente y un precio razonable para sus vehículos de manera profesional.",
        ],
    },
    {
        img: section4,
        title: "Política de Asistencia de Camino",
        descriptions: [
            "La asistencia de camino de BYD es un servicio gratuito que se ofrece a vehículos cubiertos por una garantía limitada básica de vehículo o un acuerdo de servicios extendidos de BYD",
        ],
    },
];