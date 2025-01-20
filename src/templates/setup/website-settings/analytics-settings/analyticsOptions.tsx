import { useState } from "react"
import { Label } from "@components/ui/label"
import { Switch } from "@components/ui/switch"

export function AnalyticsOptions() {
  const [enableCookieBanner, setEnableCookieBanner] = useState(false)

  return (
    <div className="flex items-center justify-between">
      <Label htmlFor="enable-cookie-banner">Enable Cookie Consent Banner</Label>
      <Switch id="enable-cookie-banner" checked={enableCookieBanner} onCheckedChange={setEnableCookieBanner} />
    </div>
  )
}

