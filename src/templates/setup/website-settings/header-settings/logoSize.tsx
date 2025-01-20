import { Label } from "@components/ui/label"
import { RadioGroup, RadioGroupItem } from "@components/ui/radio-group"

export function LogoSize() {
  return (
    <div>
      <Label className="text-base font-medium">Logo Size</Label>
      <RadioGroup defaultValue="medium" className="mt-2">
        <div className="grid gap-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="small" id="small" />
            <Label htmlFor="small">Small (max 75px height)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="medium" id="medium" />
            <Label htmlFor="medium">Medium (max 130px height)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="large" id="large" />
            <Label htmlFor="large">Large (max 200px height)</Label>
          </div>
        </div>
      </RadioGroup>
    </div>
  )
}

