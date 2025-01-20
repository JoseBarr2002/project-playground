import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Button } from "@components/ui/button"
import { OfficeHoursTable } from "./office-hours-settings/officeHoursTable"
import { OfficeHoursOptions } from "./office-hours-settings/officeHoursOptions"

export function OfficeHoursSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Office Hours</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <OfficeHoursTable />
        <OfficeHoursOptions />
        <Button className="w-full">Update Hours</Button>
      </CardContent>
    </Card>
  )
}

