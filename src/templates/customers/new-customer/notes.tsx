import { Textarea } from "@components/ui/textarea"
import { FormSection } from "./formSection"
import { FormField } from "./formField"

export function Notes() {
  return (
    <FormSection title="Notes">
      <div className="grid gap-4">
        <FormField label="Internal Notes">
          <Textarea id="internalNotes" rows={4} placeholder="These notes are only visible to internal staff." />
        </FormField>
        <FormField label="Customer Notes">
          <Textarea id="customerNotes" rows={4} placeholder="These notes are visible to the customer." />
        </FormField>
      </div>
    </FormSection>
  )
}

