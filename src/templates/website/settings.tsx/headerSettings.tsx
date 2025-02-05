import { Button } from "@components/ui/button"
import { Label } from "@components/ui/label"
import { RadioGroup, RadioGroupItem } from "@components/ui/radio-group"
import { Switch } from "@components/ui/switch"
import { Textarea } from "@components/ui/textarea"
import { Upload } from "lucide-react"
import { SectionCard } from "./sectionCard"

export function HeaderSettings() {
  return (
    <>
      <SectionCard title="Header Options" description="Configure your site's header appearance">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Sticky Header</Label>
            <p className="text-sm text-muted-foreground">Keep the header visible while scrolling</p>
          </div>
          <Switch />
        </div>
      </SectionCard>

      <SectionCard title="Logo" description="Upload and configure your site's logo">
        <div className="space-y-6">
          <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-8">
            <div className="text-center">
              <Upload className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
              <h3 className="mb-2 text-lg font-semibold">Upload Logo</h3>
              <p className="mb-4 text-sm text-muted-foreground">Drag and drop your logo here, or click to browse</p>
              <Button variant="secondary">Choose File</Button>
            </div>
          </div>
          <div className="space-y-4">
            <Label>Logo Size</Label>
            <RadioGroup defaultValue="medium" className="grid gap-4">
              {[
                { value: "small", label: "Small", desc: "Max 75px height" },
                { value: "medium", label: "Medium", desc: "Max 130px height" },
                { value: "large", label: "Large", desc: "Max 200px height" },
              ].map(({ value, label, desc }) => (
                <div key={value} className="flex items-center space-x-2 rounded-lg border p-4">
                  <RadioGroupItem value={value} id={value} />
                  <div className="flex-1">
                    <Label htmlFor={value}>{label}</Label>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Analytics" description="Add your Google Analytics tracking code">
        <Textarea placeholder="Paste your Google Analytics code here..." className="min-h-[100px] font-mono" />
      </SectionCard>
    </>
  )
}

