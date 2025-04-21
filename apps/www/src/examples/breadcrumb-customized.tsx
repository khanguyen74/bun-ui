import { Breadcrumb, BreadcrumbItem, BreadcrumbList, Link } from "@bun-ui/react"
import { Slash } from "lucide-react"

export const BreadcrumbCustomized = () => (
  <Breadcrumb className="text-muted-foreground mb-4 text-sm">
    <BreadcrumbList separator={null}>
      <BreadcrumbItem>
        <Link
          href="#"
          underline="hover"
          className="text-primary/50 hover:underline"
        >
          Home
        </Link>
      </BreadcrumbItem>

      <BreadcrumbItem className="text-muted-foreground px-1">
        <Slash className="h-3 w-3" />
      </BreadcrumbItem>

      <BreadcrumbItem>
        <Link
          href="#"
          underline="hover"
          className="text-primary/50 hover:underline"
        >
          Projects
        </Link>
      </BreadcrumbItem>

      <BreadcrumbItem className="text-muted-foreground px-1">
        <Slash className="h-3 w-3" />
      </BreadcrumbItem>

      <BreadcrumbItem>
        <Link
          href="#"
          underline="hover"
          className="text-primary/50 hover:underline"
        >
          Beta App
        </Link>
      </BreadcrumbItem>

      <BreadcrumbItem className="text-muted-foreground px-1">
        <Slash className="h-3 w-3" />
      </BreadcrumbItem>

      <BreadcrumbItem>
        <span className="text-primary">Overview</span>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
)
