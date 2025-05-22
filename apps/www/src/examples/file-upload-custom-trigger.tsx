"use client"

import React from "react"
import { FileUpload, FileUploadList, FileUploadTrigger } from "@bun-ui/react"

export const FileUploadCustomTrigger = () => {
  const [files, setFiles] = React.useState<File[]>([])
  return (
    <FileUpload onFileSelect={setFiles} value={files}>
      <div className="flex items-center gap-4">
        <FileUploadTrigger asChild>
          <button className="bg-primary hover:bg-primary/90 rounded-md px-4 py-2 text-white">
            Upload Files
          </button>
        </FileUploadTrigger>
        <p className="text-muted-foreground text-sm">
          Click the button to select files
        </p>
      </div>
      <FileUploadList />
    </FileUpload>
  )
}
