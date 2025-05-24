import { ExamplesNav } from "@/components/examples-nav"

export default function ExamplesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <div className="hidden w-64 border-r lg:block">
        <ExamplesNav />
      </div>
      <div className="flex-1">
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}

