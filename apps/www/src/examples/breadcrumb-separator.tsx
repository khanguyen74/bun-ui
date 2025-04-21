import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@bun-ui/react"

export const BreadcrumbSeparator = () => (
  <Breadcrumb>
    <BreadcrumbList
      separator={
        <span className="text-muted-foreground mx-2 select-none">|</span>
      }
    >
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink currentLink href="/components/breadcrumb">
          Breadcrumb
        </BreadcrumbLink>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
)
