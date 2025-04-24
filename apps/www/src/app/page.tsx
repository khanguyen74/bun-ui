import NextLink from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Checkbox,
  Input,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectItem,
  Switch,
  TabContent,
  TabList,
  Tabs,
  TabTrigger,
} from "@bun-ui/react"

import { ComponentCard } from "@/components/component-card"

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="py-16 text-center">
        <h1 className="text-4xl font-bold">Welcome to Bun-UI</h1>
        <p className="mt-4 text-lg">
          Build beautiful, accessible, and reusable components effortlessly.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Button asChild>
            <NextLink href="/docs">Get Started</NextLink>
          </Button>
          <Button asChild variant="secondary">
            <NextLink href="/components">Explore Components</NextLink>
          </Button>
        </div>
      </div>

      {/* Features Section */}
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

      {/* Components Showcase */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-center text-2xl font-bold">Component Showcase</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Button */}
            <ComponentCard>
              <h3 className="text-lg font-semibold">Button</h3>
              <Button>Click Me</Button>
            </ComponentCard>

            {/* Input */}
            <ComponentCard>
              <h3 className="text-lg font-semibold">Input</h3>
              <Input label="Your Name" placeholder="Enter your name" />
            </ComponentCard>

            {/* Checkbox */}
            <ComponentCard>
              <h3 className="text-lg font-semibold">Checkbox</h3>
              <Checkbox label="I agree to the terms" />
            </ComponentCard>

            {/* Radio Group */}
            <ComponentCard>
              <h3 className="text-lg font-semibold">Radio Group</h3>
              <RadioGroup defaultValue="option-1">
                <RadioGroupItem value="option-1" label="Option 1" />
                <RadioGroupItem value="option-2" label="Option 2" />
              </RadioGroup>
            </ComponentCard>

            {/* Select */}
            <ComponentCard>
              <h3 className="text-lg font-semibold">Select</h3>
              <Select placeholder="Choose an option">
                <SelectItem value="option-1">Option 1</SelectItem>
                <SelectItem value="option-2">Option 2</SelectItem>
              </Select>
            </ComponentCard>

            {/* Switch */}
            <ComponentCard>
              <h3 className="text-lg font-semibold">Switch</h3>
              <Switch label="Enable Feature" />
            </ComponentCard>

            {/* Tabs */}
            <ComponentCard>
              <h3 className="text-lg font-semibold">Tabs</h3>
              <Tabs defaultValue="tab-1">
                <TabList>
                  <TabTrigger value="tab-1">Tab 1</TabTrigger>
                  <TabTrigger value="tab-2">Tab 2</TabTrigger>
                </TabList>
                <TabContent value="tab-1">
                  <p>Content for Tab 1</p>
                </TabContent>
                <TabContent value="tab-2">
                  <p>Content for Tab 2</p>
                </TabContent>
              </Tabs>
            </ComponentCard>

            {/* Accordion */}
            <ComponentCard>
              <h3 className="text-lg font-semibold">Accordion</h3>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is Bun-UI?</AccordionTrigger>
                  <AccordionContent>
                    Bun-UI is a modern, lightweight UI library.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </ComponentCard>
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
