import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs"
import { RateManagementSummary } from "./rateManagementSummary"
import { RateManagementBatches } from "./rateManagementBatches"

export function RateManagementTabs() {
  return (
    <Tabs defaultValue="summary" className="space-y-6">
      <TabsList className="w-full justify-start bg-background border-b">
        <TabsTrigger value="summary" className="data-[state=active]:border-b-2 data-[state=active]:border-primary">
          Rate Management Summary
        </TabsTrigger>
        <TabsTrigger value="batches" className="data-[state=active]:border-b-2 data-[state=active]:border-primary">
          Rate Management Batches
        </TabsTrigger>
      </TabsList>
      <TabsContent value="summary">
        <RateManagementSummary />
      </TabsContent>
      <TabsContent value="batches">
        <RateManagementBatches />
      </TabsContent>
    </Tabs>
  )
}

