import { TemplateCard } from "./templateCard"
import type { LetterTemplate } from "./ILetterTemplate"

interface TemplateListProps {
  templates: LetterTemplate[]
  onDeleteTemplate: (id: string) => void
}

export function TemplateList({ templates, onDeleteTemplate }: TemplateListProps) {
  return (
    <div className="grid gap-4">
      {templates.map((template) => (
        <TemplateCard key={template.id} template={template} onDelete={() => onDeleteTemplate(template.id)} />
      ))}
    </div>
  )
}

