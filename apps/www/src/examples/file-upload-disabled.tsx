"use client"

import { FileUpload, FileUploadDropZone } from "@bun-ui/react"

export const FileUploadDisabled = () => {
  return (
    <FileUpload disabled>
      <FileUploadDropZone>
        <p className="text-sm">File upload is currently disabled</p>
      </FileUploadDropZone>
    </FileUpload>
  )
}
