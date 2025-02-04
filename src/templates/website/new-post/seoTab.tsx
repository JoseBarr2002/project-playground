import { Input } from "@components/ui/input"
import { Textarea } from "@components/ui/textarea"

export function SEOTab() {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="meta-title" className="block text-sm font-medium mb-2">
          Meta Title
        </label>
        <Input id="meta-title" placeholder="Enter meta title" />
      </div>

      <div>
        <label htmlFor="keywords" className="block text-sm font-medium mb-2">
          Meta Keywords
        </label>
        <Input id="keywords" placeholder="Enter meta keywords" />
        <p className="text-sm text-muted-foreground mt-1">Separate keywords with commas</p>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-2">
          Meta Description
        </label>
        <Textarea id="description" placeholder="Enter meta description" />
        <p className="text-sm text-muted-foreground mt-1">Recommended length: 150-160 characters</p>
      </div>
    </div>
  )
}

