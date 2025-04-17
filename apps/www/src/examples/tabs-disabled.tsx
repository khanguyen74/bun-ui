import { TabContent, TabList, Tabs, TabTrigger } from "@bun-ui/react"

export function TabsDisabled() {
  return (
    <Tabs defaultValue="active">
      <TabList>
        <TabTrigger value="active">Active Tab</TabTrigger>
        <TabTrigger value="disabled" disabled>
          Disabled Tab
        </TabTrigger>
      </TabList>
      <TabContent value="active">
        <p>This tab is active and interactive.</p>
      </TabContent>
      <TabContent value="disabled">
        <p>
          You shouldn&apos;t see this unless you change the default value
          manually.
        </p>
      </TabContent>
    </Tabs>
  )
}
