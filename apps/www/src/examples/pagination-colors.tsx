import { Pagination } from "@bun-ui/react"

export const PaginationColors = () => {
  return (
    <div className="flex flex-col gap-4">
      <Pagination count={10} color="neutral" />
      <Pagination count={10} color="primary" />
      <Pagination count={10} color="secondary" />
    </div>
  )
}
