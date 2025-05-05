"use client"

import { useState } from "react"
import {
  Button,
  cx,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  RadioGroup,
  RadioGroupItem,
} from "@bun-ui/react"

export const DrawerDirections = () => {
  const [direction, setDirection] = useState("right")

  return (
    <div className="flex flex-col gap-4">
      <RadioGroup value={direction} onValueChange={setDirection}>
        <RadioGroupItem value="left" label="Left" />
        <RadioGroupItem value="right" label="Right" />
      </RadioGroup>
      <Drawer direction={direction as "left" | "right"}>
        <DrawerTrigger asChild>
          <Button>Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent
          showDragHandle={false}
          className={cx(
            "top-0",
            direction === "left" ? "right-auto left-0" : "right-0 left-auto"
          )}
        >
          <DrawerHeader>
            <DrawerTitle>Drawer Title</DrawerTitle>
            <DrawerDescription>This is a drawer description.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <p>Here is the drawer body content.</p>
          </div>
          <DrawerFooter>
            <Button>Continue</Button>
            <DrawerClose asChild>
              <Button variant="outlined">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
