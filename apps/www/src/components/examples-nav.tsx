"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Activity, FileText, LineChart, Settings } from "lucide-react"

import { cx } from "@/lib/classnames"

const examples = [
  {
    title: "Analytics Dashboard",
    description:
      "A comprehensive analytics dashboard showcasing data visualization and metrics.",
    icon: LineChart,
    href: "/examples/analytics",
  },
  {
    title: "Task Management",
    description:
      "A task management interface with drag-and-drop functionality and progress tracking.",
    icon: Activity,
    href: "/examples/task-management",
  },
  {
    title: "File Management",
    description:
      "A file management system with upload capabilities and file organization.",
    icon: FileText,
    href: "/examples/file-management",
  },
  {
    title: "Settings Panel",
    description:
      "A settings interface demonstrating form controls and configuration options.",
    icon: Settings,
    href: "/examples/settings",
  },
]

export function ExamplesNav() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-full flex-col gap-2 p-4">
      <div className="mb-4">
        <h2 className="mb-2 text-lg font-semibold">Examples</h2>
        <p className="text-muted-foreground text-sm">
          Explore our collection of example dashboards and interfaces.
        </p>
      </div>
      <nav className="grid gap-2">
        {examples.map((example) => (
          <Link
            key={example.href}
            href={example.href}
            className={cx(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
              pathname === example.href
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted"
            )}
          >
            <example.icon className="h-4 w-4" />
            {example.title}
          </Link>
        ))}
      </nav>
    </div>
  )
}
