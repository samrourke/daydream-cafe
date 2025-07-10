"use client";
import "./globals.css";
import { useEffect, useState } from "react";

import { Fraunces, Roboto, Work_Sans } from "next/font/google";
import Sidebar from "../../components/Nav/Sidebar";
import MobileNav from "../../components/Nav/MobileNav";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "700"], // Choose which weights you want
  variable: "--fraunces", // Optional: for CSS variables
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--roboto",
});

const work_sans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--work_sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${work_sans.variable}`}>
      <body className="layout">
        <div className="layoutWrapper">
          <Sidebar />
          <MobileNav />
          <main className="mainContent">{children}</main>
        </div>
      </body>
    </html>
  );
}
