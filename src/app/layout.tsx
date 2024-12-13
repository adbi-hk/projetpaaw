import type { Metadata } from "next";
import localFont from "next/font/local";
import {Inter , IBM_Plex_Serif} from "next/font/google";
import "./globals.css";
import { Variable } from "lucide-react";
import React from "react";

const inter = Inter ({subsets:["latin"], variable:'--font-inter'});
const ibm_Plex_Serif = IBM_Plex_Serif({
  subsets:["latin"],
  weight:['400','700'],
  variable:'--font-ibm-plex-serif'
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Waqti",
  description: "Organizing your time is much more easier now !",
  icons:{
    icon:'/icons/logo.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibm_Plex_Serif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
