import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from "@bun-ui/react"

export const AlertDialogBasic = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button color="destructive">Delete</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. Do you want to proceed?
      </AlertDialogDescription>
      <AlertDialogFooter className="justify-end">
        <AlertDialogAction>Confirm</AlertDialogAction>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
)
