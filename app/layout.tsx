import type { Viewport, Metadata } from "next"
import { NextUIProvider } from "@nextui-org/react"
import { Inter } from "next/font/google"

import StyledJsxRegistry from "./registry"

import "./globals.css"

import Footer from "@components/Footer"
import Header from "@components/Header"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"]
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/icon.png" />
      </head>
      <body suppressHydrationWarning={true}>
        <NextUIProvider>
          <StyledJsxRegistry>
            <Header />
            {children}
            <Footer />
          </StyledJsxRegistry>
        </NextUIProvider>
      </body>
    </html>
  )
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false
}
export const metadata: Metadata = {
  title: "CREAMODA",
  description:
    "Introducing CREAMODA, an unprecedented clothing generative engine. At CREAMODA, we offer an intelligent fashion platform designed to bring your creative ambitions to life. With our state-of-the-art generative clothing engine, CREAMODA transforms your vision into top-selling fashion, seamlessly and efficiently. Whether you’re shaping trends or creating unique designs, CREAMODA empowers you to bring your ideas to market with ease.",
  keywords: [
    "AI",
    "fashion",
    "creation",
    "Generative",
    "clothing",
    "engine",
    "AI-driven",
    "fashion",
    "platform",
    "Fashion",
    "design",
    "automation",
    "Seamless",
    "fashion",
    "design",
    "Top-selling",
    "fashion",
    "designs",
    "AI",
    "fashion",
    "technology",
    "Intelligent",
    "fashion",
    "design",
    "Creative",
    "fashion",
    "platform",
    "Automated",
    "garment",
    "creation"
  ]
}
