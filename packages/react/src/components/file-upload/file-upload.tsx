"use client"

import React from "react"
import { Slot } from "@radix-ui/react-slot"

import { useControlled } from "../../hooks/use-controlled"
import { cx } from "../../lib"
import { Button } from "../button"
import { CloseIcon } from "../icons"
import { FileUploadContext, useFileUploadContext } from "./file-upload-context"

/**
 * Props for the FileItem component that displays individual file information
 */
interface FileItemProps {
  /** The file object to display */
  file: File
  /** Optional callback function when the file is removed */
  onRemove?: () => void
}

const FileItem = ({ file, onRemove }: FileItemProps) => (
  <div className="flex items-center justify-between gap-2 rounded-md border p-2">
    <div className="flex flex-col gap-1">
      <p className="text-sm font-medium">{file.name}</p>
      <p className="text-muted-foreground text-xs">
        {(file.size / 1024).toFixed(2)} KB • {file.type}
      </p>
    </div>
    {onRemove && (
      <Button
        variant="text"
        color="neutral"
        size="icon"
        onClick={onRemove}
        className="h-8 w-8 shrink-0"
        aria-label="Remove file"
      >
        <CloseIcon />
      </Button>
    )}
  </div>
)

FileItem.displayName = "FileItem"

const FileUploadDropZone = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { setFiles, inputId, onFileSelect, disabled, maxFiles, multiple } =
    useFileUploadContext()
  const [isDragging, setIsDragging] = React.useState(false)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const droppedFiles = e.dataTransfer.files
    if (droppedFiles) {
      const fileArray = Array.from(droppedFiles)
      // Check if multiple files are allowed and if the limit is exceeded
      if (multiple && maxFiles && fileArray.length > maxFiles) {
        return
      }
      setFiles(fileArray)
      onFileSelect?.(fileArray)
    }
  }

  return (
    <div
      ref={ref}
      className={cx(
        "hover:bg-secondary/10 border-foreground/50 hover:border-foreground min-h-[200px] w-full cursor-pointer rounded-sm border border-dashed p-4",
        isDragging && "border-primary bg-accent/50",
        disabled && "pointer-events-none opacity-50",
        className
      )}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => document.getElementById(inputId)?.click()}
      {...props}
    >
      {children}
    </div>
  )
})

FileUploadDropZone.displayName = "FileUploadDropZone"

/**
 * Props for the FileUploadTrigger component that triggers file selection
 */
interface FileUploadTriggerProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  /** Whether to render the trigger as a child component */
  asChild?: boolean
}

const FileUploadTrigger = React.forwardRef<
  HTMLButtonElement,
  FileUploadTriggerProps
>(({ className, children, asChild = false, ...props }, ref) => {
  const { inputId } = useFileUploadContext()
  const Comp = asChild ? Slot : Button

  return (
    <Comp
      ref={ref}
      className={cx("w-fit", className)}
      onClick={() => document.getElementById(inputId)?.click()}
      {...props}
    >
      {children}
    </Comp>
  )
})

FileUploadTrigger.displayName = "FileUploadTrigger"

/**
 * Props for the FileUpload component
 */
interface FileUploadProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Callback function when files are selected
   **/
  onFileSelect?: (files: File[]) => void
  /** Callback function when a file is removed */
  onFileRemove?: (file: File) => void
  /**
   * Maximum number of files allowed to be uploaded.
   * This prop is ignored if multiple is false.
   **/
  maxFiles?: number
  /**
   * Comma-separated list of allowed file types
   * @example"image/*,.pdf")
   **/
  accept?: string
  /** Whether multiple files can be selected */
  multiple?: boolean
  /** Whether the file upload is disabled */
  disabled?: boolean
  /** Controlled value of the selected files */
  value?: File[]
  /** Name attribute for the file input element */
  name?: string
}

const FileUpload = React.forwardRef<HTMLDivElement, FileUploadProps>(
  (
    {
      className,
      id,
      onFileSelect,
      onFileRemove,
      maxFiles,
      accept,
      multiple = false,
      disabled = false,
      value,
      children,
      name,
      ...props
    },
    ref
  ) => {
    const inputId = id ?? React.useId()
    const [files, setFiles] = useControlled({ value, defaultValue: [] })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newFiles = event.target.files
      if (newFiles) {
        const fileArray = Array.from(newFiles)
        console.log("file numbers", fileArray.length, maxFiles)
        if (multiple && maxFiles && fileArray.length > maxFiles) {
          return
        }
        setFiles(fileArray)
        onFileSelect?.(fileArray)
      }
    }

    const handleRemove = (index: number) => {
      const newFiles = files.filter((_, i) => i !== index)
      setFiles(newFiles)
      onFileRemove?.(files[index])
    }

    return (
      <FileUploadContext.Provider
        value={{
          setFiles,
          files,
          inputId,
          onFileSelect,
          maxFiles,
          accept,
          multiple,
          disabled,
        }}
      >
        <div
          className={cx("flex min-w-[300px] flex-col gap-2", className)}
          ref={ref}
          {...props}
        >
          <input
            className="hidden"
            id={inputId}
            type="file"
            accept={accept}
            multiple={multiple}
            disabled={disabled}
            onChange={handleChange}
            name={name}
          />
          {children}
          {files.length > 0 && (
            <div className="flex flex-col gap-2">
              {files.map((file, index) => (
                <FileItem
                  key={`${file.name}-${index}`}
                  file={file}
                  onRemove={() => handleRemove(index)}
                />
              ))}
            </div>
          )}
        </div>
      </FileUploadContext.Provider>
    )
  }
)

FileUpload.displayName = "FileUpload"

export {
  FileUpload,
  FileUploadDropZone,
  FileUploadTrigger,
  type FileUploadProps,
}
