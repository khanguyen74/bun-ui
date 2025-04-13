import type { Metadata } from "next"

import "@bun-ui/react/index.css"
import "./globals.css"

import { ThemeProvider } from "@bun-ui/react"

import { SiteHader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Bun-UI | Accessible and Customizable UI Components",
  description:
    "Build beautiful, accessible, and reusable components effortlessly.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system">
          <div className="mx-auto flex max-w-[1800px] flex-col px-4">
            <SiteHader />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
