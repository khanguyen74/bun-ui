"use client"

import React from "react"
import { FileUpload, FileUploadTrigger } from "@bun-ui/react"

export const FileUploadCustomTrigger = () => {
  const [files, setFiles] = React.useState<File[]>([])
  return (
    <FileUpload onFileSelect={setFiles} value={files}>
      <div className="flex items-center gap-4">
        <FileUploadTrigger asChild className="w-[400px]">
          <input
            className="border p-2 select-none"
            readOnly
            value={
              files.length && files[0].size ? files[0].name : "Upload Files"
            }
          />
        </FileUploadTrigger>
      </div>
    </FileUpload>
  )
}
