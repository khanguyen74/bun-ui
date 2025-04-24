export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className="flex flex-col">{children}</main>
}
