import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Button } from "@components/ui/button"
import { Input } from "@components/ui/input"
import { ScrollArea } from "@components/ui/scroll-area"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@components/ui/dropdown-menu"
import { MoreVertical, Send, InfoIcon } from "lucide-react"
import type { Message } from "./mockData"

interface ChatViewProps {
  selectedCustomer: string
  messages: Message[]
}

export function ChatView({ selectedCustomer, messages }: ChatViewProps) {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <div>
          <CardTitle>{selectedCustomer}</CardTitle>
          <p className="text-sm text-muted-foreground">
            Last message:{" "}
            {new Date(messages[messages.length - 1]?.created).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View History</DropdownMenuItem>
            <DropdownMenuItem>Mark as Read</DropdownMenuItem>
            <DropdownMenuItem>Export Conversation</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <ScrollArea className="h-[400px] pr-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "Customer"
                      ? "justify-start"
                      : message.sender === "System"
                        ? "justify-center"
                        : "justify-end"
                  }`}
                >
                  {message.sender === "System" ? (
                    <div className="bg-muted/50 rounded-lg p-3 text-sm text-center text-muted-foreground">
                      <InfoIcon className="h-4 w-4 inline-block mr-2" />
                      {message.message}
                    </div>
                  ) : (
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === "Customer" ? "bg-muted" : "bg-primary text-primary-foreground"
                      }`}
                    >
                      <p>{message.message}</p>
                      <span className="text-xs opacity-70 mt-1 block">
                        {new Date(message.created).toLocaleTimeString()}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="flex items-center gap-2 pt-4 border-t">
            <Input placeholder="Type your message..." className="flex-1" />
            <Button>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

