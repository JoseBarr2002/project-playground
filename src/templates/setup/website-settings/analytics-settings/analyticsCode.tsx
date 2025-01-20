import { Label } from "@components/ui/label"
import { Textarea } from "@components/ui/textarea"

export function AnalyticsCode() {
  return (
    <div className="space-y-2">
      <Label>Google Analytics Code</Label>
      <Textarea placeholder="Paste your Google Analytics code here" className="min-h-[150px] font-mono text-sm" />
      <p className="text-sm text-muted-foreground">
        If you have a Google Analytics account, paste the code snippet here and it will be included on each page of your
        site.
      </p>
    </div>
  )
}

