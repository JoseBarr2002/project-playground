import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Button } from "@components/ui/button"
import { HeaderOptions } from "./header-settings/headerOptions"
import { LogoUpload } from "./header-settings/logoUpload"
import { LogoSize } from "./header-settings/logoSize"

export function HeaderSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Header Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <HeaderOptions />
        <LogoUpload />
        <LogoSize />
        <Button className="w-full">Preview Header</Button>
      </CardContent>
    </Card>
  )
}

