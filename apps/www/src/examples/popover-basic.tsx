"use client"

import React from "react"
import { Button, Popover, PopoverContent, PopoverTrigger } from "@bun-ui/react"

export const PopoverBasic = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Show Info</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p className="text-muted-foreground text-sm">
          This is a simple popover with some helpful text.
        </p>
      </PopoverContent>
    </Popover>
  )
}
