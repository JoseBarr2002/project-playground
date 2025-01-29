import { Input } from "@components/ui/input"
import { FormField } from "./formField"

export function MilitaryService() {
  return (
    <div className="space-y-4">
      <h3 className="font-medium">Military Service</h3>
      <div className="grid gap-4 md:grid-cols-2">
        <FormField label="Military Branch">
          <Input id="militaryBranch" />
        </FormField>
        <FormField label="Military - Active Duty (Y or N)">
          <Input id="activeDuty" />
        </FormField>
        <FormField label="Military - Reserves, National Guard, or Texas State Guard (Y or N)">
          <Input id="reserves" />
        </FormField>
      </div>
    </div>
  )
}

