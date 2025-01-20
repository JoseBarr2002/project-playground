import { Button } from "@components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@components/ui/tooltip"

export default function ActionButtons() {
  return (
    <div className="flex justify-between items-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="sm" type="submit" className="bg-orange-500 hover:bg-orange-600">
              Update Settings
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Save your changes</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <Button size="sm" variant="outline">Cancel</Button>
    </div>
  )
}

