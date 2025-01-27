import { Button } from "@components/ui/button"
import { FileText } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@components/ui/tooltip"
// import Layout from "@components/Layout"
// import Breadcrumb from "@components/Breadcrumb"
import ScheduledMoveOuts from "./scheduledMoveOuts"
import WaitingList from "./waitingList"

export default function WaitingListPage() {
  // const breadcrumbItems = [{ label: "Home", href: "#" }, { label: "Reports", href: "#" }, { label: "Waiting List" }]

  const scheduledMoveOuts = [
    {
      name: "Lucius Cadaverius",
      unit: "R26",
      size: "BRAND NEW 8 x 10 (10 x 8 x 8)",
      moveOutDate: "12/12/2024",
    },
    {
      name: "John Doe",
      unit: "8",
      size: "Storage Unit (10 x 10 x 8)",
      moveOutDate: "1/1/2025",
    },
  ]

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        {/* <Breadcrumb items={breadcrumbItems} /> */}
        <div className="flex space-x-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm">
                  <FileText className="w-4 h-4 mr-2" />
                  PDF
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Export as PDF</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <div className="grid gap-6">
        <ScheduledMoveOuts moveOuts={scheduledMoveOuts} />
        <WaitingList />
      </div>
    </>
  )
}

