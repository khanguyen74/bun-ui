export const sideBarNavs: SideBarNavItem[] = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        url: "/docs",
        items: [],
      },
      {
        title: "Installation",
        url: "/docs/installation",
        items: [],
      },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Accordion", url: "/docs/components/accordion", items: [] },
      { title: "Button", url: "/docs/components/button", items: [] },
      { title: "Checkbox", url: "/docs/components/checkbox", items: [] },
      { title: "Dialog", url: "/docs/components/dialog", items: [] },
      { title: "Drawer", url: "/docs/components/drawer", items: [] },
      { title: "Input", url: "/docs/components/input", items: [] },
      { title: "Radio", url: "/docs/components/radio", items: [] },
      { title: "Select", url: "/docs/components/select", items: [] },
      { title: "Tabs", url: "/docs/components/tabs", items: [] },
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
