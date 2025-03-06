import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "GCT Group - Building a Legacy of Excellence & Innovation Across Africa",
  description:
    "GCT Group is a Nigerian conglomerate with a strong presence in various sectors, including telecommunications, energy, power, construction, education, and travel.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  )
}



import './globals.css'