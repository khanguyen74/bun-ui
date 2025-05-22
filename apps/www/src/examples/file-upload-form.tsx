"use client"

import {
  Button,
  FileUpload,
  FileUploadDropZone,
  FileUploadList,
} from "@bun-ui/react"
import { ToastAction, useToast } from "@bun-ui/react/toast"
import { CircleAlertIcon } from "lucide-react"

export const FileUploadForm = () => {
  const { createToast } = useToast()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const files = formData.getAll("form-files") as File[]

    if (files.length === 0 || (files.length === 1 && files[0].size === 0)) {
      createToast({
        title: (
          <span className="flex items-center gap-2">
            <CircleAlertIcon className="text-destructive h-4 w-4" />
            No Files Selected
          </span>
        ),
      })
      return
    }

    createToast({
      title: "Files Submitted",
      description: (
        <div className="mt-2">
          <p className="font-medium">Uploaded files:</p>
          <ul className="mt-1 list-inside list-disc">
            {files.map((file, index) => (
              <li key={index} className="text-sm">
                {file.name}
              </li>
            ))}
          </ul>
        </div>
      ),
      action: <ToastAction altText="View">View</ToastAction>,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium">Upload Files</label>
        <FileUpload multiple name="form-files">
          <FileUploadDropZone>
            <div className="flex flex-col items-center justify-center gap-2 p-4">
              <p className="text-muted-foreground text-sm">
                Drag and drop files here, or click to select files
              </p>
            </div>
          </FileUploadDropZone>
          <FileUploadList />
        </FileUpload>
      </div>

      <Button type="submit">Submit</Button>
    </form>
  )
}
