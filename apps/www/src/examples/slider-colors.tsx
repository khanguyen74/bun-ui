import { Slider } from "@bun-ui/react"

export const SliderColors = () => (
  <div className="flex w-full flex-col gap-y-4">
    <Slider defaultValue={50} />
    <Slider defaultValue={50} color="secondary" />
    <Slider defaultValue={50} color="neutral" />
  </div>
)
