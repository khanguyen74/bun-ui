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
  Tooltip,
} from "@bun-ui/react"
import {
  Activity,
  ArrowDown,
  ArrowUp,
  Bell,
  Calendar,
  CheckCircle,
  Clock,
  Download,
  Filter,
  MoreHorizontal,
  Plus,
  Settings,
  Users,
} from "lucide-react"

const metrics = [
  {
    title: "Total Users",
    value: "1,234",
    change: "+12%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Active Sessions",
    value: "456",
    change: "+8%",
    trend: "up",
    icon: Activity,
  },
  {
    title: "Conversion Rate",
    value: "3.2%",
    change: "+0.5%",
    trend: "up",
    icon: CheckCircle,
  },
  {
    title: "Avg. Session",
    value: "4m 32s",
    change: "+45s",
    trend: "up",
    icon: Clock,
  },
]

const topPages = [
  { name: "Homepage", views: 45000, percentage: 45 },
  { name: "Products", views: 30000, percentage: 30 },
  { name: "Blog", views: 25000, percentage: 25 },
]

const topUsers = [
  {
    name: "John Doe",
    role: "Product Manager",
    views: 2345,
    avatar: "/avatar.png",
  },
  {
    name: "Alice Smith",
    role: "Marketing Director",
    views: 1890,
    avatar: "/avatar.png",
  },
  {
    name: "Robert Johnson",
    role: "Developer",
    views: 1234,
    avatar: "/avatar.png",
  },
]

const recentEvents = [
  {
    type: "Button Clicks",
    count: 1234,
    change: "+15%",
    status: "active",
  },
  {
    type: "Form Submissions",
    count: 567,
    change: "+8%",
    status: "active",
  },
  {
    type: "Page Views",
    count: 8901,
    change: "+23%",
    status: "active",
  },
]

export default function AnalyticsDashboard() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [dateRange, setDateRange] = useState("7d")

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Track your application metrics and user behavior
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outlined" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Tooltip content="Configure dashboard settings">
            <Button variant="outlined" onClick={() => setIsDrawerOpen(true)}>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </Tooltip>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Report
          </Button>
        </div>
      </div>

      <Alert className="mb-8">
        <Bell className="h-4 w-4" />
        <AlertTitle>New Feature Available</AlertTitle>
        <AlertDescription>
          Try our new advanced analytics features to get deeper insights into
          your data.{" "}
          <Button variant="text" className="h-auto p-0">
            Learn more
          </Button>
        </AlertDescription>
      </Alert>

      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <span className="text-sm font-medium">{metric.title}</span>
              <metric.icon className="text-primary h-5 w-5" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="text-muted-foreground mt-1 flex items-center text-xs">
                {metric.trend === "up" ? (
                  <ArrowUp className="text-success mr-1 h-3 w-3" />
                ) : (
                  <ArrowDown className="text-destructive mr-1 h-3 w-3" />
                )}
                {metric.change} from last month
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Select
            value={dateRange}
            onValueChange={setDateRange}
            className="w-[200px]"
          >
            <SelectItem value="24h">Last 24 Hours</SelectItem>
            <SelectItem value="7d">Last 7 Days</SelectItem>
            <SelectItem value="30d">Last 30 Days</SelectItem>
            <SelectItem value="90d">Last 90 Days</SelectItem>
          </Select>
          <Button variant="outlined" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            More Filters
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="text-muted-foreground h-4 w-4" />
          <span className="text-muted-foreground text-sm">
            Last updated: {new Date().toLocaleDateString()}
          </span>
        </div>
      </div>

      <Tabs defaultValue="overview">
        <TabList>
          <TabTrigger value="overview">Overview</TabTrigger>
          <TabTrigger value="users">Users</TabTrigger>
          <TabTrigger value="events">Events</TabTrigger>
        </TabList>
        <TabContent value="overview">
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <h3 className="text-lg font-semibold">Page Views</h3>
                <Button variant="text" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                {topPages.map((page) => (
                  <div key={page.name} className="mb-4 last:mb-0">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm">{page.name}</span>
                      <span className="text-muted-foreground text-xs">
                        {page.views.toLocaleString()} views
                      </span>
                    </div>
                    <Progress value={page.percentage} />
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <h3 className="text-lg font-semibold">Top Users</h3>
                <Button variant="text" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topUsers.map((user) => (
                    <div key={user.name} className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback>
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{user.name}</p>
                        <p className="text-muted-foreground text-xs">
                          {user.role}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">
                          {user.views.toLocaleString()}
                        </p>
                        <p className="text-muted-foreground text-xs">views</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabContent>
        <TabContent value="users">
          <Card className="mt-8">
            <CardHeader>User Activity</CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentEvents.map((event) => (
                  <div
                    key={event.type}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 h-8 w-8 rounded-full" />
                      <div>
                        <p className="text-sm font-medium">{event.type}</p>
                        <p className="text-muted-foreground text-xs">
                          {event.count.toLocaleString()} events
                        </p>
                      </div>
                    </div>
                    <Badge variant="outlined">{event.change}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabContent>
        <TabContent value="events">
          <Card className="mt-8">
            <CardHeader>Event Tracking</CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentEvents.map((event) => (
                  <div
                    key={event.type}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 h-8 w-8 rounded-full" />
                      <div>
                        <p className="text-sm font-medium">{event.type}</p>
                        <p className="text-muted-foreground text-xs">
                          Most tracked event
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Label htmlFor={`tracking-${event.type}`}>
                        Enable Tracking
                      </Label>
                      <Switch id={`tracking-${event.type}`} defaultChecked />
                    </div>
                  </div>
                ))}
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
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-refresh">Auto Refresh</Label>
                <Switch id="auto-refresh" />
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
