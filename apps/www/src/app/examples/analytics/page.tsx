"use client"

import { useState } from "react"
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CommandMenu,
  CommandMenuInput,
  CommandMenuItem,
  CommandMenuList,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  Label,
  Progress,
  Select,
  SelectItem,
  Switch,
  TabContent,
  TabList,
  Tabs,
  TabTrigger,
} from "@bun-ui/react"
import {
  Activity,
  Bell,
  Calendar,
  CheckCircle,
  Clock,
  Filter,
  Plus,
  Settings,
  Users,
} from "lucide-react"

export default function TaskManagementDashboard() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <div className="bg-background min-h-screen p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Task Management</h1>
          <p className="text-muted-foreground mt-1">
            Track and manage your team&apos;s tasks
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outlined" onClick={() => setIsDrawerOpen(true)}>
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Task
          </Button>
        </div>
      </div>

      <Alert className="mb-8">
        <Bell className="h-4 w-4" />
        <AlertTitle>Team Update</AlertTitle>
        <AlertDescription>
          The design team has completed 3 new tasks this week. Check out their
          progress!
        </AlertDescription>
      </Alert>

      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <span className="text-sm font-medium">Total Tasks</span>
            <Activity className="text-primary h-5 w-5" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <div className="text-muted-foreground mt-1 text-xs">
              8 tasks due this week
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <span className="text-sm font-medium">Completed</span>
            <CheckCircle className="text-primary h-5 w-5" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <div className="text-muted-foreground mt-1 text-xs">
              50% completion rate
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <span className="text-sm font-medium">In Progress</span>
            <Clock className="text-primary h-5 w-5" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <div className="text-muted-foreground mt-1 text-xs">
              4 high priority
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <span className="text-sm font-medium">Team Members</span>
            <Users className="text-primary h-5 w-5" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
            <div className="text-muted-foreground mt-1 text-xs">2 on leave</div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-6 flex items-center gap-4">
        <Select
          defaultValue="all"
          placeholder="Filter by status"
          className="w-[200px]"
        >
          <SelectItem value="all">All Tasks</SelectItem>
          <SelectItem value="in-progress">In Progress</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
        </Select>
        <Button variant="outlined" size="sm">
          <Filter className="mr-2 h-4 w-4" />
          More Filters
        </Button>
      </div>

      <Tabs defaultValue="overview">
        <TabList>
          <TabTrigger value="overview">Overview</TabTrigger>
          <TabTrigger value="calendar">Calendar</TabTrigger>
          <TabTrigger value="team">Team</TabTrigger>
        </TabList>
        <TabContent value="overview">
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>Project Progress</CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm">Design System</span>
                    <span className="text-muted-foreground text-xs">75%</span>
                  </div>
                  <Progress value={75} />
                </div>
                <div className="mb-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm">Mobile App</span>
                    <span className="text-muted-foreground text-xs">50%</span>
                  </div>
                  <Progress value={50} />
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm">Website Redesign</span>
                    <span className="text-muted-foreground text-xs">90%</span>
                  </div>
                  <Progress value={90} />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>Recent Activity</CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src="/avatar.png" />
                      <AvatarFallback>S</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">
                        Sarah completed the design system documentation
                      </p>
                      <p className="text-muted-foreground text-xs">
                        2 hours ago
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src="/avatar.png" />
                      <AvatarFallback>M</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">
                        Mike started working on the mobile app
                      </p>
                      <p className="text-muted-foreground text-xs">
                        4 hours ago
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src="/avatar.png" />
                      <AvatarFallback>A</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">
                        Alex updated the project timeline
                      </p>
                      <p className="text-muted-foreground text-xs">1 day ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabContent>
        <TabContent value="calendar">
          <Card className="mt-8">
            <CardHeader>Upcoming Deadlines</CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Calendar className="text-primary h-5 w-5" />
                    <div>
                      <p className="text-sm font-medium">
                        Design System Review
                      </p>
                      <p className="text-muted-foreground text-xs">
                        Due in 2 days
                      </p>
                    </div>
                  </div>
                  <Badge variant="outlined">High Priority</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Calendar className="text-primary h-5 w-5" />
                    <div>
                      <p className="text-sm font-medium">
                        Mobile App Beta Testing
                      </p>
                      <p className="text-muted-foreground text-xs">
                        Due in 5 days
                      </p>
                    </div>
                  </div>
                  <Badge variant="outlined">Medium Priority</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabContent>
        <TabContent value="team">
          <Card className="mt-8">
            <CardHeader>Team Members</CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <div className="bg-primary/10 h-8 w-8 rounded-full" />
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Sarah Johnson</p>
                      <p className="text-muted-foreground text-xs">
                        Design Lead
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Label htmlFor="notifications">Notifications</Label>
                    <Switch id="notifications" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <div className="bg-primary/10 h-8 w-8 rounded-full" />
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Mike Chen</p>
                      <p className="text-muted-foreground text-xs">Developer</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Label htmlFor="notifications-2">Notifications</Label>
                    <Switch id="notifications-2" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabContent>
      </Tabs>

      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Dashboard Settings</DrawerTitle>
          </DrawerHeader>
          <div className="p-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="dark-mode">Dark Mode</Label>
                <Switch id="dark-mode" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="notifications">Email Notifications</Label>
                <Switch id="notifications" />
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
