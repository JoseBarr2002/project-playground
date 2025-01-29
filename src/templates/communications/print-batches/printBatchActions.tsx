import { Button } from "@components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"
import { Alert, AlertDescription } from "@components/ui/alert"
import { Textarea } from "@components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@components/ui/card"
import { Filter, Printer } from "lucide-react"

interface PrintBatchActionsProps {
  selectedCount: number
}

export function PrintBatchActions({ selectedCount }: PrintBatchActionsProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Print Batch Actions</CardTitle>
        <CardDescription>Select documents to print and customize batch settings</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 space-y-4">
            {selectedCount > 0 ? (
              <Alert className="bg-blue-50 border-blue-200">
                <AlertDescription className="flex items-center gap-2">
                  <Printer className="h-4 w-4" />
                  {selectedCount} {selectedCount === 1 ? "document" : "documents"} selected for printing
                </AlertDescription>
              </Alert>
            ) : (
              <Alert>
                <AlertDescription>Select documents below to create a print batch</AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <label htmlFor="invoice-note" className="text-sm font-medium">
                Invoice note
              </label>
              <Textarea
                id="invoice-note"
                className="min-h-[100px] resize-y"
                placeholder="Enter text to appear on non-postcard invoices..."
              />
              <p className="text-sm text-muted-foreground">
                This text will appear on all non-postcard invoices in this batch.
              </p>
            </div>
          </div>

          <div className="sm:w-72 space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="document-type">
                Document Type
              </label>
              <Select defaultValue="all">
                <SelectTrigger id="document-type">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Documents</SelectItem>
                  <SelectItem value="invoice">Invoices Only</SelectItem>
                  <SelectItem value="notice">Notices Only</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="sort-by">
                Sort By
              </label>
              <Select defaultValue="customer">
                <SelectTrigger id="sort-by">
                  <SelectValue placeholder="Select order" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="customer">Customer Name</SelectItem>
                  <SelectItem value="date">Date Added</SelectItem>
                  <SelectItem value="balance">Balance</SelectItem>
                  <SelectItem value="unit">Unit Number</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full" variant="secondary">
              <Filter className="h-4 w-4 mr-2" />
              Apply Filters
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

