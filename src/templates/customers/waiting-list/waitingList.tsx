import { Button } from "@components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@components/ui/tooltip"
import { Download, HelpCircle } from "lucide-react"

export default function WaitingList() {
  return (
    <section className="bg-white rounded-lg shadow-md">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">Waiting List</h2>
          <div className="flex items-center space-x-3">
            <Select defaultValue="move-in">
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Sort by..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="move-in">Requested Move-in Date</SelectItem>
                <SelectItem value="added">Date Added to Waiting List</SelectItem>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="unit">Unit Type</SelectItem>
              </SelectContent>
            </Select>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="secondary" size="sm">
                    Load Report
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Load the latest waiting list report</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="secondary" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Export CSV
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Export the waiting list as a CSV file</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
      <div className="p-8 text-center text-gray-500 flex flex-col items-center justify-center">
        <HelpCircle className="w-12 h-12 text-gray-400 mb-4" />
        <p className="text-lg mb-2">Waiting list is empty.</p>
        <p className="text-sm">Add tenants to the waiting list using the button above.</p>
      </div>
    </section>
  )
}

