import ThemeSwitch from "./theme-switch"

export const SiteHader = () => {
  return (
    <header className="bg-background sticky top-0 z-50 w-full">
      <div className="flex items-center justify-between">
        <div>Bun UI</div>

        <ThemeSwitch />
      </div>
    </header>
  )
}
