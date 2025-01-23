import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"
import { Textarea } from "@components/ui/textarea"
import { Badge } from "@components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"
import { Tag } from "lucide-react"

interface DetailsCardProps {
  unitTypeFeatures: string[]
  onAddFeature: (feature: string) => void
  onRemoveFeature: (feature: string) => void
}

export default function DetailsCard({ unitTypeFeatures, onAddFeature, onRemoveFeature }: DetailsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Tag className="mr-2" /> Details
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name-type">Name</Label>
          <Input id="name-type" placeholder="e.g., Large Storage Unit" />
          <p className="text-sm text-muted-foreground">A descriptive name for this unit type</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" placeholder="Describe this type of unit, include any special features, etc." />
        </div>

        <div className="space-y-2">
          <Label>Features</Label>
          <div className="flex flex-wrap gap-2">
            {unitTypeFeatures.map((feature, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="cursor-pointer"
                onClick={() => onRemoveFeature(feature)}
              >
                {feature} <span className="ml-1">×</span>
              </Badge>
            ))}
            <Select onValueChange={onAddFeature}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Add feature" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Climate Controlled">Climate Controlled</SelectItem>
                <SelectItem value="Drive-Up Access">Drive-Up Access</SelectItem>
                <SelectItem value="24/7 Access">24/7 Access</SelectItem>
                <SelectItem value="Indoor">Indoor</SelectItem>
                <SelectItem value="Outdoor">Outdoor</SelectItem>
                <SelectItem value="First Floor">First Floor</SelectItem>
                <SelectItem value="Electricity">Electricity</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

