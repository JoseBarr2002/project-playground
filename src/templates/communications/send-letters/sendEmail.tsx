import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs"
import { Users, Mail, LayoutTemplateIcon as Template } from "lucide-react"
import RecipientsTab from "./recipientsTab"
import TemplateTab from "./templateTab"
import ComposeTab from "./composeTab"
import ActionButtons from "./actionButtons"
import ToastNotification from "./toastNotifications"

export default function SendEmail() {
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

            <TabsContent value="recipients">
              <RecipientsTab
                recipients={recipients}
                onAddRecipient={handleAddRecipient}
                onRemoveRecipient={handleRemoveRecipient}
              />
            </TabsContent>

            <TabsContent value="template">
              <TemplateTab
                onTemplateSelect={(template) => {
                  if (template === "welcome") {
                    setSubject("Welcome to 110 Mini Storage!")
                    setMessage(
                      "Dear valued customer,\n\nWelcome to 110 Mini Storage! We're excited to have you on board...",
                    )
                  }
                }}
              />
            </TabsContent>

            <TabsContent value="compose">
              <ComposeTab
                subject={subject}
                message={message}
                onSubjectChange={setSubject}
                onMessageChange={setMessage}
              />
            </TabsContent>
          </Tabs>

          <ActionButtons
            onPreview={() => console.log("Preview")}
            onSaveDraft={() => console.log("Save Draft")}
            onSendEmail={handleSendEmail}
            recipients={recipients}
            subject={subject}
            message={message}
          />
        </CardContent>
      </Card>

      <ToastNotification show={showToast} message={toastMessage} onClose={() => setShowToast(false)} />
    </div>
  )
}

