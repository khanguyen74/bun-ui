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
  const page = docs.find((doc) => doc.slug === ["docs", ...slug].join("/"))
  if (!page) {
    return (
      <div className="flex h-full items-center justify-center">
        <h1 className="text-3xl font-bold">404 - Not Found</h1>
      </div>
    )
  }
  return (
    <div className="flex w-full">
      <div className="flex w-full flex-col">
        <h1>{page.title}</h1>
        <MDXContent code={page.code} />
      </div>
      <Toc items={flattenToc(page.toc)} />
    </div>
  )
}
