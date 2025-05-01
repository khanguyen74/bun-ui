import { docsConfig } from "@/config/docs"
import { DocsNav } from "@/components/docs-nav"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex w-full">
      <DocsNav config={docsConfig} />
      <div className="flex grow flex-col">{children}</div>
    </div>
  )
}
