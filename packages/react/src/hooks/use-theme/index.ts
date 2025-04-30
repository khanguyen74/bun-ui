/*
 * Use this hook to get the current theme and a function to toggle between light and dark themes.
 */

import { useCallback } from "react"
import { useTheme as useNextTheme } from "next-themes"

const useTheme = () => {
  const { resolvedTheme, setTheme } = useNextTheme()

  const toggleDarkMode = useCallback(() => {
    if (!resolvedTheme) return

    const isDark = resolvedTheme.includes("dark")
    const isExactDark = resolvedTheme === "dark"
    const isExactLight = resolvedTheme === "light"

    if (isExactDark) {
      setTheme("light")
    } else if (isExactLight) {
      setTheme("dark")
    } else {
      const newTheme = isDark
        ? resolvedTheme.replace(/-?dark/, "")
        : `${resolvedTheme}-dark`
      setTheme(newTheme)
    }
  }, [resolvedTheme])

  return {
    theme: resolvedTheme,
    /**
     * Switches between light and dark mode.
     * If the theme is "light", it changes to "dark", and if it's "dark", it changes to "light".
     * For custom themes, it adds or removes "-dark" from the theme name.
     */
    toggleDarkMode,
    setTheme,
  }
}

export { useTheme }
