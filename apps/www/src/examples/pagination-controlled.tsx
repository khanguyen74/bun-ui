"use client"

import { useState } from "react"
import { Pagination } from "@bun-ui/react"

export const PaginationControlled = () => {
  const [page, setPage] = useState(1)

  return (
    <div className="flex flex-col gap-4">
      <div className="text-muted-foreground text-sm">Current page: {page}</div>
      <Pagination count={10} page={page} onChange={setPage} />
    </div>
  )
}
