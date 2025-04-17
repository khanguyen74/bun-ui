import type { Metadata } from "next"

import "@bun-ui/react/index.css"
import "./globals.css"

import { ThemeProvider } from "@bun-ui/react"

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
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="bg-background min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system">
          <div className="bg-background relative flex min-h-svh flex-col">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
