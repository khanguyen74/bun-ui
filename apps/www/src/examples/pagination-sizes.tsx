import { Pagination } from "@bun-ui/react"

export const PaginationSizes = () => {
  return (
    <div className="flex flex-col gap-4">
      <Pagination count={10} size="sm" />
      <Pagination count={10} size="md" />
      <Pagination count={10} size="lg" />
    </div>
  )
}
