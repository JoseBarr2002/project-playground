import { Button } from "@components/ui/button"
import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"
import { Textarea } from "@components/ui/textarea"

export default function SEOSettings() {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold border-b pb-2">SEO Settings</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="meta-keywords">Keywords</Label>
            <Button variant="ghost" size="sm" className="h-8">
              Get suggestions
            </Button>
          </div>
          <Input id="meta-keywords" placeholder="Enter SEO keywords" />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="meta-description">Description</Label>
          <Textarea id="meta-description" placeholder="Enter a description for search engines" className="h-24" />
        </div>
      </div>
    </div>
  )
}

