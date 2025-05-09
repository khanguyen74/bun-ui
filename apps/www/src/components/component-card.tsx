interface ComponentCardProps {
  title?: string
  description?: string
  children?: React.ReactNode
}
export const ComponentCard = ({
  title,
  description,
  children,
}: ComponentCardProps) => {
  return (
    <div className="bg-background rounded-md border p-6 shadow-sm transition-all hover:shadow-md">
      {title && <h2 className="text-xl font-semibold">{title}</h2>}
      {description && (
        <p className="text-muted-foreground mb-4 text-sm">{description}</p>
      )}
      <div className="mt-5">{children}</div>
    </div>
  )
}
