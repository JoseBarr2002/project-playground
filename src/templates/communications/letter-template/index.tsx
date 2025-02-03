import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs"
import { Breadcrumb } from "./breadcrumb"
import { PageHeader } from "./header"
import { TemplateList } from "./templateList"
import type { LetterTemplate } from "./ILetterTemplate"

export default function LetterTemplateTemplate() {
  const [searchTerm, setSearchTerm] = useState("")
  const [templates, setTemplates] = useState<LetterTemplate[]>(sampleTemplates)

  const filteredTemplates = templates.filter(
    (template) =>
      template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleDeleteTemplate = (id: string) => {
    setTemplates((prev) => prev.filter((template) => template.id !== id))
  }

  const handleAddTemplate = (newTemplate: LetterTemplate) => {
    setTemplates((prev) => [...prev, newTemplate])
  }

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <div className="mb-6">
        <Breadcrumb
          items={[
            { label: "Home", href: "/dashboard-1" },
            { label: "Communications", href: "/communications/print-batches" },
            { label: "Letter Templates", href: "/communications/letter-templates" },
          ]}
        />
      </div>

      <PageHeader
        title="Letter Templates"
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onAddTemplate={handleAddTemplate}
      />

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Templates</TabsTrigger>
          <TabsTrigger value="email">Email</TabsTrigger>
          <TabsTrigger value="sms">SMS</TabsTrigger>
          <TabsTrigger value="postcard">Postcard</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <TemplateList templates={filteredTemplates} onDeleteTemplate={handleDeleteTemplate} />
        </TabsContent>

        <TabsContent value="email">
          <TemplateList
            templates={filteredTemplates.filter((t) => ["email_only", "email_sms", "all"].includes(t.template_type))}
            onDeleteTemplate={handleDeleteTemplate}
          />
        </TabsContent>

        <TabsContent value="sms">
          <TemplateList
            templates={filteredTemplates.filter((t) => ["sms_only", "email_sms", "all"].includes(t.template_type))}
            onDeleteTemplate={handleDeleteTemplate}
          />
        </TabsContent>

        <TabsContent value="postcard">
          <TemplateList
            templates={filteredTemplates.filter((t) => ["postcard_only", "all"].includes(t.template_type))}
            onDeleteTemplate={handleDeleteTemplate}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}

const sampleTemplates: LetterTemplate[] = [
  {
    id: "1",
    title: "Welcome Email",
    description: "Sent to new customers upon registration",
    email_subject: "Welcome to Our Service!",
    email_content: "Dear {customer_name}, welcome to our service...",
    sms_content: "",
    postcard_content: "",
    template_type: "email_only",
    is_active: true,
    available_placeholders: '["customer_name"]',
    category: "general",
    usage_count: 150,
    created_at: "2023-01-01T00:00:00Z",
    updated_at: "2023-01-01T00:00:00Z",
  },
  {
    id: "2",
    title: "Payment Reminder",
    description: "Sent to customers with upcoming payments",
    email_subject: "Payment Reminder",
    email_content: "Dear {customer_name}, this is a reminder that your payment of ${amount} is due on {due_date}...",
    sms_content: "Payment reminder: ${amount} due on {due_date}. Please log in to your account to make a payment.",
    postcard_content: "",
    template_type: "email_sms",
    is_active: true,
    available_placeholders: '["customer_name", "amount", "due_date"]',
    category: "payment",
    usage_count: 500,
    created_at: "2023-02-15T00:00:00Z",
    updated_at: "2023-02-15T00:00:00Z",
  },
  // Add more sample templates as needed
]

