import { Label } from "@components/ui/label"
import { Info } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@components/ui/tooltip"

export function VisibilitySelect() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label htmlFor="visibility" className="text-base font-medium">
          Visibility
        </Label>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Info className="h-4 w-4 text-gray-400" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="w-[200px]">Control where this link appears on your website</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <Select>
        <SelectTrigger id="visibility" className="w-full">
          <SelectValue placeholder="Choose visibility option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="main">Show in main menu</SelectItem>
          <SelectItem value="footer">Show in footer</SelectItem>
          <SelectItem value="both">Show in both</SelectItem>
          <SelectItem value="hidden">Hidden</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

