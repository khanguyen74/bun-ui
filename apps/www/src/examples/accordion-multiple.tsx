import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@bun-ui/react"

export function AccordionMultiple() {
  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Open multiple at once?</AccordionTrigger>
        <AccordionContent>
          Yup! When type=&quot;multiple&quot;, users can expand more than one
          item at a time.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Is this helpful?</AccordionTrigger>
        <AccordionContent>
          Super helpful for FAQs or anything where users may want to browse more
          than one section.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
