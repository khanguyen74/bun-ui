import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  Input,
  Select,
  SelectItem,
} from "@bun-ui/react"

export const DialogForm = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>New Project</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Create New Project</DialogTitle>
        <form className="mt-4 space-y-4">
          <Input label="Project Name" />
          <Input label="Description" multiple />
          <Select defaultValue="private">
            <SelectItem value="private">Private</SelectItem>
            <SelectItem value="public">Public</SelectItem>
          </Select>
          <div className="flex justify-end gap-2 pt-4">
            <DialogClose asChild>
              <Button color="secondary">Cancel</Button>
            </DialogClose>
            <Button type="submit">Create</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
