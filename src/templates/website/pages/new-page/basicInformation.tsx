import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"
import { Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@components/ui/tooltip"

export default function BasicInformation() {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold border-b pb-2">Basic Information</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="title">Page Title</Label>
          <Input id="title" placeholder="Enter page title" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Label htmlFor="slug">URL Slug</Label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">
                    This will be the URL of your page. For example, setting this to "about" will create the page at
                    https://ibexpayments.com/
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Input id="slug" placeholder="page-url-slug" />
        </div>
      </div>
    </div>
  )
}

