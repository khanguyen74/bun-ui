import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import { codeImport } from "remark-code-import"
import remarkGfm from "remark-gfm"
import { visit } from "unist-util-visit"
import { defineCollection, defineConfig, s } from "velite"

import { siteConfig } from "@/config/site"

const cwd = process.cwd()

const slugify = (str: string) => {
  return str
    .toLowerCase()
    .replace(/.*\/content\//, "")
    .replace(/\.mdx$/, "")
    .replace(/\/index/, "")
}

const docs = defineCollection({
  name: "Docs", // collection type name
  pattern: "docs/**/*.mdx",
  schema: s
    .object({
      title: s.string(),
      description: s.string(),
      metadata: s.metadata(),
      content: s.markdown(),
      code: s.mdx(),
      toc: s.toc(),
      links: s
        .object({
          source: s.string().optional(),
          docs: s.string().optional(),
        })
        .optional(),
    })
    .transform((data, { meta }) => {
      const links = data.links || {}
      const componentLink = links.source
        ? `${links.source}/${links.source.split("/")[1]}.tsx`
        : ""
      return {
        ...data,
        slug: slugify(meta.path),
        links: {
          ...links,
          source: links.source
            ? `${siteConfig.links.github}/tree/${siteConfig.branch}/packages/react/src/${componentLink}`
            : undefined,
        },
        category: meta.path
          .replace(/.*\/content\//, "")
          .replace(/\/[^/]*$/, "")
          .replace(cwd, ""),
      }
    }),
})

export default defineConfig({
  root: "src/content",
  output: {
    data: "./src/.velite",
  },
  collections: {
    docs,
  },
  mdx: {
    remarkPlugins: [codeImport, remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "pre") {
            const [codeEl] = node.children
            if (codeEl.tagName !== "code") {
              return
            }

            if (codeEl.data?.meta) {
              // Extract event from meta and pass it down the tree.
              const regex = /event="([^"]*)"/
              const match = codeEl.data?.meta.match(regex)
              if (match) {
                node.__event__ = match ? match[1] : null
                codeEl.data.meta = codeEl.data.meta.replace(regex, "")
              }
            }

            node.__rawString__ = codeEl.children?.[0].value
            node.__src__ = node.properties?.__src__
            node.__style__ = node.properties?.__style__
          }
        })
      },
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["subheading-anchor"],
          },
        },
      ],
      [rehypePrettyCode, { theme: "dark-plus" }],
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "figure") {
            if (!("data-rehype-pretty-code-figure" in node.properties)) {
              return
            }

            const preElement = node.children.at(-1)
            if (preElement.tagName !== "pre") {
              return
            }

            preElement.properties["__withMeta__"] =
              node.children.at(0).tagName === "div"
            preElement.properties["__rawString__"] = node.__rawString__
          }
        })
      },
    ],
  },
})
