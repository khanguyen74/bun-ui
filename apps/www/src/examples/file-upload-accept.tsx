"use client"

import { FileUpload, FileUploadDropZone, FileUploadList } from "@bun-ui/react"
import { UploadIcon } from "lucide-react"

export const FileUploadAccept = () => {
  return (
    <FileUpload accept="image/*">
      <FileUploadDropZone>
        <div className="flex h-full w-full flex-1 flex-col items-center justify-center gap-2 p-4">
          <UploadIcon className="text-muted-foreground h-6 w-6" />
          <p>Drag and drop images here, or click to select images</p>
        </div>
      </FileUploadDropZone>
      <FileUploadList />
    </FileUpload>
  )
}
