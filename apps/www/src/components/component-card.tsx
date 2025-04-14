interface ComponentCardProps {
  title: string
  description: string
  children?: React.ReactNode
}
export const ComponentCard = ({
  title,
  description,
  children,
}: ComponentCardProps) => {
  return (
    <div className="bg-background rounded-2xl border p-6 shadow-sm transition-all hover:shadow-md">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-muted-foreground mb-4 text-sm">{description}</p>
      <div className="space-y-2">{children}</div>
    </div>
  )
}
