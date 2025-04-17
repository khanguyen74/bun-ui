import { docs } from "@/.velite"

import { flattenToc } from "@/lib/flatten-toc"
import { MDXContent } from "@/components/mdx-content"
import { Toc } from "@/components/toc"

interface DocPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function DocPage({ params }: DocPageProps) {
  const { slug } = await params
  const doc = docs.find(
    (doc) => doc.slug === ["docs", ...(slug?.length ? slug : [])].join("/")
  )
  if (!doc) {
    return (
      <div className="flex h-full items-center justify-center">
        <h1 className="text-3xl font-bold">404 - Not Found</h1>
      </div>
    )
  }
  return (
    <div className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto flex w-full max-w-3xl min-w-0 flex-col">
        <h1 className="mb-5 text-3xl font-bold">{doc.title}</h1>
        {doc.description && (
          <p className="text-muted-foreground mb-5">{doc.description}</p>
        )}
        <MDXContent code={doc.code} />
      </div>
      <Toc items={flattenToc(doc.toc)} />
    </div>
  )
}
