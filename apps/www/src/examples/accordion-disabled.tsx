import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@bun-ui/react"

export function AccordionDisabled() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Enabled Section</AccordionTrigger>
        <AccordionContent>This section works just fine.</AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" disabled>
        <AccordionTrigger>Disabled Section</AccordionTrigger>
        <AccordionContent>
          You won&apos;t see this content unless the item is enabled.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
