"use client"

import { useEffect, useState } from "react"
import { Progress } from "@bun-ui/react"

export const ProgressBasic = () => {
  const [progress, setProgress] = useState(20)
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(60)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} />
}
