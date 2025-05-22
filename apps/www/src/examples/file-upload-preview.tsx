"use client"

import {
  FileUpload,
  FileUploadPreviewList,
  FileUploadTrigger,
} from "@bun-ui/react"
import { ImageUpIcon } from "lucide-react"

export const FileUploadPreview = () => {
  return (
    <FileUpload accept="image/*" multiple className="w-[400px]">
      <FileUploadTrigger>
        <ImageUpIcon />
        <p className="text-sm">Upload Images</p>
      </FileUploadTrigger>
      <FileUploadPreviewList />
    </FileUpload>
  )
}
