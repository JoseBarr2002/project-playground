import { Card, CardContent, CardHeader } from "@components/ui/card"
import { Input } from "@components/ui/input"
import { Button } from "@components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs"
import { ScrollArea } from "@components/ui/scroll-area"
import { Search, Filter } from "lucide-react"
import type { Message } from "./mockData"

interface MessageListProps {
  messages: Message[]
  onSelectMessage: (message: Message) => void
}

export function MessageList({ messages, onSelectMessage }: MessageListProps) {
  return (
    <Card className="min-h-[600px] flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <Input
            placeholder="Search messages..."
            className="flex-1"
            prefix={<Search className="h-4 w-4 text-muted-foreground" />}
          />
          <Button variant="ghost" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0 flex-grow">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full justify-start px-6 pb-2">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="unread">Unread</TabsTrigger>
            <TabsTrigger value="sent">Sent</TabsTrigger>
          </TabsList>
          <ScrollArea className="h-full">
            <TabsContent value="all" className="m-0 flex flex-col h-full">
              {messages.map((message) => (
                <button
                  key={message.id}
                  className="flex flex-col justify-center w-full text-left p-4 border-b hover:bg-muted/50 transition-colors flex-grow"
                  onClick={() => onSelectMessage(message)}
                >
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold">{message.customer}</span>
                    <span className="text-xs text-muted-foreground">
                      {new Date(message.created).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{message.message}</p>
                </button>
              ))}
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </CardContent>
    </Card>
  )
}

