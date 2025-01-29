import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@components/ui/table"
import { Checkbox } from "@components/ui/checkbox"
import { InfoIcon as InfoCircle } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@components/ui/tooltip"
import { cn } from "@lib/utils"

interface PrintBatchItem {
  id: string
  customer: string
  unit: string
  document: string
  dateAdded: string
  balance: number
  hasInfo?: boolean
  info?: string
}

const data: PrintBatchItem[] = [
  {
    id: "1",
    customer: "110 Mini Storage",
    unit: "B5, C11, T2",
    document: "Invoice",
    dateAdded: "3/28/2021",
    balance: -9.99,
  },
  {
    id: "2",
    customer: "ABRAHAM EASTMAN",
    unit: "P7",
    document: "Invoice",
    dateAdded: "6/26/2024",
    balance: -500.0,
    hasInfo: true,
    info: "Multiple outstanding payments",
  },
  {
    id: "3",
    customer: "ABRAHAM EASTMAN",
    unit: "P7",
    document: "Past Due Notice",
    dateAdded: "7/10/2024",
    balance: -500.0,
    hasInfo: true,
    info: "Second notice sent",
  },
  // Add more items as needed
]

interface PrintBatchTableProps {
  onSelectionChange: (count: number) => void
}

export function PrintBatchTable({ onSelectionChange }: PrintBatchTableProps) {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set())
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    onSelectionChange(selectedItems.size)
  }, [selectedItems.size, onSelectionChange])

  const toggleItem = (id: string) => {
    const newSelected = new Set(selectedItems)
    if (newSelected.has(id)) {
      newSelected.delete(id)
    } else {
      newSelected.add(id)
    }
    setSelectedItems(newSelected)
  }

  const toggleAll = () => {
    if (selectedItems.size === data.length) {
      setSelectedItems(new Set())
    } else {
      setSelectedItems(new Set(data.map((item) => item.id)))
    }
  }

  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="bg-gray-50 p-2 border-b flex items-center gap-2">
        <span className="text-sm text-gray-600">Select:</span>
        <Button
          variant="ghost"
          size="sm"
          className="text-blue-600 hover:text-blue-800 h-auto p-1"
          onClick={() => setSelectedItems(new Set(data.map((item) => item.id)))}
        >
          All
        </Button>
        <span className="text-gray-400">/</span>
        <Button
          variant="ghost"
          size="sm"
          className="text-blue-600 hover:text-blue-800 h-auto p-1"
          onClick={() => setSelectedItems(new Set())}
        >
          None
        </Button>
      </div>

      <div className={cn("transition-opacity duration-300", isLoading ? "opacity-50" : "opacity-100")}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  checked={selectedItems.size === data.length}
                  onCheckedChange={toggleAll}
                  aria-label="Select all items"
                />
              </TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Unit</TableHead>
              <TableHead>Document</TableHead>
              <TableHead>Date Added</TableHead>
              <TableHead className="text-right">Balance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow
                key={item.id}
                className={cn("transition-colors", selectedItems.has(item.id) ? "bg-blue-50" : "hover:bg-gray-50")}
              >
                <TableCell>
                  <Checkbox
                    checked={selectedItems.has(item.id)}
                    onCheckedChange={() => toggleItem(item.id)}
                    aria-label={`Select ${item.customer}`}
                  />
                </TableCell>
                <TableCell className="font-medium">{item.customer}</TableCell>
                <TableCell>
                  <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-800">
                    {item.unit}
                  </Button>
                </TableCell>
                <TableCell>{item.document}</TableCell>
                <TableCell>{item.dateAdded}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <span className={cn(item.balance < 0 ? "text-red-600" : "text-green-600")}>
                      ${Math.abs(item.balance).toFixed(2)}
                    </span>
                    {item.hasInfo && (
                      <Tooltip>
                        <TooltipTrigger>
                          <InfoCircle className="h-4 w-4 text-blue-600" />
                        </TooltipTrigger>
                        <TooltipContent>{item.info}</TooltipContent>
                      </Tooltip>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

