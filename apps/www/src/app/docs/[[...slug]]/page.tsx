import NextLink from "next/link"
import { docs } from "@/.velite"
import GithubIcon from "@/icons/github-mark-white.svg"
import GithubIconDark from "@/icons/github-mark.svg"
import { Button } from "@bun-ui/react"

import { siteConfig } from "@/config/site"
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
        {doc.links?.source && (
          <Button variant="ghost" asChild className="w-fit" size="sm">
            <NextLink href={doc.links.source} target="_blank">
              <div className="flex items-center gap-2">
                <span className="hidden [html.dark_&]:block">
                  <GithubIcon viewBox="0 0 96 96" />
                </span>
                <span className="hidden [html.light_&]:block">
                  <GithubIconDark viewBox="0 0 96 96" />
                </span>
                Source
              </div>
            </NextLink>
          </Button>
        )}
        {doc.description && (
          <p className="text-muted-foreground mb-5">{doc.description}</p>
        )}
        <MDXContent code={doc.code} />
      </div>
      <Toc items={flattenToc(doc.toc)} />
    </div>
  )
}
