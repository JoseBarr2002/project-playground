import { Button } from "@components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@components/ui/table"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@components/ui/tooltip"

interface MoveOut {
  name: string
  unit: string
  size: string
  moveOutDate: string
}

interface ScheduledMoveOutsProps {
  moveOuts: MoveOut[]
}

export default function ScheduledMoveOuts({ moveOuts }: ScheduledMoveOutsProps) {
  return (
    <section className="bg-white rounded-lg shadow-md">
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Scheduled Move Outs</h2>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="default" size="sm">
                Add Tenant To Waiting List
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add a new tenant to the waiting list</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Name</TableHead>
              <TableHead className="w-[100px]">Unit</TableHead>
              <TableHead className="w-[250px]">Size</TableHead>
              <TableHead className="w-[150px]">Move Out Date</TableHead>
              <TableHead className="w-[250px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {moveOuts.map((moveOut, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{moveOut.name}</TableCell>
                <TableCell>{moveOut.unit}</TableCell>
                <TableCell>{moveOut.size}</TableCell>
                <TableCell>{moveOut.moveOutDate}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="secondary" size="sm">
                            Edit
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Edit move out details</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="default" size="sm">
                            Finalize
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Finalize move out</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="destructive" size="sm">
                            Cancel
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Cancel move out</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}

