import { Pagination } from "@bun-ui/react"

export const PaginationVariants = () => {
  return (
    <div className="flex flex-col gap-4">
      <Pagination count={10} variant="text" />
      <Pagination count={10} variant="outlined" />
    </div>
  )
}
