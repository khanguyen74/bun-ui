import { TabContent, TabList, Tabs, TabTrigger } from "@bun-ui/react"
import { CreditCard, Settings, User } from "lucide-react"

export const TabsCustomized = () => {
  return (
    <Tabs defaultValue="profile" className="w-[500px]">
      <TabList>
        <TabTrigger value="profile">
          <User className="mr-2 h-4 w-4" />
          Profile
        </TabTrigger>
        <TabTrigger value="account">
          <Settings className="mr-2 h-4 w-4" />
          Account
        </TabTrigger>
        <TabTrigger value="payments">
          <CreditCard className="mr-2 h-4 w-4" />
          Payments
        </TabTrigger>
      </TabList>
      <TabContent value="profile">
        <div>
          <h3 className="text-lg font-semibold">User Profile</h3>
          <p>This section contains personal user information.</p>
        </div>
      </TabContent>
      <TabContent value="account">
        <div>
          <h3 className="text-lg font-semibold">Account Settings</h3>
          <p>Configure email, password, and other account options.</p>
        </div>
      </TabContent>
      <TabContent value="payments">
        <div>
          <h3 className="text-lg font-semibold">Payment Methods</h3>
          <p>Manage credit cards, billing addresses, and more.</p>
        </div>
      </TabContent>
    </Tabs>
  )
}
