import { Card, CardContent } from "@components/ui/card"
import { Badge } from "@components/ui/badge"
import type { Unit } from "./gridViewTypes"

interface UnitCardProps {
  unit: Unit
  statusColor: string
}

export const UnitCard: React.FC<UnitCardProps> = ({ unit, statusColor }) => {
  return (
    <Card key={unit.id} className="overflow-hidden">
      <div className="relative">
        <div className="h-20" style={{ backgroundColor: statusColor }}>
          <Badge variant="secondary" className="absolute top-2 right-2">
            {unit.status}
          </Badge>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
          <span className="text-sm font-medium">Unit ID: {unit.id}</span>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm font-medium">Type:</span>
            <span className="text-sm">{unit.type}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-medium">Size:</span>
            <span className="text-sm">{unit.size}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-medium">Price:</span>
            <span className="text-sm font-bold">${unit.price}/month</span>
          </div>
          {unit.tenant && (
            <>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Tenant:</span>
                <span className="text-sm">{unit.tenant}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Last Access:</span>
                <span className="text-sm">{unit.lastAccessed}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Due Date:</span>
                <span className="text-sm">{unit.dueDate}</span>
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

