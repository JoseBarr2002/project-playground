import { Button } from "@components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Badge } from "@components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@components/ui/tooltip"
import { Edit, Trash2 } from "lucide-react"
import type { Fee } from "./IFee"

interface FeeCardProps {
  fee: Fee
  onEdit: (fee: Fee) => void
  onDelete: (fee: Fee) => void
}

export function FeeCard({ fee, onEdit, onDelete }: FeeCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{fee.name}</CardTitle>
        <Badge>{fee.category}</Badge>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">${fee.amount.toFixed(2)}</div>
        {fee.taxRate && <p className="text-xs text-muted-foreground">Tax Rate: {fee.taxRate}</p>}
        {fee.description && <p className="text-sm text-muted-foreground mt-2">{fee.description}</p>}
        <p className="text-xs text-muted-foreground mt-2">{fee.created}</p>
        <div className="flex gap-2 mt-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => onEdit(fee)}>
                  <Edit className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Edit fee</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-red-500 hover:text-red-600"
                  onClick={() => onDelete(fee)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Delete fee</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardContent>
    </Card>
  )
}

