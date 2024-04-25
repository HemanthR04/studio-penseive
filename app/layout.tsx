import type { Metadata } from "next";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";




export const metadata: Metadata = {
  title: "Studio Pensieve | Interior Firm ",
  description: "Interior Firm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=gambarino@400&f[]=switzer@300,301,400,401,500,501,600,601,700,701,800,801,900,901,1&display=swap" rel="stylesheet"></link>
      </head>
      <body>
      <SmoothScrolling>
       {children}
       </SmoothScrolling>
       </body>
    </html>
  );
}
