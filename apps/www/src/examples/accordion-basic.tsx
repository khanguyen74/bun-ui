import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@bun-ui/react"

export function AccordionBasic() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is Bun UI?</AccordionTrigger>
        <AccordionContent>
          Bun UI is a lightweight UI component library built for React projects,
          designed with Radix and Tailwind CSS under the hood.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes! It follows accessibility best practices using Radix primitives,
          and supports keyboard navigation and screen readers.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Can I customize styles?</AccordionTrigger>
        <AccordionContent>
          Absolutely. All components are unopinionated and easy to theme using
          Tailwind or your design tokens.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
