import { Button } from "@components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs"
import { Printer } from "lucide-react"
import { PrintBatchTable } from "./printBatchTable"
import { useToast } from "@hooks/use-toast"

interface PrintBatchDocumentsProps {
  selectedCount: number
  onSelectionChange: (count: number) => void
}

export function PrintBatchDocuments({ selectedCount, onSelectionChange }: PrintBatchDocumentsProps) {
  const { toast } = useToast()

  const handleCreateBatch = () => {
    if (selectedCount === 0) {
      toast({
        title: "No items selected",
        description: "Please select at least one item to create a print batch.",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Print batch created",
      description: `Successfully created print batch with ${selectedCount} items.`,
    })
  }

  return (
    <Tabs defaultValue="table" className="space-y-4">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="table">Documents</TabsTrigger>
        <TabsTrigger value="info">Printing Information</TabsTrigger>
      </TabsList>

      <TabsContent value="table" className="space-y-4">
        <PrintBatchTable onSelectionChange={onSelectionChange} />

        <div className="flex justify-end">
          <Button className="bg-[#5B99D6] hover:bg-[#4A7FB3] text-white" size="lg" onClick={handleCreateBatch}>
            <Printer className="h-4 w-4 mr-2" />
            Create Print Batch
          </Button>
        </div>
      </TabsContent>

      <TabsContent value="info">
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Printing Invoices</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                If a tenant is showing up on this list showing a document type as "Invoice" it means that a new line
                item of "rent" has been invoiced on their account since they were last included in a print batch. Once a
                tenant is added to a print batch, they will not reappear on this list until a new "rent" line item is
                applied to their account (usually one month later).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Printing Late/Lien Notices</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                If a tenant appears on this list with a document type that resembles any of your template letter names
                i.e Lockout Notice, Auction Notice, etc... it means that they have been queued up to have a printed
                notification based on your settings in your Late/Lien module.
              </p>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  )
}

