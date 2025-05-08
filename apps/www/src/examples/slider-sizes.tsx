import { Slider } from "@bun-ui/react"

export const SliderSizes = () => (
  <div className="flex w-full flex-col gap-y-4">
    <Slider defaultValue={30} size="sm" />
    <Slider defaultValue={30} />
    <Slider defaultValue={30} size="lg" />
  </div>
)
