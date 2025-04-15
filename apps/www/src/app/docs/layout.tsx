export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <div className="flex flex-col gap-4">{children}</div>
    </main>
  )
}
