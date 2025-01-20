import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"
import { Building2 } from "lucide-react"

export default function GeneralInformation() {
  return (
    <Card>
      <CardHeader className="bg-orange-100">
        <CardTitle className="text-lg font-medium flex items-center">
          <Building2 className="mr-2 h-5 w-5 text-orange-600" />
          General Information
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 grid gap-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="facility-name">Facility Name</Label>
            <Input id="facility-name" defaultValue="GOAT Storage" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="website">Website Address</Label>
            <Input id="website" defaultValue="GOATStorage.com" />
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          The website address is displayed in notifications. Contact support to change your hosting domain.
        </p>
      </CardContent>
    </Card>
  )
}

