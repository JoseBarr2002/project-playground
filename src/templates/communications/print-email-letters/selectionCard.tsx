import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs"
import { Label } from "@components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"
import { Users } from "lucide-react"
import type { UseFormReturn } from "react-hook-form"
import { customers } from "./utils/data"

interface CustomerSelectionCardProps {
  selectedCustomers: string[]
  filterStatus: string
  setFilterStatus: (status: string) => void
  form: UseFormReturn<any>
}

export function CustomerSelectionCard({
  selectedCustomers,
  filterStatus,
  setFilterStatus,
  form,
}: CustomerSelectionCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5" />
          Customer Selection
        </CardTitle>
        <CardDescription>Filter and select customers to send template letters</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="filters" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="filters">Filters</TabsTrigger>
            <TabsTrigger value="selected">Selected ({selectedCustomers.length})</TabsTrigger>
          </TabsList>
          <TabsContent value="filters" className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Customer Status</Label>
                <Select defaultValue="all" onValueChange={(value) => setFilterStatus(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Template Type</Label>
                <Select defaultValue="lockout" {...form.register("template")}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select template" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lockout">Notice of "Lockout"</SelectItem>
                    <SelectItem value="auction">Auction Notice</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="selected">
            <div className="text-sm text-muted-foreground">{selectedCustomers.length} customers selected</div>
            {selectedCustomers.length > 0 && (
              <ul className="mt-2 space-y-1">
                {selectedCustomers.map((id) => {
                  const customer = customers.find((c) => c.id === id)
                  return (
                    customer && (
                      <li key={id} className="text-sm">
                        {customer.name} ({customer.unit})
                      </li>
                    )
                  )
                })}
              </ul>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

