import React from "react";
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import Header from "@/widgets/header/header";
import Footer from "@/widgets/footer/ui/footer";
import './globals.scss'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'default title',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
        <Header />
          <main className={'main'}>
            {children}
          </main>
        <Footer />
      </body>
    </html>
  )
}
