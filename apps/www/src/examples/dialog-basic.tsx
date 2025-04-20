import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@bun-ui/react"

export const DialogBasic = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogDescription>
          This is a simple dialog with a close button.
        </DialogDescription>
        <div className="space-y-3 py-4">
          <p className="text-muted-foreground text-sm">
            Dialogs are useful for confirming actions, editing data, or
            presenting focused content without navigating away from the current
            screen.
          </p>
          <ul className="text-muted-foreground list-inside list-disc text-sm">
            <li>Modal overlay disables background interactions</li>
            <li>Built-in focus management and accessibility</li>
            <li>Customizable with your design system</li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  )
}
