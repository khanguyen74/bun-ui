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
    <div className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="flex w-full flex-col">
        <h1 className="mb-5 text-2xl font-bold">{page.title}</h1>
        <MDXContent code={page.code} />
      </div>
      <Toc items={flattenToc(page.toc)} />
    </div>
  )
}
