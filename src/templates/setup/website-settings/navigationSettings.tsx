import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Button } from "@components/ui/button"
import { NavigationStyle } from "./navigation-settings/navigationStyle"
import { NavigationFontSize } from "./navigation-settings/navigationFontSize"
import { NavigationOptions } from "./navigation-settings/navigationOptions"

export function NavigationSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Navigation Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <NavigationStyle />
        <NavigationFontSize />
        <NavigationOptions />
        <Button className="w-full">Preview Navigation</Button>
      </CardContent>
    </Card>
  )
}

