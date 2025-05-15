import { Card, CardContent, CardHeader } from "@bun-ui/react"

export const CardBasic = () => {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-lg font-semibold">Card Title</h3>
      </CardHeader>
      <CardContent>
        <p>Card content goes here</p>
      </CardContent>
    </Card>
  )
}
