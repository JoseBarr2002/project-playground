export interface Message {
    id: string
    customer: string
    message: string
    created: string
    sender: "Customer" | "Agent" | "System"
    status: "sent" | "received" | "system"
  }
  
  export const mockMessages: Message[] = [
    {
      id: "1",
      customer: "Emma Rodriguez",
      message: "Hi, I need to reschedule my appointment for next week",
      created: "2024-01-10T09:23:15",
      sender: "Customer",
      status: "received",
    },
    {
      id: "2",
      customer: "Michael Chen",
      message: "Is there a waiting list for the new program?",
      created: "2024-01-10T10:45:32",
      sender: "Customer",
      status: "received",
    },
    {
      id: "3",
      customer: "Sarah Johnson",
      message: "Thanks for following up. The issue has been resolved.",
      created: "2024-01-10T11:17:44",
      sender: "Customer",
      status: "received",
    },
    {
      id: "4",
      customer: "Emma Rodriguez",
      message: "I can help you reschedule. What days work best for you?",
      created: "2024-01-10T09:25:00",
      sender: "Agent",
      status: "sent",
    },
    {
      id: "5",
      customer: "System",
      message: "Text messaging service activated",
      created: "2024-01-01T00:00:00",
      sender: "System",
      status: "system",
    },
  ]
  
  export const mockStats = {
    messagesToday: 247,
    messagesTodayChange: 5,
    responseRate: 98,
    averageResponseTime: 4.2,
    activeConversations: 18,
  }
  
  