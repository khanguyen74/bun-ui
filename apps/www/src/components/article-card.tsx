import NextLink from "next/link"
import { Button, Link } from "@bun-ui/react"
import { ChevronRight } from "lucide-react"

interface ArticleCardProps {
  title: string
  description: string
  href: string
}
export const ArticleCard = ({ title, description, href }: ArticleCardProps) => {
  return (
    <div className="border-b pb-8">
      <Link
        asChild
        className="text-foreground text-lg font-medium"
        underline="hover"
      >
        <NextLink href={href}>{title}</NextLink>
      </Link>
      <p className="text-foreground/70 mt-2 text-base">{description}</p>
      <div className="mt-4 flex flex-row-reverse">
        <Button
          asChild
          className="text-sm font-medium"
          size="sm"
          variant="text"
        >
          <NextLink href={href} className="flex items-center gap-1">
            Read more <ChevronRight className="h-4 w-4" />
          </NextLink>
        </Button>
      </div>
    </div>
  )
}
