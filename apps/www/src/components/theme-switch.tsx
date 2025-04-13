"use client"

import { Button, useTheme } from "@bun-ui/react"
import { Moon, Sun } from "lucide-react"

export const ThemeSwitch = () => {
  const { toggleTheme } = useTheme()

  return (
    <Button onClick={toggleTheme} size="icon" variant="ghost">
      <Moon className="hidden [html.light_&]:block" />
      <Sun className="hidden [html.dark_&]:block" />
    </Button>
  )
}

export default ThemeSwitch
