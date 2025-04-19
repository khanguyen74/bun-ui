import {
  Button,
  Dialog,
  DialogContent,
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
        <p className="text-muted-foreground mt-2 text-sm">
          This is a simple dialog with a close button.
        </p>
      </DialogContent>
    </Dialog>
  )
}
