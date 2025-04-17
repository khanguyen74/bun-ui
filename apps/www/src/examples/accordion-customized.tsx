import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@bun-ui/react"
import { ChevronRight, Info } from "lucide-react"

export function AccordionCustomized() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="flex items-center gap-3 rounded-md bg-slate-100 px-4 py-3 text-left text-base font-semibold text-black hover:bg-slate-200">
          <Info className="h-5 w-5 text-blue-600" />
          What makes this UI custom?
        </AccordionTrigger>
        <AccordionContent className="rounded-b-md bg-slate-50 px-4 py-3 text-gray-700">
          This accordion uses custom padding, background colors, and icons to
          create a unique experience tailored to your brand or app.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger className="flex items-center gap-3 rounded-md bg-yellow-100 px-4 py-3 text-left text-base font-semibold text-black hover:bg-yellow-200">
          <ChevronRight className="h-4 w-4 text-yellow-600" />
          Can I use dynamic data?
        </AccordionTrigger>
        <AccordionContent className="rounded-b-md bg-yellow-50 px-4 py-3 text-yellow-800">
          Absolutely. You can render these from an array of FAQ objects or
          anything dynamic.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
