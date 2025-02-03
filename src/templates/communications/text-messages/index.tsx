import { useState } from "react"
import { PageHeader } from "./pageHeader"
import { MessageList } from "./messageList"
import { ChatView } from "./chatView"
import { StatsCard } from "./statsCard"
import { mockMessages, mockStats } from "./mockData"

export default function TextMessagesTemplate() {
  const [selectedCustomer, setSelectedCustomer] = useState(mockMessages[0].customer)

  const handleSelectMessage = (message: (typeof mockMessages)[0]) => {
    setSelectedCustomer(message.customer)
  }

  const customerMessages = mockMessages.filter(
    (message) => message.customer === selectedCustomer || message.sender === "System",
  )

  return (
    <div className="container mx-auto py-6 max-w-6xl">
      <PageHeader title="Text Messages" description="Manage and send text messages to customers" />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-4">
          <MessageList
            messages={mockMessages.filter((m) => m.sender !== "System")}
            onSelectMessage={handleSelectMessage}
          />
        </div>
        <div className="col-span-8">
          <ChatView selectedCustomer={selectedCustomer} messages={customerMessages} />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-6">
        <StatsCard title="Messages Today" value={mockStats.messagesToday} change={mockStats.messagesTodayChange} />
        <StatsCard title="Response Rate" value={mockStats.responseRate} unit="%" />
        <StatsCard title="Active Conversations" value={mockStats.activeConversations} />
      </div>
    </div>
  )
}

