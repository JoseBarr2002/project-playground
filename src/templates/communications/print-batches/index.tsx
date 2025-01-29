import { PrintBatchActions } from "./printBatchActions"
import { PrintBatchDocuments } from "./printBatchDocuments"
import { TooltipProvider } from "@components/ui/tooltip"
import { HelpButton } from "./helpButton"
import { useState } from "react"
import { PrintBatchFooter } from "./footer"
import { PrintBatchHeader } from "./header"

export default function PrintBatchTemplate() {
  const [selectedCount, setSelectedCount] = useState(0)

  return (
    <TooltipProvider>
      <div className="container mx-auto p-4 max-w-7xl">
        <PrintBatchHeader />
        <div className="grid gap-6">
          <PrintBatchActions selectedCount={selectedCount} />
          <PrintBatchDocuments selectedCount={selectedCount} onSelectionChange={setSelectedCount} />
        </div>
        <PrintBatchFooter />
        <HelpButton />
      </div>
    </TooltipProvider>
  )
}

