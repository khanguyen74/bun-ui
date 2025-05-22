"use client"

import { FileUpload, FileUploadDropZone, FileUploadList } from "@bun-ui/react"

export const FileUploadMultiple = () => {
  return (
    <FileUpload multiple>
      <FileUploadDropZone>
        <div className="flex flex-col items-center justify-center gap-2 p-4">
          <p className="text-muted-foreground text-sm">
            Drag and drop multiple files here, or click to select files
          </p>
        </div>
      </FileUploadDropZone>
      <FileUploadList />
    </FileUpload>
  )
}
