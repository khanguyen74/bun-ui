import bunPackage from "../../../../packages/react/package.json"

export const VersionBadge = () => (
  <span className="bg-popover flex items-center gap-1 rounded-lg p-2 text-xs font-medium select-none">
    <span className="text-foreground text-sm">v{bunPackage.version}</span>
    <span className="text-destructive scale-90">Beta</span>
  </span>
)
