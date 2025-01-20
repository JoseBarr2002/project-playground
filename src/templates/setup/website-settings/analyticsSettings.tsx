import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Button } from "@components/ui/button"
import { AnalyticsCode } from "./analytics-settings/analyticsCode"
import { AnalyticsOptions } from "./analytics-settings/analyticsOptions"

export function AnalyticsSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Analytics Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <AnalyticsCode />
        <AnalyticsOptions />
        <Button className="w-full">Update Analytics</Button>
      </CardContent>
    </Card>
  )
}

