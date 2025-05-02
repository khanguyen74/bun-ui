import { docsConfig } from "@/config/docs"
import { DocsNav } from "@/components/docs-nav"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="block w-full grow lg:flex">
      <DocsNav config={docsConfig} />
      {children}
    </div>
  )
}
