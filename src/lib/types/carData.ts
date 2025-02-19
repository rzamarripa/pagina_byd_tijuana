import { StaticImageData } from "next/image";

type Image = StaticImageData;
type ImagePosition = "left" | "right";

type CollapseData = {
    title: string;
    imagePosition: ImagePosition;
} & (
        | {
            imageDesktop: Image | false;
            imageMobile: Image | false;
            video?: never;
        }
        | {
            imageDesktop?: never;
            imageMobile?: never;
            video: string;
        }
    ) & (
        | {
            description?: never
            descriptions: string[];
        } | {
            description: string
            descriptions?: never
        }
    );

export type SectionCarPage = {
    title: string;
    description: string;
    imageDesktop: Image;
    imageMobile: Image | false;
    textBlack?: boolean;
    buttonColor?: "white" | "black";
    smallText?: string;
    quoteForm?: boolean;
} & (
        | {
            buttons: true;
            buttonsText: { text: string; link: string }[];
            collapse?: false;
            collapseData?: never;
            flex?: false;
            flexData?: never;
        }
        | {
            buttons: false;
            buttonsText?: never;
            collapse: true;
            collapseData: CollapseData[];
            flex?: false;
            flexData?: never;
        }
        | {
            buttons: false;
            buttonsText?: never;
            collapse: false;
            collapseData?: never;
            flex?: false;
            flexData?: never;
        } | {
            buttons?: false;
            buttonsText?: never;
            collapse?: false;
            collapseData?: never;
            flex: true;
            flexData: { title: string; description: string[], video: string, mediaPosition: ImagePosition };
        }
    );

export type BackgroundVideoSection = {
    video: string;
    videoMobile?: string;
    title: string;
    description: string;
} & (
        | {
            buttons: true;
            buttonsText: { text: string; link: string }[];
            smallText?: false;
            smallTextDescription?: never;
        }
        | {
            buttons: false;
            buttonsText?: never;
            smallText?: false;
            smallTextDescription?: never;
        } | {
            smallText: true;
            smallTextDescription: string;
            buttons?: false;
            buttonsText?: never;
        }
    );

export type PerformanceSection = {
    list: { title: string; titleNumbers?: number; description: string }[];
    text: string;
    imageMobile: Image | false;
    imageDesktop: Image;
    quoteForm?: false;
    title?: string;
} | {
    list: { title: string; titleNumbers?: number; description: string }[];
    text: string;
    imageMobile: Image | false;
    imageDesktop: Image;
    quoteForm: true;
    title: string;
};


export type TechnicalData = {
    techImageMobile: StaticImageData | false;
    techImageDesktop: StaticImageData;
    buttonUrl: string;
    buttonColor?: "white" | "black";
    textBlack?: boolean;
    title?:string;
};

export type CarData = {
    id: string;
    title: string;
    metadata: {
        title: string;
        description: string;
    };
    backgroundVideoSection: BackgroundVideoSection | false;
    preSection?: SectionCarPage | false;
    performanceSection: PerformanceSection;
    sections: SectionCarPage[];
    technicalData: TechnicalData;
};
