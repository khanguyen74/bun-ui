import NextLink from "next/link"
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Input,
  TabContent,
  TabList,
  Tabs,
  TabTrigger,
} from "@bun-ui/react"

import { ComponentCard } from "@/components/component-card"
import { InstallCommandButton } from "@/components/install-command-button"

const HomePage = () => {
  return (
    <div className="container">
      <div className="py-16">
        <h1 className="text-4xl font-bold">Welcome to Bun UI</h1>
        <p className="mt-4 text-xl">
          Build beautiful, accessible, and reusable React components
          effortlessly.
        </p>
        <div className="mt-6 flex items-center gap-10">
          <Button asChild className="text-base" size="lg">
            <NextLink href="/docs/installation">Get Started</NextLink>
          </Button>
          <InstallCommandButton />
        </div>
      </div>

      <section className="py-16">
        <div className="mx-auto text-center">
          <p className="mt-2">
            Build faster with pre-styled, accessible components.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
            <ComponentCard>
              <div className="flex h-36 items-center justify-center">
                <Button size="sm">Click Me</Button>
              </div>
              <p className="text-muted-foreground mt-8">Button</p>
            </ComponentCard>

            <ComponentCard>
              <div className="flex h-36 items-center justify-center">
                <Input placeholder="Enter text" />
              </div>
              <p className="text-muted-foreground mt-8">Input</p>
            </ComponentCard>

            <ComponentCard>
              <div className="flex h-36 items-center justify-center">
                <Tabs defaultValue="overview">
                  <TabList>
                    <TabTrigger value="overview">Overview</TabTrigger>
                    <TabTrigger value="settings">Settings</TabTrigger>
                    <TabTrigger value="billing">Billing</TabTrigger>
                  </TabList>
                  <TabContent value="overview">
                    <p>
                      This is the overview section. You can provide a summary
                      here.
                    </p>
                  </TabContent>
                  <TabContent value="settings">
                    <p>
                      Settings go here. You can add inputs or toggles for user
                      preferences.
                    </p>
                  </TabContent>
                  <TabContent value="billing">
                    <p>
                      Billing information, invoices, or payment methods live
                      here.
                    </p>
                  </TabContent>
                </Tabs>
              </div>
              <p className="text-muted-foreground mt-8">Tabs</p>
            </ComponentCard>
            <ComponentCard>
              <div className="flex h-36 items-center justify-center">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button>Open Menu</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Log out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <p className="text-muted-foreground mt-8">Menu</p>
            </ComponentCard>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold">Why Choose Bun-UI?</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold">Customizable</h3>
              <p>Easily adapt components to your design system.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Accessible</h3>
              <p>Built with accessibility in mind for all users.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Performant</h3>
              <p>Optimized for fast rendering and responsiveness.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 text-center">
        <h2 className="text-2xl font-bold">Ready to build amazing UIs?</h2>
        <Button asChild>
          <NextLink href="/docs">Start Now</NextLink>
        </Button>
      </footer>
    </div>
  )
}

export default HomePage
