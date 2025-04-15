import { docsConfig } from "docs.config"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import { codeImport } from "remark-code-import"
import remarkDirective from "remark-directive"
import remarkGfm from "remark-gfm"
import { visit } from "unist-util-visit"
import { defineCollection, defineConfig, s } from "velite"

const cwd = process.cwd()

const slugify = (str: string) => {
  return str
    .replace(/.*\/content\//, "")
    .replace(/\.mdx$/, "")
    .replace(cwd, "")
}

const docs = defineCollection({
  name: "Docs", // collection type name
  pattern: "src/content/docs/**/*.mdx", // content files glob pattern
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
        })
        .optional(),
    })
    .transform((data, { meta }) => {
      const links = data.links || {}
      return {
        ...data,
        slug: slugify(meta.path),
        links: {
          ...links,
          source: links.source
            ? `${docsConfig.repoUrl}/tree/${docsConfig.repoBranch}/packages/react/src/${links.source}`
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
  root: cwd,
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
      [
        rehypePrettyCode,
        {
          theme: "github-dark-default",
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }]
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted")
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"]
          },
        },
      ],
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

            if (node.__src__) {
              preElement.properties["__src__"] = node.__src__
            }

            if (node.__event__) {
              preElement.properties["__event__"] = node.__event__
            }

            if (node.__style__) {
              preElement.properties["__style__"] = node.__style__
            }
          }
        })
      },
    ],
  },
})
