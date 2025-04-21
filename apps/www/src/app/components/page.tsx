import NextLink from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Checkbox,
  cx,
  Input,
  Link,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectGroup,
  SelectItem,
  SelectLabel,
  TabContent,
  TabList,
  Tabs,
  TabTrigger,
} from "@bun-ui/react"

export default function ComponentsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-12 px-4 py-12">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">🧩 Components Showcase</h1>
        <p className="text-muted-foreground">
          A visual playground for testing and previewing all components from{" "}
          <code>@bun-ui/react</code>. This page will evolve into full component
          docs.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* Button */}
        <ComponentCard title="Button" description="A basic button component.">
          <Button>Click me</Button>
        </ComponentCard>

        {/* Input */}
        <ComponentCard
          title="Input"
          description="Input with an optional label."
        >
          <Input label="Your name" className="w-full" />
        </ComponentCard>

        {/* Checkbox */}
        <ComponentCard
          title="Checkbox"
          description="A simple labeled checkbox."
        >
          <Checkbox defaultChecked label="Accept terms" />
        </ComponentCard>

        {/* Radio Group */}
        <ComponentCard
          title="Radio Group"
          description="Radio group with labeled options."
        >
          <RadioGroup defaultValue="option1" className="space-y-2">
            <RadioGroupItem id="radio-1" value="option1" label="Option One" />
            <RadioGroupItem id="radio-2" value="option2" label="Option Two" />
          </RadioGroup>
        </ComponentCard>
        <ComponentCard
          title="Select (Basic)"
          description="A basic select input allowing users to choose one fruit from the list."
        >
          {/* Select - Basic */}
          <Select
            placeholder="Choose a fruit"
            label="Fruit Selection"
            menuPosition="popper"
          >
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="mango">Mango</SelectItem>
            <SelectItem value="orange">Orange</SelectItem>
          </Select>
        </ComponentCard>
        {/* Select - Grouped Sections */}
        <ComponentCard
          title="Select (Grouped)"
          description="A select input with logically grouped options for programming languages."
        >
          <Select
            placeholder="Choose a language"
            label="Language Selection"
            menuPosition="popper"
          >
            <SelectGroup>
              <SelectLabel>Frontend</SelectLabel>
              <SelectItem value="javascript">JavaScript</SelectItem>
              <SelectItem value="typescript">TypeScript</SelectItem>
              <SelectItem value="html">HTML</SelectItem>
              <SelectItem value="css">CSS</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Backend</SelectLabel>
              <SelectItem value="python">Python</SelectItem>
              <SelectItem value="go">Go</SelectItem>
              <SelectItem value="java">Java</SelectItem>
              <SelectItem value="ruby">Ruby</SelectItem>
            </SelectGroup>
          </Select>
        </ComponentCard>

        {/* Tabs */}
        <ComponentCard
          title="Tabs"
          description="Switch between different views or sections of related content."
        >
          <Tabs defaultValue="account">
            <TabList>
              <TabTrigger value="account" className="mr-2">
                Account
              </TabTrigger>
              <TabTrigger value="billing">Billing</TabTrigger>
            </TabList>

            <TabContent value="account">
              <div className="mt-4 h-[17rem] space-y-2">
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
              <div className="mt-4 h-[17rem] space-y-2">
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
                </div>
                <Button className="mt-2" variant="outline">
                  Update Billing
                </Button>
              </div>
            </TabContent>
          </Tabs>
        </ComponentCard>

        <ComponentCard
          title="Accordion"
          description="A simple accordion component"
        >
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem disabled value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ComponentCard>
        <ComponentCard title="Dialog" description="A simple dialog component.">
          <div className="flex gap-2">
            <Link href="#">click me</Link>
            <Link disabled href="#">
              click me
            </Link>
            <Link asChild>
              <NextLink href="/">Home</NextLink>
            </Link>
          </div>
        </ComponentCard>
      </div>
    </div>
  )
}

function ComponentCard({
  title,
  description,
  children,
  className,
}: {
  title: string
  description: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cx(
        "bg-background rounded-2xl border p-6 shadow-sm transition-all hover:shadow-md",
        className
      )}
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-muted-foreground mb-4 text-sm">{description}</p>
      <div className={"space-y-2"}>{children}</div>
    </div>
  )
}
