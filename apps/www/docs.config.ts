const docsLinks: NavItem = {
  title: "Docs",
  url: "docs",
  items: [
    {
      title: "Get Started",
      url: "get-started",
      items: [
        {
          title: "Overview",
          items: [
            { title: "Installation", url: "installation" },
            { title: "Migration", url: "migration" },
            { title: "CLI", url: "cli" },
            { title: "Contributing", url: "contributing" },
            { title: "Showcase", url: "/showcase", external: true },
          ],
        },
      ],
    },
    {
      title: "Components",
      items: [
        { title: "Button", url: "button" },
        { title: "Checkbox", url: "checkbox" },
        { title: "Input", url: "input" },
        { title: "Radio", url: "radio" },
        { title: "Select", url: "select" },
      ],
    },
  ],
}

export const docsConfig: DocsConfig = {
  copyright: "Copyright © {{date}} Kha Nguyen. All Rights Reserved.",
  title: "Bun UI",
  titleTemplate: "%s | Bun UI",
  description:
    "Simple, Modular & Accessible UI Components for your React Applications",
  url: "https://bun-ui-orcin.vercel.app/",
  repoUrl: "https://github.com/khanguyen74/bun-ui",
  repoBranch: "main",
  navigation: [docsLinks],
  get editUrl() {
    return `${this.repoUrl}/tree/${this.repoBranch}/apps/www/content`
  },
}

interface DocsConfig {
  title: string
  titleTemplate: string
  description: string
  copyright: string
  url: string
  repoUrl: string
  editUrl: string
  repoBranch: string
  navigation: NavItem[]
}

export interface NavItem {
  title: string
  url?: string
  external?: boolean
  status?: string
  items?: NavItem[]
}

export interface FlattenNavItem extends Omit<NavItem, "items"> {}
