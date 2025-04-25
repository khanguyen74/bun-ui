import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { CircleAlert, CircleCheckBig, TriangleAlert } from "lucide-react"

import { cx } from "../../lib"

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        success:
          "bg-green-50 text-green-800 [&>svg]:text-green-800 dark:[&>svg]:text-green-400 dark:bg-green-900/50 dark:text-green-400",
        warning:
          "bg-yellow-50 text-yellow-800 [&>svg]:text-yellow-800 dark:[&>svg]:text-yellow-400 dark:bg-yellow-900/50 dark:text-yellow-400",
        error:
          "border-destructive text-destructive dark:bg-red-900/50 [&>svg]:text-destructive dark:text-red-400",
      },
      defaultVariants: {
        variant: "default",
      },
    },
  }
)

interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  icon?: React.ReactNode
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, icon: iconProps, children, ...props }, ref) => {
    let icon = iconProps
    if (icon === undefined) {
      icon = <CircleAlert className="h-4 w-4" />
      if (variant === "success") {
        icon = <CircleCheckBig className="h-4 w-4" />
      } else if (variant === "warning") {
        icon = <TriangleAlert className="h-4 w-4" />
      }
    }
    return (
      <div
        ref={ref}
        className={cx(alertVariants({ variant }), className)}
        {...props}
      >
        {icon}
        {children}
      </div>
    )
  }
)

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <h5 ref={ref} className={cx("mb-1 font-medium", className)} {...props} />
))

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cx("text-sm", className)} {...props} />
))

export { Alert, AlertTitle, AlertDescription }
