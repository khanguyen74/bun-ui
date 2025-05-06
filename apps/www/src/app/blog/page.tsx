import { blogs } from "@/.velite"
import { format, parseISO } from "date-fns"

import { ArticleCard } from "@/components/article-card"

export default async function BlogPage() {
  blogs.sort((a, b) => {
    return parseISO(b.date).getTime() - parseISO(a.date).getTime()
  })
  return (
    <div className="mx-auto max-w-5xl px-6 pt-5 pb-20">
      <p className="mb-5 text-lg font-bold">Posts</p>
      {blogs.map((blog) => (
        <div
          key={blog.slug}
          className="flex w-full grid-cols-6 flex-col gap-y-2 py-4 lg:grid"
        >
          <div className="col-span-2 flex w-full flex-col">
            <p className="text-foreground/70 font-mono text-sm font-medium">
              {format(parseISO(blog.date), "PP")}
            </p>
          </div>
          <div className="col-span-4 flex w-full flex-col">
            <ArticleCard
              key={blog.slug}
              title={blog.title}
              description={blog.description}
              href={blog.slug}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
