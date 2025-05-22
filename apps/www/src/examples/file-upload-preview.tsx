"use client"

import {
  FileUpload,
  FileUploadList,
  FileUploadPreviewList,
  FileUploadTrigger,
} from "@bun-ui/react"
import { UploadIcon } from "lucide-react"

export const FileUploadPreview = () => {
  return (
    <FileUpload accept="image/*" multiple className="w-[400px]">
      <FileUploadTrigger>
        <UploadIcon />
        <p className="text-sm">Upload Images</p>
      </FileUploadTrigger>
      <FileUploadPreviewList />
      <FileUploadList />
    </FileUpload>
  )
}
