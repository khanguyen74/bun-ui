"use client"

import { FileUpload, FileUploadDropZone, FileUploadList } from "@bun-ui/react"
import { UploadIcon } from "lucide-react"

export const FileUploadMaxFiles = () => {
  return (
    <FileUpload
      multiple
      maxFiles={5}
      className="w-[350px]"
      accept="image/jpg, image/jpeg, image/png"
    >
      <FileUploadDropZone className="flex flex-col items-center justify-center">
        <UploadIcon className="text-muted-foreground h-6 w-6" />
        <p>Drag and drop images here</p>
        <p className="text-muted-foreground text-sm">
          .jpg, .jpeg, .png up to 5 files
        </p>
      </FileUploadDropZone>
      <FileUploadList />
    </FileUpload>
  )
}
