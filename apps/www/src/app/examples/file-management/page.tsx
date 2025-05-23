"use client"

import { useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertTitle,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  Button,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  FileUpload,
  FileUploadTrigger,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Progress,
  Skeleton,
  TabContent,
  TabList,
  Tabs,
  TabTrigger,
  Toggle,
  Tooltip,
} from "@bun-ui/react"
import {
  Clock,
  Cloud,
  Download,
  File,
  FileText,
  ImageIcon,
  MoreVertical,
  Music,
  Plus,
  Search,
  Share2,
  Star,
  Trash2,
  Upload,
  Video,
} from "lucide-react"

export default function FileManagementDashboard() {
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

  const handleFileSelect = () => {
    setIsUploading(true)
    setUploadProgress(0)
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsUploading(false)
          return 100
        }
        return prev + 10
      })
    }, 500)
  }

  return (
    <div className="bg-background mx-auto w-full max-w-[1800px] p-8 px-20">
      <div className="mb-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Files</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Projects</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">File Management</h1>
          <p className="text-muted-foreground mt-1">
            Organize and manage your project files
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Folder
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>Create New Folder</DialogTitle>
              <DialogDescription>
                Enter a name for your new folder
              </DialogDescription>
              <div className="py-4">
                <Input placeholder="Folder name" />
              </div>
            </DialogContent>
          </Dialog>
          <FileUpload
            onFileSelect={handleFileSelect}
            accept="image/*,video/*,application/pdf"
            multiple
          >
            <FileUploadTrigger asChild>
              <Button variant="outlined">
                <Upload className="mr-2 h-4 w-4" />
                Upload Files
              </Button>
            </FileUploadTrigger>
          </FileUpload>
        </div>
      </div>

      {isUploading && (
        <Alert className="mb-8" icon={<Cloud className="h-4 w-4" />}>
          <AlertTitle>Uploading Files</AlertTitle>
          <AlertDescription>
            <Progress value={uploadProgress} className="mt-2" />
          </AlertDescription>
        </Alert>
      )}

      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <span className="text-sm font-medium">Total Files</span>
            <File className="text-primary h-5 w-5" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <div className="text-muted-foreground mt-1 text-xs">
              234 files added this week
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <span className="text-sm font-medium">Storage Used</span>
            <Cloud className="text-primary h-5 w-5" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">75%</div>
            <div className="text-muted-foreground mt-1 text-xs">
              3.5GB of 5GB used
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <span className="text-sm font-medium">Shared Files</span>
            <Share2 className="text-primary h-5 w-5" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <div className="text-muted-foreground mt-1 text-xs">
              12 new shares today
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <span className="text-sm font-medium">Recent Activity</span>
            <Clock className="text-primary h-5 w-5" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <div className="text-muted-foreground mt-1 text-xs">
              15 updates in the last hour
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-6 flex items-center gap-4">
        <div className="relative w-[300px]">
          <Search className="text-muted-foreground absolute top-2.5 left-2 h-4 w-4" />
          <Input placeholder="Search files..." className="pl-8" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outlined" size="sm">
              Sort by
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Name</DropdownMenuItem>
            <DropdownMenuItem>Date</DropdownMenuItem>
            <DropdownMenuItem>Size</DropdownMenuItem>
            <DropdownMenuItem>Type</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Tabs defaultValue="all">
        <TabList>
          <TabTrigger value="all">All Files</TabTrigger>
          <TabTrigger value="recent">Recent</TabTrigger>
          <TabTrigger value="starred">Starred</TabTrigger>
          <TabTrigger value="trash">Trash</TabTrigger>
        </TabList>
        <TabContent value="all">
          <Accordion
            type="multiple"
            className="mt-8"
            defaultValue={["documents", "images", "videos", "audio"]}
          >
            <AccordionItem value="documents">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Documents
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center gap-4">
                      <FileText className="text-primary h-8 w-8" />
                      <div>
                        <p className="font-medium">Project Proposal.pdf</p>
                        <p className="text-muted-foreground text-sm">
                          Updated 2 hours ago
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Tooltip content="Add to starred">
                        <Toggle
                          size="sm"
                          className="text-foreground group h-8 w-8 p-0 not-hover:data-[state=on]:bg-transparent"
                        >
                          <Star className="h-4 w-4 group-data-[state=on]:fill-yellow-500 group-data-[state=on]:text-yellow-500" />
                        </Toggle>
                      </Tooltip>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="text"
                            size="icon"
                            className="h-8 w-8"
                            color="neutral"
                          >
                            <MoreVertical />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Share2 className="mr-2 h-4 w-4" />
                            Share
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="images">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <ImageIcon className="h-4 w-4" />
                  Images
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex justify-between">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="group relative aspect-square w-full max-w-[300px] overflow-hidden rounded-lg border p-4"
                    >
                      <Skeleton
                        className="h-full w-full"
                        variant="rectangular"
                      />
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="videos">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <Video className="h-4 w-4" />
                  Videos
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center gap-4">
                      <Video className="text-primary h-8 w-8" />
                      <div>
                        <p className="font-medium">Product Demo.mp4</p>
                        <p className="text-muted-foreground text-sm">
                          128MB • 5:30
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="text"
                            size="icon"
                            className="h-8 w-8"
                            color="neutral"
                          >
                            <Share2 />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                          <div className="space-y-4">
                            <h4 className="font-medium">Share Video</h4>
                            <Input placeholder="Enter email" />
                            <Button className="w-full">Share</Button>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="audio">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <Music className="h-4 w-4" />
                  Audio
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center gap-4">
                      <Music className="text-primary h-8 w-8" />
                      <div>
                        <p className="font-medium">Interview Recording.mp3</p>
                        <p className="text-muted-foreground text-sm">
                          45MB • 32:15
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="text"
                        size="icon"
                        className="h-8 w-8"
                        color="neutral"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabContent>
        <TabContent value="recent">
          <div className="mt-8">
            <Card>
              <CardHeader>Recent Files</CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-lg border p-4"
                    >
                      <div className="flex items-center gap-4">
                        <Skeleton className="h-8 w-8 rounded" />
                        <div className="space-y-1">
                          <Skeleton className="h-4 w-[200px]" />
                          <Skeleton className="h-3 w-[150px]" />
                        </div>
                      </div>
                      <Skeleton className="h-8 w-8 rounded" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabContent>
        <TabContent value="starred">
          <div className="mt-8">
            <Card>
              <CardHeader>Starred Files</CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <Star className="text-muted-foreground mb-4 h-12 w-12" />
                  <h3 className="text-lg font-medium">No starred files</h3>
                  <p className="text-muted-foreground mt-1">
                    Star important files to find them quickly
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabContent>
        <TabContent value="trash">
          <div className="mt-8">
            <Card>
              <CardHeader>Trash</CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <Trash2 className="text-muted-foreground mb-4 h-12 w-12" />
                  <h3 className="text-lg font-medium">Trash is empty</h3>
                  <p className="text-muted-foreground mt-1">
                    Files you delete will appear here
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabContent>
      </Tabs>
    </div>
  )
}
