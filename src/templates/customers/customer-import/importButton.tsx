import { useState } from "react"
import { Button } from "@components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@components/ui/tooltip"
import { toast } from "@hooks/use-toast"

interface ImportButtonProps {
  csvData: string[][]
}

export function ImportButton({ csvData }: ImportButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleImport = async () => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      toast.success("Customers imported successfully")
      // Reset CSV data logic here
    } catch (err) {
      toast.error("Failed to import customers")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="sm" onClick={handleImport} disabled={csvData.length === 0 || isLoading}>
            {isLoading ? "Importing..." : "Import Customers"}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Import the previewed customer data</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

