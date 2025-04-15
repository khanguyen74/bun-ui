import {
  Button,
  Checkbox,
  Input,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from "@bun-ui/react"

import { ComponentCard } from "@/components/component-card"

export default function ComponentsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-12 px-4 py-12">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">🧩 Components Showcase</h1>
        <p className="text-muted-foreground">
          A visual playground of all the components available in{" "}
          <code>@bun-ui/react</code>. This page will later evolve into full
          docs.
        </p>
      </div>

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
          <Input label="Your name" className="w-full" autoComplete="off" />
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
        {/* Select */}
        {/* Select - Basic Example */}
        <ComponentCard
          title="Select (Basic)"
          description="A basic select input allowing users to choose one fruit from the list."
        >
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
      </div>
    </div>
  )
}
