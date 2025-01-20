import { useState } from "react"
import { Label } from "@components/ui/label"
import { Switch } from "@components/ui/switch"

export function FooterOptions() {
  const [showNewsletter, setShowNewsletter] = useState(false)

  return (
    <div className="flex items-center justify-between">
      <Label htmlFor="show-newsletter">Show Newsletter Signup</Label>
      <Switch id="show-newsletter" checked={showNewsletter} onCheckedChange={setShowNewsletter} />
    </div>
  )
}

