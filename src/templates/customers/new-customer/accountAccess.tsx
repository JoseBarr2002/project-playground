import { Input } from "@components/ui/input"
import { FormSection } from "./formSection"
import { FormField } from "./formField"

export function AccountAccess() {
  return (
    <FormSection title="Account & Access">
      <div className="grid gap-4 md:grid-cols-2">
        <FormField label="Username">
          <Input id="username" required />
        </FormField>
        <FormField label="Password">
          <Input id="password" type="password" required />
        </FormField>
      </div>
    </FormSection>
  )
}

