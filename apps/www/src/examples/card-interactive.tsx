import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Progress,
  Switch,
  Toggle,
} from "@bun-ui/react"
import { MoreVertical, Star } from "lucide-react"

export const CardInteractive = () => {
  return (
    <Card className="w-[400px]">
      <CardHeader className="justify-between">
        <div className="flex items-center gap-2">
          <Checkbox className="mr-5" color="neutral" />
          <div>
            <h3 className="text-lg font-semibold">Design System</h3>
            <p className="text-muted-foreground text-sm">
              Last updated 2 hours ago
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Toggle
            size="sm"
            className="text-foreground group h-8 w-8 p-0 not-hover:data-[state=on]:bg-transparent"
          >
            <Star className="h-4 w-4 group-data-[state=on]:fill-yellow-500 group-data-[state=on]:text-yellow-500" />
          </Toggle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size="sm"
                variant="text"
                color="neutral"
                className="h-8 w-8 p-0"
              >
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Share</DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium">Progress</p>
              <p className="text-muted-foreground text-sm">75% completed</p>
            </div>
            <Progress value={75} className="w-24" color="neutral" />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium">Team Members</p>
              <div className="flex -space-x-2">
                <Avatar className="border-background h-6 w-6 border-2">
                  <AvatarImage src="/avatar.png" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Avatar className="border-background h-6 w-6 border-2">
                  <AvatarImage src="/avatar.png" />
                  <AvatarFallback>AS</AvatarFallback>
                </Avatar>
                <Avatar className="border-background h-6 w-6 border-2">
                  <AvatarImage src="/avatar.png" />
                  <AvatarFallback>RK</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <Button size="sm" color="neutral" variant="outlined">
              View Details
            </Button>
          </div>
          <div className="flex items-center justify-between border-t pt-4">
            <div className="flex items-center gap-2">
              <Switch />
              <span className="text-sm">Auto-save</span>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outlined">
                Share
              </Button>
              <Button size="sm">Save Changes</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
