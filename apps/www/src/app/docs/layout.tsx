import { SiteHeader } from "@/components/site-header"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <main className="flex flex-col">{children}</main>
    </div>
  )
}
