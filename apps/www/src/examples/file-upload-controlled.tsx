"use client"

import { useState } from "react"
import {
  Button,
  FileUpload,
  FileUploadDropZone,
  FileUploadList,
} from "@bun-ui/react"
import { useToast } from "@bun-ui/react/toast"
import { UploadIcon } from "lucide-react"

export const FileUploadControlled = () => {
  const { createToast } = useToast()
  const [files, setFiles] = useState<File[]>([])
  const [uploadProgress, setUploadProgress] = useState<number>(0)

  const handleFilesChange = (newFiles: File[]) => {
    setFiles(newFiles)
    // Reset progress when new files are selected
    setUploadProgress(0)
  }

  const handleRemove = (file: File) => {
    setFiles((prev) => prev.filter((_file) => _file.name !== file.name))
    createToast({
      title: "File Removed",
      description: "File has been removed from the upload list",
    })
  }

  const handleUpload = async () => {
    if (files.length === 0) return

    // Simulate file upload progress
    for (let i = 0; i <= 100; i += 10) {
      await new Promise((resolve) => setTimeout(resolve, 200))
      setUploadProgress(i)
    }

    // Show success toast
    createToast({
      title: "Files Uploaded",
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
    })

    // Reset state
    setFiles([])
    setUploadProgress(0)
  }

  return (
    <div className="space-y-4">
      <FileUpload
        multiple
        value={files}
        onFileSelect={handleFilesChange}
        onFileRemove={handleRemove}
        className="w-[400px]"
      >
        <FileUploadDropZone>
          <UploadIcon className="text-muted-foreground mb-2 h-6 w-6" />
          <p className="text-sm">
            Drag and drop files here, or click to select files
          </p>
        </FileUploadDropZone>
        <FileUploadList />
      </FileUpload>

      {files.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-sm">{files.length} file(s) ready to upload</p>
            <Button
              variant="text"
              color="neutral"
              onClick={() => {
                setFiles([])
                createToast({
                  title: "Files Cleared",
                  description:
                    "All files have been removed from the upload list",
                })
              }}
            >
              Clear All
            </Button>
          </div>

          {uploadProgress > 0 && (
            <div className="h-2.5 w-full rounded-full bg-gray-200">
              <div
                className="bg-primary h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
          )}

          <Button onClick={handleUpload} disabled={uploadProgress > 0}>
            {uploadProgress > 0 ? "Uploading..." : "Upload Files"}
          </Button>
        </div>
      )}
    </div>
  )
}
