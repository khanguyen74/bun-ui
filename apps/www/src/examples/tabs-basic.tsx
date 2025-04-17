import { TabContent, TabList, Tabs, TabTrigger } from "@bun-ui/react"

export function TabsBasic() {
  return (
    <Tabs defaultValue="overview" className="w-[500px]">
      <TabList>
        <TabTrigger value="overview">Overview</TabTrigger>
        <TabTrigger value="settings">Settings</TabTrigger>
        <TabTrigger value="billing">Billing</TabTrigger>
      </TabList>
      <TabContent value="overview">
        <p>This is the overview section. You can provide a summary here.</p>
      </TabContent>
      <TabContent value="settings">
        <p>
          Settings go here. You can add inputs or toggles for user preferences.
        </p>
      </TabContent>
      <TabContent value="billing">
        <p>Billing information, invoices, or payment methods live here.</p>
      </TabContent>
    </Tabs>
  )
}
