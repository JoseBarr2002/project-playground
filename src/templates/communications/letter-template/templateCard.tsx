import { Card } from "@components/ui/card"
import { Button } from "@components/ui/button"
import { Badge } from "@components/ui/badge"
import { Mail, MessageSquare, Printer, ChevronRight, Edit, Trash2 } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@components/ui/tooltip"
import type { LetterTemplate } from "./ILetterTemplate"
import React from "react" // Import React

interface TemplateCardProps {
  template: LetterTemplate
  onDelete: () => void
}

export function TemplateCard({ template, onDelete }: TemplateCardProps) {
  return (
    <Card className="p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="space-y-2 flex-grow">
          <h3 className="font-medium">{template.title}</h3>
          <p className="text-sm text-muted-foreground">{template.description}</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{template.category}</Badge>
            <Badge variant={template.is_active ? "default" : "outline"}>
              {template.is_active ? "Active" : "Inactive"}
            </Badge>
          </div>
        </div>
        <TemplateTypeIcons template={template} />
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Edit className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={onDelete}>
            <Trash2 className="h-4 w-4" />
          </Button>
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </div>
      </div>
    </Card>
  )
}

function TemplateTypeIcons({ template }: { template: LetterTemplate }) {
  return (
    <div className="flex items-center gap-6">
      <TemplateTypeIcon
        type="email"
        enabled={template.template_type.includes("email")}
        icon={<Mail className="h-5 w-5" />}
      />
      <TemplateTypeIcon
        type="sms"
        enabled={template.template_type.includes("sms")}
        icon={<MessageSquare className="h-5 w-5" />}
      />
      <TemplateTypeIcon
        type="postcard"
        enabled={template.template_type.includes("postcard")}
        icon={<Printer className="h-5 w-5" />}
      />
    </div>
  )
}

function TemplateTypeIcon({ type, enabled, icon }: { type: string; enabled: boolean; icon: React.ReactNode }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center gap-2">
            {React.cloneElement(icon as React.ReactElement, {
              className: `h-5 w-5 ${enabled ? "text-orange-600" : "text-gray-300"}`,
            })}
            <span className="text-sm text-muted-foreground">{type.charAt(0).toUpperCase() + type.slice(1)}</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>
            {enabled
              ? `${type.charAt(0).toUpperCase() + type.slice(1)} enabled`
              : `${type.charAt(0).toUpperCase() + type.slice(1)} disabled`}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

