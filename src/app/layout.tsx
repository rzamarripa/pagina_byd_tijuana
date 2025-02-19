import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { Footer, Header, WhatsAppButton } from "@/components";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Autos eléctricos, sedan y SUV | BYD GRUPO PREMIER",
  description: "Autos electricos, sedan y SUV | BYD GRUPO PREMIER",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N3NZCG9R');
          `}
        </Script>
      </head>
      <body className={`${montserrat.variable} antialiased relative`}>
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-N3NZCG9R"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        
        <Header />
        <div className="pt-16 min-h-[calc(41.35vh)]">{children}</div>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
