"use client"

import { Button, useTheme } from "@bun-ui/react"
import { Moon, Sun } from "lucide-react"

export const ThemeSwitch = () => {
  const { toggleDarkMode } = useTheme()

  return (
    <Button onClick={toggleDarkMode} size="icon" variant="text">
      <Moon className="hidden dark:block" />
      <Sun className="hidden not-dark:block" />
    </Button>
  )
}

export default ThemeSwitch
