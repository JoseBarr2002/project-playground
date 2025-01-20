import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Button } from "@components/ui/button"
import { FontCustomization } from "./theme-settings/fontCustomization"
import { ColorCustomization } from "./theme-settings/colorCustomization"

export function ThemeSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Theme Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <FontCustomization />
        <ColorCustomization />
        <Button className="w-full">Preview Theme</Button>
      </CardContent>
    </Card>
  )
}

