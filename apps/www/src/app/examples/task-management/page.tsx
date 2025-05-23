"use client"

import { useState } from "react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Calendar,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Input,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Progress,
  Select,
  SelectItem,
  TabContent,
  TabList,
  Tabs,
  TabTrigger,
  TextArea,
} from "@bun-ui/react"
import { format } from "date-fns"
import {
  AlertCircle,
  CalendarDays,
  CheckCircle2,
  Clock,
  Edit,
  MoreVertical,
  Play,
  Plus,
  Trash2,
  UserPlus,
} from "lucide-react"

import { CreateTaskDialog } from "@/components/create-task-dialog"

const tasks = [
  {
    id: 1,
    title: "Design System Implementation",
    description: "Create and implement a comprehensive design system",
    status: "In Progress",
    priority: "High",
    assignee: "John Doe",
    progress: 75,
    lastUpdated: "2 hours ago",
    estimatedTime: "3 days",
    startDate: "2024-03-20",
  },
  {
    id: 2,
    title: "User Authentication Flow",
    description: "Implement secure user authentication system",
    status: "To Do",
    priority: "Medium",
    assignee: "Jane Smith",
    progress: 0,
    lastUpdated: "1 day ago",
    estimatedTime: "2 days",
    startDate: "2024-03-25",
  },
  {
    id: 3,
    title: "API Integration",
    description: "Integrate backend APIs with frontend",
    status: "Done",
    priority: "High",
    assignee: "Mike Johnson",
    progress: 100,
    lastUpdated: "3 days ago",
  },
  {
    id: 4,
    title: "Performance Optimization",
    description: "Optimize application performance",
    status: "In Progress",
    priority: "Low",
    assignee: "Sarah Wilson",
    progress: 45,
    lastUpdated: "5 hours ago",
  },
]

const statuses = ["To Do", "In Progress", "Done"]

export default function TaskManagementPage() {
  const [isNewTaskOpen, setIsNewTaskOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [dateInputValue, setDateInputValue] = useState("")
  const [calendarOpen, setCalendarOpen] = useState(false)

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date)
    if (date) {
      setDateInputValue(format(date, "MM/dd/yyyy"))
    }
    setCalendarOpen(false)
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Task Management</h1>
          <p className="text-muted-foreground">
            Manage and track your team&apos;s tasks efficiently
          </p>
        </div>
        <Dialog open={isNewTaskOpen} onOpenChange={setIsNewTaskOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Task
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Create New Task</DialogTitle>
            <DialogDescription>
              Add a new task to your project. Fill in the details below.
            </DialogDescription>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Task Title</label>
                <Input placeholder="Enter task title" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Description</label>
                <TextArea
                  placeholder="Enter task description"
                  className="min-h-[100px]"
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Select
                  label="Priority"
                  placeholder="Select priority"
                  className="w-full flex-1"
                >
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </Select>
                <Select
                  label="Assignee"
                  placeholder="Select assignee"
                  className="w-full"
                >
                  <SelectItem value="john">John Doe</SelectItem>
                  <SelectItem value="jane">Jane Smith</SelectItem>
                  <SelectItem value="mike">Mike Johnson</SelectItem>
                  <SelectItem value="sarah">Sarah Wilson</SelectItem>
                </Select>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="relative w-full">
                  <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                    <PopoverTrigger asChild>
                      <Button variant="text" size="icon">
                        <CalendarDays className="text-muted-foreground h-4 w-4" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <Calendar
                        mode="single"
                        onSelect={handleDateSelect}
                        selected={selectedDate}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <Select
                  label="Estimated Time"
                  menuPosition="popper"
                  placeholder="Select estimated time"
                >
                  <SelectItem value="1">1 day</SelectItem>
                  <SelectItem value="2">2 days</SelectItem>
                  <SelectItem value="3">3 days</SelectItem>
                  <SelectItem value="5">5 days</SelectItem>
                  <SelectItem value="7">1 week</SelectItem>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outlined"
                onClick={() => setIsNewTaskOpen(false)}
              >
                Cancel
              </Button>
              <Button>Create Task</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="mb-8">
        <Tabs defaultValue="board">
          <TabList>
            <TabTrigger value="board">Board View</TabTrigger>
            <TabTrigger value="list">List View</TabTrigger>
          </TabList>
          <TabContent value="board">
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
              {statuses.map((status) => (
                <div key={status} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{status}</h3>
                    <Badge variant="outlined">
                      {tasks.filter((task) => task.status === status).length}
                    </Badge>
                  </div>
                  <div className="space-y-4">
                    {tasks
                      .filter((task) => task.status === status)
                      .map((task) => (
                        <Card key={task.id} className="overflow-hidden">
                          <CardHeader className="pb-2">
                            <div className="flex w-full items-start justify-between">
                              <div>
                                <h4 className="font-medium">{task.title}</h4>
                                <p className="text-muted-foreground text-sm">
                                  {task.description}
                                </p>
                                <p className="text-muted-foreground mt-4 text-xs">
                                  Last updated: {task.lastUpdated}
                                </p>
                              </div>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button
                                    variant="text"
                                    size="icon"
                                    className="h-8 w-8"
                                  >
                                    <MoreVertical className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>
                                    <Edit className="mr-2 h-4 w-4" />
                                    Edit Task
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <UserPlus className="mr-2 h-4 w-4" />
                                    Assign Task
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="text-destructive">
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    Delete Task
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              <div className="flex items-center justify-between">
                                <Badge
                                  variant={
                                    task.priority === "High"
                                      ? "filled"
                                      : "outlined"
                                  }
                                >
                                  {task.priority}
                                </Badge>
                                <div className="flex items-center gap-2">
                                  <Avatar className="h-6 w-6">
                                    <AvatarImage src="/avatar.png" />
                                    <AvatarFallback>
                                      {task.assignee
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                    </AvatarFallback>
                                  </Avatar>
                                  <span className="text-sm">
                                    {task.assignee}
                                  </span>
                                </div>
                              </div>
                              {task.progress > 0 && (
                                <div className="space-y-2">
                                  <div className="flex items-center justify-between text-sm">
                                    <span>Progress</span>
                                    <span>{task.progress}%</span>
                                  </div>
                                  <Progress value={task.progress} />
                                </div>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </TabContent>
          <TabContent value="list">
            <div className="mt-6 space-y-4">
              {tasks.map((task) => (
                <Card key={task.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
                          {task.status === "Done" ? (
                            <CheckCircle2 className="text-primary h-5 w-5" />
                          ) : task.status === "In Progress" ? (
                            <Clock className="text-primary h-5 w-5" />
                          ) : (
                            <AlertCircle className="text-primary h-5 w-5" />
                          )}
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium">{task.title}</h4>
                            <Badge
                              variant={
                                task.priority === "High" ? "filled" : "outlined"
                              }
                            >
                              {task.priority}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground text-sm">
                            {task.description}
                          </p>
                          <div className="text-muted-foreground flex items-center gap-4 text-xs">
                            <span>Last updated: {task.lastUpdated}</span>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                              <Avatar className="h-4 w-4">
                                <AvatarImage src="/avatar.png" />
                                <AvatarFallback>
                                  {task.assignee
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <span>{task.assignee}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        {task.progress > 0 ? (
                          <div className="w-24">
                            <div className="mb-1 flex items-center justify-between text-xs">
                              <span>Progress</span>
                              <span>{task.progress}%</span>
                            </div>
                            <Progress value={task.progress} />
                          </div>
                        ) : (
                          <div className="flex items-center gap-4">
                            <div className="text-muted-foreground flex items-center gap-2 text-sm">
                              <Clock className="h-4 w-4" />
                              <span>{task.estimatedTime}</span>
                            </div>
                            <Button variant="outlined" size="sm">
                              <Play className="mr-2 h-4 w-4" />
                              Start Task
                            </Button>
                          </div>
                        )}
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="text"
                              size="icon"
                              className="h-8 w-8"
                            >
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit Task
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <UserPlus className="mr-2 h-4 w-4" />
                              Assign Task
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete Task
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabContent>
        </Tabs>
      </div>
    </div>
  )
}
