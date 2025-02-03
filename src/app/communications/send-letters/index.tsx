import { useState } from "react"
import { Button } from "@components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"
import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"
import { Textarea } from "@components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs"
import { Badge } from "@components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@components/ui/dialog"
import { Toast } from "@components/ui/toast"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@components/ui/tooltip"
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  Users,
  Mail,
  LayoutTemplateIcon as Template,
  Eye,
  AlertCircle,
} from "lucide-react"

export default function SendLettersTemplate() {
  const [recipients, setRecipients] = useState<string[]>([])
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState("")

  const handleAddRecipient = (recipient: string) => {
    if (!recipients.includes(recipient)) {
      setRecipients([...recipients, recipient])
    }
  }

  const handleRemoveRecipient = (recipient: string) => {
    setRecipients(recipients.filter((r) => r !== recipient))
  }

  const handleSendEmail = () => {
    if (recipients.length === 0) {
      setToastMessage("Please add at least one recipient.")
      setShowToast(true)
      return
    }
    if (!subject.trim()) {
      setToastMessage("Please enter a subject.")
      setShowToast(true)
      return
    }
    if (!message.trim()) {
      setToastMessage("Please enter a message.")
      setShowToast(true)
      return
    }
    // Here you would typically send the email
    console.log("Sending email:", { recipients, subject, message })
    setToastMessage("Email sent successfully!")
    setShowToast(true)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation
      <nav className="bg-gray-800 text-white p-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span>Dashboard</span>
          <span>Setup</span>
          <span>Units</span>
          <span>Customers</span>
          <span>Reports</span>
          <span>Email, Txt & Print</span>
          <span>Website</span>
        </div>
        <div className="flex items-center space-x-4">
          <Input type="search" placeholder="Search Customers" className="w-64 bg-white text-black" />
        </div>
      </nav> */}

      {/* Main Content */}
      <div className="container mx-auto py-6 px-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-orange-600">Send Email</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="recipients" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="recipients" className="space-x-2">
                  <Users className="h-4 w-4" />
                  <span>Recipients</span>
                </TabsTrigger>
                <TabsTrigger value="template" className="space-x-2">
                  <Template className="h-4 w-4" />
                  <span>Template</span>
                </TabsTrigger>
                <TabsTrigger value="compose" className="space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>Compose</span>
                </TabsTrigger>
              </TabsList>

              {/* Recipients Tab */}
              <TabsContent value="recipients" className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>From:</Label>
                    <Input value="110 Mini Storage <noreply@email-notifications.net>" disabled />
                  </div>
                  <div className="space-y-2">
                    <Label>Reply to:</Label>
                    <div className="flex items-center space-x-2">
                      <Input value="110MiniStorage@gmail.com" disabled />
                      <Button size="sm" variant="link" className="text-blue-500">
                        change
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 border rounded-lg p-4">
                  <div className="space-y-2">
                    <Label className="text-base font-semibold">Customer Selection</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Filter customers" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Active Customers</SelectItem>
                        <SelectItem value="inactive">Inactive Customers</SelectItem>
                        <SelectItem value="all">All Customers</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Select onValueChange={handleAddRecipient}>
                      <SelectTrigger className="flex-1">
                        <SelectValue placeholder="Select customers to add" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="customer1@example.com">Customer 1</SelectItem>
                        <SelectItem value="customer2@example.com">Customer 2</SelectItem>
                        <SelectItem value="customer3@example.com">Customer 3</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button size="sm" onClick={() => handleAddRecipient("customer@example.com")}>Add</Button>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {recipients.map((recipient, index) => (
                      <Badge key={index} variant="secondary" className="text-sm py-1 px-2">
                        {recipient}
                        <button
                          className="ml-2 text-red-500 hover:text-red-700"
                          onClick={() => handleRemoveRecipient(recipient)}
                        >
                          ×
                        </button>
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" variant="secondary" className="bg-teal-500 text-white hover:bg-teal-600">
                      Add All Filtered
                    </Button>
                    <Button size="sm" variant="destructive" onClick={() => setRecipients([])}>
                      Remove All
                    </Button>
                  </div>
                </div>
              </TabsContent>

              {/* Template Tab */}
              <TabsContent value="template" className="space-y-6">
                <div className="border rounded-lg p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="text-base font-semibold">Email Template</Label>
                      <p className="text-sm text-muted-foreground">Choose a template or create a custom email</p>
                    </div>
                    <Button size="sm" variant="secondary">Browse Templates</Button>
                  </div>

                  <Select
                    onValueChange={(value) => {
                      if (value === "welcome") {
                        setSubject("Welcome to 110 Mini Storage!")
                        setMessage(
                          "Dear valued customer,\n\nWelcome to 110 Mini Storage! We're excited to have you on board...",
                        )
                      }
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select template" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="custom">Custom Email</SelectItem>
                      <SelectItem value="welcome">Welcome Email</SelectItem>
                      <SelectItem value="payment">Payment Reminder</SelectItem>
                      <SelectItem value="notice">Important Notice</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </TabsContent>

              {/* Compose Tab */}
              <TabsContent value="compose" className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>
                      Subject <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      placeholder="Enter email subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>
                      Message <span className="text-red-500">*</span>
                    </Label>
                    <div className="border rounded-md">
                      <div className="flex items-center border-b p-2 gap-2 flex-wrap">
                        <Select defaultValue="paragraph">
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="paragraph">Paragraph</SelectItem>
                            <SelectItem value="heading1">Heading 1</SelectItem>
                            <SelectItem value="heading2">Heading 2</SelectItem>
                          </SelectContent>
                        </Select>
                        <Select defaultValue="12">
                          <SelectTrigger className="w-20">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="12">12pt</SelectItem>
                            <SelectItem value="14">14pt</SelectItem>
                            <SelectItem value="16">16pt</SelectItem>
                          </SelectContent>
                        </Select>
                        <div className="flex items-center gap-1">
                          <Button size="sm" variant="ghost">
                            <Bold className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Italic className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Underline className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-1">
                          <Button size="sm" variant="ghost" >
                            <AlignLeft className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost" >
                            <AlignCenter className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost" >
                            <AlignRight className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost" >
                            <List className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <Textarea
                        className="border-0 rounded-none min-h-[300px]"
                        placeholder="Enter your message here..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* Action Buttons */}
            <div className="flex justify-between items-center mt-6">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      Preview
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Preview your email before sending</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <div className="space-x-2">
                <Button size="sm" variant="outline">Save Draft</Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm" className="bg-blue-500 hover:bg-blue-600">Send Email</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Confirm Email Send</DialogTitle>
                    </DialogHeader>
                    <div className="py-4">
                      <p>Are you sure you want to send this email to {recipients.length} recipient(s)?</p>
                      <div className="mt-4 space-y-2">
                        <p>
                          <strong>Subject:</strong> {subject}
                        </p>
                        <p>
                          <strong>Message Preview:</strong> {message.slice(0, 100)}...
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button size="sm" variant="outline">Cancel</Button>
                      <Button size="sm" onClick={handleSendEmail} className="bg-blue-500 hover:bg-blue-600">
                        Confirm Send
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      {/* <footer className="bg-gray-800 text-white p-4 text-center text-sm">
        © 2025 110 Mini Storage. Powered by Easy Storage Solutions
      </footer> */}

      {/* Toast Notification */}
      {showToast && (
        <Toast
          variant={toastMessage.includes("successfully") ? "default" : "destructive"}
          className="fixed bottom-4 right-4 w-auto"
        >
          <div className="flex items-center space-x-2">
            {toastMessage.includes("successfully") ? <Mail className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
            <span>{toastMessage}</span>
          </div>
        </Toast>
      )}
    </div>
  )
}

