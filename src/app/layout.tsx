import type { Metadata } from "next"
import "./globals.css"
import { Navigation } from "./navigation"
import { Footer } from "@/components/Footer"
import { MarketTicker } from "@/platform/market-ticker"

export const metadata: Metadata = {
  title: "Iris Worlds",
  description:
    "Iris Worlds — E16連星系の人類史と世界観を辿る百科プロジェクト",
  icons: { icon: "/favicon.ico" },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" suppressHydrationWarning className="dark">
      <body className="antialiased flex min-h-screen flex-col bg-background text-foreground">
        <MarketTicker />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
