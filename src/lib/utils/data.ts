import modelosHan from "@/assets/images/header-product-images/modelos-han.png";
import newTanRedHeader from "@/assets/images/header-product-images/new-tan-red-header.png";
import modelosYuan from "@/assets/images/header-product-images/modelos-yuan.png";
import sealGlacierBlue from "@/assets/images/header-product-images/seal_glacier_blue.png";
// import dolphinHeaderUpdate from "@/assets/images/header-product-images/dolphin-header-update.png";
import smallPic from "@/assets/images/header-product-images/small-pic.png";
import header1 from "@/assets/images/header-product-images/Header1.png";
import azureBlueHeader from "@/assets/images/header-product-images/azure-blue-header.png";
import headerBYDShark from "@/assets/images/header-product-images/Header-BYD-SHARK.png";
import headerSongPro from "@/assets/images/header-product-images/header_song_pro.png";

// Images Home Page
import web_dolphin from "@/assets/images/home-page/byd-dolphin/web_banner_byd_dolphin_grey_homepage.jpg";
import web_dolphinMini from "@/assets/images/home-page/byd-dolphin-mini/web_banner_byd_dolphinmini_homepage.jpg";
import web_han from "@/assets/images/home-page/byd-han/web_banner_byd_han_blue_homepage.jpg";
import web_king from "@/assets/images/home-page/byd-king/web_banner_byd_king_homepage.jpg";
import web_seal from "@/assets/images/home-page/byd-seal/web_banner_byd_seal_blue_homepage.jpg";
import web_shark from "@/assets/images/home-page/byd-shark/web_banner_byd_shark_homepage.jpg";
import web_song_plus_mini from "@/assets/images/home-page/byd-song-plus-dmi/web_banner_byd_songplusdmi_homepage.jpg";
import web_song_pro from "@/assets/images/home-page/byd-song-pro/web_banner_byd_songpro_homepage.jpg";
import web_tang from "@/assets/images/home-page/byd-tang/web_banner_byd_tang_red_homepage.jpg";
import web_yuan_plus from "@/assets/images/home-page/byd-yuan-plus/web_banner_byd_yuan_plus_homepage.jpg";
import mobile_dolphin from "@/assets/images/home-page/byd-dolphin/mobile_banner_byd_dolphin_grey_homepage.jpg";
import mobile_dolphinMini from "@/assets/images/home-page/byd-dolphin-mini/mobile_banner_byd_dolphinmini_homepage.jpg";
import mobile_han from "@/assets/images/home-page/byd-han/mobile_banner_byd_han_blue_homepage.jpg";
import mobile_king from "@/assets/images/home-page/byd-king/mobile_banner_byd_king_homepage.jpg";
import mobile_seal from "@/assets/images/home-page/byd-seal/mobile_banner_byd_seal_blue_homepage.jpg";
import mobile_shark from "@/assets/images/home-page/byd-shark/mobile_banner_byd_shark_homepage.jpg";
import mobile_song_plus_mini from "@/assets/images/home-page/byd-song-plus-dmi/mobile_banner_byd_songplusdmi_homepage.jpg";
import mobile_song_pro from "@/assets/images/home-page/byd-song-pro/mobile_banner_byd_songpro_homepage.jpg";
import mobile_tang from "@/assets/images/home-page/byd-tang/mobile_banner_byd_tang_red_homepage.jpg";
import mobile_yuan_plus from "@/assets/images/home-page/byd-yuan-plus/mobile_banner_byd_yuan_plus_homepage.jpg";
import byd_design from "@/assets/images/home-page/design/byd_design_diseno.jpg";

import type { Vehicle } from "../types";

export const electricVehicles: Vehicle[] = [
    {
        carPicturePath: modelosHan,
        carName: "BYD HAN",
        text: "Conócelo",
        link: "/car/han",
    },
    {
        carPicturePath: newTanRedHeader,
        carName: "BYD TANG",
        text: "Conócelo",
        link: "/car/tang",
    },
    {
        carPicturePath: modelosYuan,
        carName: "YUAN PLUS",
        text: "Conócelo",
        link: "/car/yuan-plus",
    },
    {
        carPicturePath: sealGlacierBlue,
        carName: "BYD SEAL",
        text: "Conócelo",
        link: "/car/seal",
    },
    // {
    //     carPicturePath: dolphinHeaderUpdate,
    //     carName: "BYD DOLPHIN",
    //     text: "Conócelo",
    //     link: "/car/Dolphin",
    // },
    {
        carPicturePath: smallPic,
        carName: "BYD DOLPHIN MINI",
        text: "Conócelo",
        link: "/car/dolphin-mini",
    },
];

export const hybridVehicles: Vehicle[] = [
    {
        carPicturePath: header1,
        carName: "BYD KING DM-i",
        text: "Conócelo",
        link: "/car/king",
    },
    {
        carPicturePath: azureBlueHeader,
        carName: "BYD SONG PLUS DM-i",
        text: "Conócelo",
        link: "/car/song-plus-dmi",
    },
    {
        carPicturePath: headerBYDShark,
        carName: "BYD SHARK",
        text: "Conócelo",
        link: "/car/BYDSHARK",
    },
    {
        carPicturePath: headerSongPro,
        carName: "BYD SONG PRO DM-i",
        text: "Conócelo",
        link: "/car/song-pro-dmi",
    },
];

export const carData = [
    {
        title: "BYD SONG PRO",
        imageMobile: mobile_song_pro,
        imageDesktop: web_song_pro,
        link: "/song-pro-dmi",
    },
    {
        imageMobile: mobile_shark,
        imageDesktop: web_shark,
        link: "/BYDSHARK",
    },
    {
        title: "BYD KING",
        imageMobile: mobile_king,
        imageDesktop: web_king,
        link: "/king",
    },
    {
        title: "BYD DOLPHIN MINI",
        imageMobile: mobile_dolphinMini,
        imageDesktop: web_dolphinMini,
        link: "/dolphin-mini",
    },
    {
        title: "BYD SONG PLUS DM-i",
        imageMobile: mobile_song_plus_mini,
        imageDesktop: web_song_plus_mini,
        link: "/song-plus-dmi",
    },
    {
        title: "BYD SEAL",
        imageMobile: mobile_seal,
        imageDesktop: web_seal,
        link: "/seal",
    },
    {
        title: "BYD HAN",
        imageMobile: mobile_han,
        imageDesktop: web_han,
        link: "/han",
    },
    {
        title: "BYD TANG",
        imageMobile: mobile_tang,
        imageDesktop: web_tang,
        link: "/tang",
    },
    {
        title: "BYD YUAN PLUS",
        imageMobile: mobile_yuan_plus,
        imageDesktop: web_yuan_plus,
        link: "/yuan-plus",
    },
    {
        title: "BYD DOLPHIN",
        imageMobile: mobile_dolphin,
        imageDesktop: web_dolphin,
        link: "/Dolphin",
    },
    {
        imageMobile: byd_design,
        imageDesktop: byd_design,
    },
];