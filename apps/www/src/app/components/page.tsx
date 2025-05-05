"use client"

import NextLink from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertTitle,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Checkbox,
  Input,
  Link,
  Progress,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectGroup,
  SelectItem,
  SelectLabel,
  Skeleton,
  Spinner,
  Switch,
  TabContent,
  TabList,
  Tabs,
  TabTrigger,
  ToggleGroup,
  ToggleGroupItem,
} from "@bun-ui/react"
import { Calendar } from "@bun-ui/react/calendar"
import { useToast } from "@bun-ui/react/toast"
import { AlignCenter, AlignLeft, AlignRight } from "lucide-react"

import { ComponentCard } from "@/components/component-card"

export default function ComponentsPage() {
  const { createToast } = useToast()

  return (
    <div className="mx-auto max-w-5xl space-y-14 px-4 py-12">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          🧩 Component Gallery
        </h1>
        <p className="text-muted-foreground text-lg">
          Preview and interact with all available components from{" "}
          <code>@bun-ui/react</code>. Use this space as a sandbox or style
          reference while building.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <ComponentCard
          title="Button"
          description="Clickable elements for actions."
        >
          <div className="flex gap-2">
            <Button>Submit</Button>
            <Button variant="outlined" disabled>
              <Spinner size="sm" className="mr-2" color="current" />
              Loading
            </Button>
          </div>
        </ComponentCard>

        <ComponentCard
          title="Input"
          description="Text input for forms or data capture."
        >
          <Input label="Email Address" placeholder="you@example.com" />
        </ComponentCard>

        <ComponentCard title="Checkbox" description="Used for binary options.">
          <Checkbox defaultChecked label="I agree to the terms" />
        </ComponentCard>

        <ComponentCard
          title="Radio Group"
          description="Select one option from a set."
        >
          <RadioGroup defaultValue="light" className="space-y-2">
            <RadioGroupItem id="light" value="light" label="Light Mode" />
            <RadioGroupItem id="dark" value="dark" label="Dark Mode" />
          </RadioGroup>
        </ComponentCard>

        <ComponentCard
          title="Select (Basic)"
          description="A dropdown to pick a fruit."
        >
          <Select placeholder="Select fruit" label="Fruit">
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="grape">Grape</SelectItem>
          </Select>
        </ComponentCard>

        <ComponentCard
          title="Select (Grouped)"
          description="Grouped select options by category."
        >
          <Select placeholder="Select language" label="Programming Language">
            <SelectGroup>
              <SelectLabel>Frontend</SelectLabel>
              <SelectItem value="react">React</SelectItem>
              <SelectItem value="vue">Vue</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Backend</SelectLabel>
              <SelectItem value="node">Node.js</SelectItem>
              <SelectItem value="django">Django</SelectItem>
            </SelectGroup>
          </Select>
        </ComponentCard>

        <ComponentCard
          title="Tabs"
          description="Navigate between content sections."
        >
          <Tabs defaultValue="account">
            <TabList>
              <TabTrigger value="account">Account</TabTrigger>
              <TabTrigger value="billing">Billing</TabTrigger>
            </TabList>
            <TabContent value="account">
              <div className="mt-4 h-[21rem] space-y-2">
                <h3 className="text-lg font-semibold">Account Settings</h3>
                <p className="text-muted-foreground text-sm">
                  Update your personal information and change your password.
                </p>
                <div className="space-y-2">
                  <Input label="Name" placeholder="John Doe" />
                  <Input label="Email" placeholder="john@example.com" />
                </div>
                <Button className="mt-2">Save Changes</Button>
              </div>
            </TabContent>

            <TabContent value="billing">
              <div className="mt-4 h-[21rem] space-y-2">
                <h3 className="text-lg font-semibold">Billing Info</h3>
                <p className="text-muted-foreground text-sm">
                  Manage your payment methods and view invoices.
                </p>
                <div className="space-y-2">
                  <Input
                    label="Card Number"
                    placeholder="•••• •••• •••• 4242"
                    autoComplete="off"
                    autoCorrect="off"
                  />
                  <Input
                    label="Expiration Date"
                    placeholder="MM / YY"
                    autoComplete="off"
                    autoCorrect="off"
                  />
                  <Input
                    label="Billing Address"
                    placeholder="1234 Main St"
                    autoComplete="off"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Button className="mt-2" variant="outlined">
                    Update Billing
                  </Button>
                  <Button className="mt-2" variant="text">
                    View Invoices
                  </Button>
                </div>
              </div>
            </TabContent>
          </Tabs>
        </ComponentCard>

        <ComponentCard
          title="Accordion"
          description="Expandable content panels."
        >
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="faq1">
              <AccordionTrigger>What is Bun UI?</AccordionTrigger>
              <AccordionContent>
                Bun UI is a customizable component library designed for modern
                React apps.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq2">
              <AccordionTrigger>Is it customizable?</AccordionTrigger>
              <AccordionContent>
                Yes, all components support theming and utility class overrides.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ComponentCard>

        <ComponentCard
          title="Link"
          description="Text-based navigation and hyperlinks."
        >
          <div className="flex gap-4">
            <Link asChild>
              <NextLink href="/">Back to Home</NextLink>
            </Link>
          </div>
        </ComponentCard>

        <ComponentCard
          title="Switch"
          description="Toggle between enabled/disabled states."
        >
          <div className="flex gap-6">
            <Switch label="Enable feature" />
            <Switch label="Disabled toggle" disabled />
          </div>
        </ComponentCard>

        <ComponentCard
          title="Toast"
          description="Temporary message notification."
        >
          <Button
            onClick={() => createToast({ title: "Item saved successfully" })}
          >
            Show Toast
          </Button>
        </ComponentCard>

        <ComponentCard
          title="Alert"
          description="Prominent messages for feedback."
        >
          <Alert>
            <AlertTitle>Heads up!</AlertTitle>
          </Alert>
        </ComponentCard>

        <ComponentCard title="Spinner" description="Loading indicator.">
          <div className="flex items-center gap-4">
            <Spinner />
            <Spinner size="lg" color="primary" />
          </div>
        </ComponentCard>

        <ComponentCard
          title="Skeleton"
          description="Placeholder for loading content."
        >
          <div className="flex items-center gap-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-4 w-32" />
            </div>
          </div>
        </ComponentCard>

        <ComponentCard
          title="Toggle"
          description="Switch between layout modes."
        >
          <ToggleGroup defaultValue="left">
            <ToggleGroupItem value="left" aria-label="Align Left">
              <AlignLeft />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align Center">
              <AlignCenter />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align Right">
              <AlignRight />
            </ToggleGroupItem>
          </ToggleGroup>
        </ComponentCard>
        <ComponentCard title="Avatar">
          <div className="flex items-center gap-5">
            <Avatar>
              <AvatarImage src="/avatar.png" />
            </Avatar>
            <Avatar>
              <AvatarFallback>KN</AvatarFallback>
            </Avatar>
          </div>
        </ComponentCard>
        <ComponentCard title="Progress">
          <Progress value={20} />
        </ComponentCard>
        <ComponentCard title="Calendar">
          <div className="flex w-full items-center justify-center">
            <Calendar
              startMonth={
                new Date(new Date().getFullYear(), new Date().getMonth() - 5, 1)
              }
              showOutsideDays
            />
          </div>
        </ComponentCard>
      </div>
    </div>
  )
}
