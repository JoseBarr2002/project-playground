import { Label } from "@components/ui/label"
import { RadioGroup, RadioGroupItem } from "@components/ui/radio-group"

export function NavigationStyle() {
  return (
    <div>
      <Label className="text-base font-medium">Navigation Style</Label>
      <RadioGroup defaultValue="pills" className="mt-4">
        <div className="grid gap-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="simple" id="r-simple" />
            <Label htmlFor="r-simple">Simple</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="tabs" id="r-tabs" />
            <Label htmlFor="r-tabs">Tabs</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="pills" id="r-pills" />
            <Label htmlFor="r-pills">Pills</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="full" id="r-full" />
            <Label htmlFor="r-full">Full Width</Label>
          </div>
        </div>
      </RadioGroup>
    </div>
  )
}

