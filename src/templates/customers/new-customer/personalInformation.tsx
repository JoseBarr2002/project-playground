import { Input } from "@components/ui/input"
import { FormSection } from "./formSection"
import { FormField } from "./formField"

export function PersonalInformation() {
  return (
    <FormSection title="Personal Information">
      <div className="grid gap-4 md:grid-cols-2">
        <FormField label="Date of Birth">
          <Input id="dateOfBirth" type="date" />
        </FormField>
        <FormField label="Address" className="md:col-span-2">
          <Input id="address" required />
        </FormField>
        <FormField label="City">
          <Input id="city" required />
        </FormField>
        <FormField label="State">
          <Input id="state" required />
        </FormField>
        <FormField label="ZIP Code">
          <Input id="zipCode" required />
        </FormField>
      </div>
    </FormSection>
  )
}

