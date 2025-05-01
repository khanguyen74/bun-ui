import { Alert, AlertTitle } from "@bun-ui/react"
import { TriangleAlert } from "lucide-react"

import { docsConfig } from "@/config/docs"
import { DocsNav } from "@/components/docs-nav"
import { SiteHeader } from "@/components/site-header"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex w-full">
      <DocsNav config={docsConfig} />
      <div className="flex grow flex-col">
        <Alert
          variant="warning"
          className="flex h-[var(--header-height)] items-center justify-center rounded-none"
          icon={<TriangleAlert className="mt-0 h-4 w-4 xl:mt-2" />}
        >
          <AlertTitle>
            The library is still in early development. Breaking changes and bugs
            may occur without prior notice. Thanks for your interest in using
            the library!
          </AlertTitle>
        </Alert>
        <SiteHeader />
        {children}
      </div>
    </div>
  )
}
