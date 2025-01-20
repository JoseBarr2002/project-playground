import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Label } from "@components/ui/label"
import { Button } from "@components/ui/button"
import { Slider } from "@components/ui/slider"
import { CreditCard, FileText } from "lucide-react"

export function BillingSettings() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Billing Settings</h2>

      <Card>
        <CardHeader>
          <CardTitle>Billing Period</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <CreditCard className="w-5 h-5 text-gray-500" />
            <div className="flex-1">
              <Label htmlFor="billing-period">Billing Period (days)</Label>
              <Slider id="billing-period" defaultValue={[30]} max={60} step={1} className="mt-2" />
              <p className="text-sm text-muted-foreground mt-2">
                Adjust the slider to set the billing period. Current value: 30 days
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Storage Agreements</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FileText className="w-5 h-5 text-gray-500" />
              <span>TSSA License 2023</span>
            </div>
            <Button variant="outline" size="sm">
              Preview PDF
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FileText className="w-5 h-5 text-gray-500" />
              <span>TSSA Vehicle and Boat License 2023</span>
            </div>
            <Button variant="outline" size="sm">
              Preview PDF
            </Button>
          </div>
          <Button className="w-full mt-4">New Storage Agreement</Button>
        </CardContent>
      </Card>
    </div>
  )
}

