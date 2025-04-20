"use client"

import React from "react"
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@bun-ui/react"

export const PopoverForm = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Subscribe</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <form className="grid gap-4">
          <div className="grid gap-2">
            <Input
              label="Email"
              id="email"
              type="email"
              placeholder="you@example.com"
            />
          </div>
          <Button type="submit">Join Newsletter</Button>
        </form>
      </PopoverContent>
    </Popover>
  )
}
