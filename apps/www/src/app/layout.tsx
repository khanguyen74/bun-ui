import type { Metadata } from "next"

import "./globals.css"

// import "@bun-ui/react/index.css"

import { headers } from "next/headers"
import { Alert, AlertTitle, cx, ThemeProvider } from "@bun-ui/react"
import { Toaster } from "@bun-ui/react/toast"

import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Bun UI | Accessible and Customizable UI Components",
  description:
    "Build beautiful, accessible, and reusable React components effortlessly.",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const headerList = await headers()
  const ua = headerList.get("user-agent")?.toLowerCase() || ""
  let osClass = ""
  if (ua.includes("mac")) {
    osClass = "os-macos"
  } else if (ua.includes("linux")) {
    osClass = "os-linux"
  } else if (ua.includes("windows")) {
    osClass = "os-windows"
  }
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx("scroll-smooth", osClass)}
    >
      <body className="min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system">
          <div className="bg-background relative flex min-h-svh flex-col">
            {children}
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
