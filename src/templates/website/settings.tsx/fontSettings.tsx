import { Label } from "@components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"
import { SectionCard } from "./sectionCard"

export function FontSettings() {
  return (
    <SectionCard title="Font Settings" description="Choose the fonts that will be used throughout your site">
      <div className="grid gap-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label>Header Font</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Default (sans-serif)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default (sans-serif)</SelectItem>
                <SelectItem value="serif">Serif</SelectItem>
                <SelectItem value="mono">Monospace</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground">Used for headings and titles</p>
          </div>
          <div className="space-y-2">
            <Label>Body Font</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Default (sans-serif)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default (sans-serif)</SelectItem>
                <SelectItem value="serif">Serif</SelectItem>
                <SelectItem value="mono">Monospace</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground">Used for regular text</p>
          </div>
        </div>
        <div className="rounded-lg border bg-muted/50 p-4">
          <h3 className="text-2xl mb-2">Preview</h3>
          <p className="text-muted-foreground">This is how your selected fonts will look on your site.</p>
        </div>
      </div>
    </SectionCard>
  )
}

