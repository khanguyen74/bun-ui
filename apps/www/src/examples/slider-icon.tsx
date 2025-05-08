import { Slider } from "@bun-ui/react"
import { Tally4 } from "lucide-react"

export const SliderIcon = () => (
  <Slider minSliderThumb={<Tally4 className="h-3 w-3" />} />
)
