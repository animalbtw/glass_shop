import React, {useEffect} from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import Header from "../widgets/header/header";
import Footer from "../widgets/footer/ui/footer";
import "react-datepicker/dist/react-datepicker.css";

import "./globals.scss";
import { AppWrapper, useAppContext } from "../context";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "default title",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="ru">
      <body className={montserrat.className}>
        <AppWrapper>
          <Header />
          <main className={"main"}>{children}</main>
          <Footer />
        </AppWrapper>
      </body>
    </html>
  );
}
