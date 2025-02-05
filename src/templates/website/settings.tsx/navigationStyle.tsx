import { Label } from "@components/ui/label"
import { RadioGroup, RadioGroupItem } from "@components/ui/radio-group"
import { SectionCard } from "./sectionCard"

export function NavigationStyle() {
  return (
    <SectionCard title="Navigation Style" description="Choose how your site's navigation menu will appear">
      <RadioGroup defaultValue="pills" className="grid sm:grid-cols-2 gap-4">
        <div className="flex items-center space-x-2 rounded-lg border p-4">
          <RadioGroupItem value="simple" id="simple" />
          <Label htmlFor="simple" className="flex-1">
            Simple
          </Label>
        </div>
        <div className="flex items-center space-x-2 rounded-lg border p-4">
          <RadioGroupItem value="tabs" id="tabs" />
          <Label htmlFor="tabs" className="flex-1">
            Tabs
          </Label>
        </div>
        <div className="flex items-center space-x-2 rounded-lg border p-4">
          <RadioGroupItem value="pills" id="pills" />
          <Label htmlFor="pills" className="flex-1">
            Pills
          </Label>
        </div>
        <div className="flex items-center space-x-2 rounded-lg border p-4">
          <RadioGroupItem value="full" id="full" />
          <Label htmlFor="full" className="flex-1">
            Full Width
          </Label>
        </div>
      </RadioGroup>
    </SectionCard>
  )
}

