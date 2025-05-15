import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@bun-ui/react"

export const CardFooterExample = () => {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-lg font-semibold">Card Title</h3>
      </CardHeader>
      <CardContent>
        <p>Card content goes here</p>
      </CardContent>
      <CardFooter>
        <Button size="sm">Action</Button>
      </CardFooter>
    </Card>
  )
}
