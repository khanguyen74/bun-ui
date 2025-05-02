export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex min-h-[calc(100vh-60px-45.8px)] flex-col">
      {children}
    </main>
  )
}
