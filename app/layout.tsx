import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
// @ts-expect-error CSS import
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  // cspell: disable-next-line
  title: "Inzira Technology Solutions Ltd - Enterprise IT Solutions",
  description:
    "Technology that moves you forward. Enterprise-grade IT consulting, software development, and digital solutions for businesses, startups, and institutions.",
  // cspell: disable-next-line
  generator: "Inzira Tech",
  icons: {
    icon: [
      {
        url: "/logo2.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo2.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logo2.png",
        type: "image/png",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={geist.className}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
