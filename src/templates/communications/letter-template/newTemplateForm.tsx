import { useState } from "react"
import { Button } from "@components/ui/button"
import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"
import { Textarea } from "@components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"
import { Switch } from "@components/ui/switch"
import type { LetterTemplate } from "./ILetterTemplate"

interface NewTemplateFormProps {
  onSubmit: (template: LetterTemplate) => void
}

export function NewTemplateForm({ onSubmit }: NewTemplateFormProps) {
  const [template, setTemplate] = useState<Partial<LetterTemplate>>({
    title: "",
    description: "",
    email_subject: "",
    email_content: "",
    sms_content: "",
    postcard_content: "",
    template_type: "email_only",
    is_active: true,
    available_placeholders: "[]",
    category: "general",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setTemplate((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string) => (value: string) => {
    setTemplate((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      ...template,
      id: Date.now().toString(),
      usage_count: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    } as LetterTemplate)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormField label="Template Title" name="title" value={template.title} onChange={handleChange} required />
      <FormField label="Description" name="description" value={template.description} onChange={handleChange} textarea />
      <FormField label="Email Subject" name="email_subject" value={template.email_subject} onChange={handleChange} />
      <FormField
        label="Email Content"
        name="email_content"
        value={template.email_content}
        onChange={handleChange}
        textarea
      />
      <FormField label="SMS Content" name="sms_content" value={template.sms_content} onChange={handleChange} textarea />
      <FormField
        label="Postcard Content"
        name="postcard_content"
        value={template.postcard_content}
        onChange={handleChange}
        textarea
      />

      <FormSelect
        label="Template Type"
        name="template_type"
        value={template.template_type}
        onChange={handleSelectChange("template_type")}
        options={[
          { value: "email_only", label: "Email Only" },
          { value: "sms_only", label: "SMS Only" },
          { value: "postcard_only", label: "Postcard Only" },
          { value: "email_sms", label: "Email & SMS" },
          { value: "all", label: "All" },
        ]}
      />

      <FormSelect
        label="Category"
        name="category"
        value={template.category}
        onChange={handleSelectChange("category")}
        options={[
          { value: "payment", label: "Payment" },
          { value: "late_notice", label: "Late Notice" },
          { value: "maintenance", label: "Maintenance" },
          { value: "general", label: "General" },
          { value: "marketing", label: "Marketing" },
          { value: "legal", label: "Legal" },
        ]}
      />

      <div className="flex items-center space-x-2">
        <Switch
          id="is_active"
          checked={template.is_active}
          onCheckedChange={(checked) => setTemplate((prev) => ({ ...prev, is_active: checked }))}
        />
        <Label htmlFor="is_active">Active</Label>
      </div>

      <Button type="submit" size="sm">Create Template</Button>
    </form>
  )
}

interface FormFieldProps {
  label: string
  name: string
  value?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  required?: boolean
  textarea?: boolean
}

function FormField({ label, name, value, onChange, required, textarea }: FormFieldProps) {
  const InputComponent = textarea ? Textarea : Input
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <InputComponent id={name} name={name} value={value} onChange={onChange} required={required} />
    </div>
  )
}

interface FormSelectProps {
  label: string
  name: string
  value?: string
  onChange: (value: string) => void
  options: { value: string; label: string }[]
}

function FormSelect({ label, name, value, onChange, options }: FormSelectProps) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Select onValueChange={onChange} value={value}>
        <SelectTrigger>
          <SelectValue placeholder={`Select ${label.toLowerCase()}`} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

