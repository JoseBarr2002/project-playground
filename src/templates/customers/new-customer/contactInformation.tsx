import { Input } from "@components/ui/input"
import { FormSection } from "./formSection"
import { FormField } from "./formField"

export function ContactInformation() {
  return (
    <FormSection title="Contact Information">
      <div className="grid gap-4 md:grid-cols-2">
        <FormField label="First Name">
          <Input id="firstName" required />
        </FormField>
        <FormField label="Last Name">
          <Input id="lastName" required />
        </FormField>
        <FormField label="Email">
          <Input id="email" type="email" required />
        </FormField>
        <FormField label="Phone">
          <Input id="phone" type="tel" required />
        </FormField>
      </div>
    </FormSection>
  )
}

