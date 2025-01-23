import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"
import { Ruler } from "lucide-react"

export default function DimensionsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Ruler className="mr-2" /> Dimensions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="length">Length (ft)</Label>
            <Input id="length" type="number" min="0" step="0.1" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="width">Width (ft)</Label>
            <Input id="width" type="number" min="0" step="0.1" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="height">Height (ft)</Label>
            <Input id="height" type="number" min="0" step="0.1" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

