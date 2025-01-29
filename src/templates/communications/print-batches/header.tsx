import { Button } from "@components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@components/ui/tooltip"
import { History } from "lucide-react"
import { Breadcrumb } from "./breadcrumb"

export function PrintBatchHeader() {
  return (
    <div className="mb-6">
      <Breadcrumb />
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mt-4">
        <h1 className="text-2xl font-semibold text-[#c25b37]">Create Print Batch</h1>
        <div className="flex gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm" variant="outline">
                <History className="h-4 w-4 mr-2" />
                Print History
              </Button>
            </TooltipTrigger>
            <TooltipContent>View previous print batches</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

