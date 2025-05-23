import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Input,
  Select,
  SelectItem,
  Switch,
  TabContent,
  TabList,
  Tabs,
  TabTrigger,
} from "@bun-ui/react"
import { Bell, Lock, Palette, User } from "lucide-react"

const settings = {
  profile: {
    name: "John Doe",
    email: "john@example.com",
    role: "Administrator",
    timezone: "UTC-8",
  },
  notifications: {
    email: true,
    push: false,
    marketing: false,
    updates: true,
  },
  appearance: {
    theme: "light",
    fontSize: "medium",
    compactMode: false,
  },
  security: {
    twoFactor: false,
    sessionTimeout: "30",
    passwordExpiry: "90",
  },
}

export default function SettingsPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <Card>
            <CardContent className="p-4">
              <nav className="space-y-2">
                <Button variant="text" className="w-full justify-start">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Button>
                <Button variant="text" className="w-full justify-start">
                  <Bell className="mr-2 h-4 w-4" />
                  Notifications
                </Button>
                <Button variant="text" className="w-full justify-start">
                  <Palette className="mr-2 h-4 w-4" />
                  Appearance
                </Button>
                <Button variant="text" className="w-full justify-start">
                  <Lock className="mr-2 h-4 w-4" />
                  Security
                </Button>
              </nav>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-3">
          <Tabs defaultValue="profile">
            <TabList>
              <TabTrigger value="profile">Profile</TabTrigger>
              <TabTrigger value="notifications">Notifications</TabTrigger>
              <TabTrigger value="appearance">Appearance</TabTrigger>
              <TabTrigger value="security">Security</TabTrigger>
            </TabList>

            <TabContent value="profile">
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold">Profile Settings</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name</label>
                      <Input defaultValue={settings.profile.name} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input defaultValue={settings.profile.email} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Role</label>
                      <Input defaultValue={settings.profile.role} disabled />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Timezone</label>
                      <Select defaultValue={settings.profile.timezone}>
                        <SelectItem value="UTC-8">
                          Pacific Time (UTC-8)
                        </SelectItem>
                        <SelectItem value="UTC-5">
                          Eastern Time (UTC-5)
                        </SelectItem>
                        <SelectItem value="UTC+0">UTC</SelectItem>
                        <SelectItem value="UTC+1">
                          Central European Time (UTC+1)
                        </SelectItem>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabContent>

            <TabContent value="notifications">
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold">
                    Notification Preferences
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Email Notifications</h4>
                      <p className="text-muted-foreground text-sm">
                        Receive notifications via email
                      </p>
                    </div>
                    <Switch defaultChecked={settings.notifications.email} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Push Notifications</h4>
                      <p className="text-muted-foreground text-sm">
                        Receive push notifications
                      </p>
                    </div>
                    <Switch defaultChecked={settings.notifications.push} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Marketing Emails</h4>
                      <p className="text-muted-foreground text-sm">
                        Receive marketing and promotional emails
                      </p>
                    </div>
                    <Switch defaultChecked={settings.notifications.marketing} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Product Updates</h4>
                      <p className="text-muted-foreground text-sm">
                        Receive updates about new features
                      </p>
                    </div>
                    <Switch defaultChecked={settings.notifications.updates} />
                  </div>
                </CardContent>
              </Card>
            </TabContent>

            <TabContent value="appearance">
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold">Appearance Settings</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Theme</label>
                    <Select defaultValue={settings.appearance.theme}>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Font Size</label>
                    <Select defaultValue={settings.appearance.fontSize}>
                      <SelectItem value="small">Small</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="large">Large</SelectItem>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Compact Mode</h4>
                      <p className="text-muted-foreground text-sm">
                        Use compact layout for better space utilization
                      </p>
                    </div>
                    <Switch defaultChecked={settings.appearance.compactMode} />
                  </div>
                </CardContent>
              </Card>
            </TabContent>

            <TabContent value="security">
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold">Security Settings</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Two-Factor Authentication</h4>
                      <p className="text-muted-foreground text-sm">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                    <Switch defaultChecked={settings.security.twoFactor} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Session Timeout (minutes)
                    </label>
                    <Select defaultValue={settings.security.sessionTimeout}>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="60">1 hour</SelectItem>
                      <SelectItem value="120">2 hours</SelectItem>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Password Expiry (days)
                    </label>
                    <Select defaultValue={settings.security.passwordExpiry}>
                      <SelectItem value="30">30 days</SelectItem>
                      <SelectItem value="60">60 days</SelectItem>
                      <SelectItem value="90">90 days</SelectItem>
                      <SelectItem value="180">180 days</SelectItem>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </TabContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
