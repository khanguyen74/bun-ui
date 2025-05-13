import { docsConfig } from "@/config/docs"
import { DocsNav } from "@/components/docs-nav"
import { Footer } from "@/components/footer"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="block w-full grow lg:flex">
      <DocsNav config={docsConfig} />
      <div className="flex w-full flex-col">
        {children}
        <Footer />
      </div>
    </div>
  )
}
