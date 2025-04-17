export const sideBarNavs: SideBarNavItem[] = [
  {
    title: "Getting Started",
    url: "getting-started",
    items: [
      {
        title: "Introduction",
        url: "/docs/introduction",
        items: [],
      },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Button", url: "/docs/components/button", items: [] },
      { title: "Checkbox", url: "/docs/components/checkbox", items: [] },
      { title: "Input", url: "/docs/components/input", items: [] },
      { title: "Radio", url: "/docs/components/radio", items: [] },
      { title: "Select", url: "/docs/components/select", items: [] },
    ],
  },
]

export const docsConfig: DocsConfig = {
  sideBarNavs: sideBarNavs,
}

export interface DocsConfig {
  sideBarNavs: SideBarNavItem[]
}

export interface NavItem {
  title: string
  url?: string
  external?: boolean
  status?: string
  disabled?: boolean
  label?: string
}

export interface SideBarNavItem extends NavItem {
  items: SideBarNavItem[]
}
