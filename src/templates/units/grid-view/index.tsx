import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs"
import { Card, CardContent, CardTitle } from "@components/ui/card"
import { Button } from "@components/ui/button"
import { ScrollArea } from "@components/ui/scroll-area"
import { UnitFilters } from "./unitFilters"
import { UnitCard } from "./unitCard"
import { ColorSettings } from "./colorSettings"
import { UnitStatus, Unit, CategorySummary } from "./gridViewTypes"

// Interfaces (keep them as they are)
// interface UnitStatus {
//   name: string
//   color: string
// }

// interface Unit {
//   id: string
//   type: string
//   size: string
//   status: string
//   price: number
//   lastAccessed?: string
//   tenant?: string
//   dueDate?: string
// }

// interface CategorySummary {
//   name: string
//   total: number
//   available: number
//   icon: React.ReactNode
// }

export default function GridViewTemplate() {
  const [statusColors, setStatusColors] = useState<UnitStatus[]>([
    { name: "Auction", color: "#FFE5A3" },
    { name: "Available", color: "#90EE90" },
    { name: "Late", color: "#FF6B6B" },
    { name: "Lien", color: "#FFA500" },
    { name: "Locked Out", color: "#9B6B9E" },
    { name: "Moving Out", color: "#A0522D" },
    { name: "Pending", color: "#98FB98" },
    { name: "Pre-Lien", color: "#FFA07A" },
    { name: "Rented", color: "#4169E1" },
    { name: "Reserved", color: "#87CEEB" },
    { name: "Unavailable", color: "#808080" },
  ])

  const units: Unit[] = [
    {
      id: "101",
      type: "Climate Controlled",
      size: "10 x 20",
      status: "Rented",
      price: 199.99,
      lastAccessed: "2024-01-22",
      tenant: "John Smith",
      dueDate: "2024-02-01",
    },
    {
      id: "102",
      type: "Parking Space",
      size: "10 x 20",
      status: "Available",
      price: 149.99,
    },
    {
      id: "103",
      type: "RV Storage",
      size: "15 x 30",
      status: "Late",
      price: 299.99,
      lastAccessed: "2024-01-15",
      tenant: "Alice Johnson",
      dueDate: "2024-01-31",
    },
    {
      id: "104",
      type: "Storage Unit",
      size: "5 x 10",
      status: "Reserved",
      price: 89.99,
    },
    // Add more units as needed
  ]

  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("id")
  const [filterStatus, setFilterStatus] = useState<string>("all")

  const filteredUnits = units
    .filter((unit) => selectedCategory === "all" || unit.type === selectedCategory)
    .filter((unit) => filterStatus === "all" || unit.status === filterStatus)
    .sort((a, b) => {
      switch (sortBy) {
        case "price":
          return a.price - b.price
        case "size":
          return a.size.localeCompare(b.size)
        default:
          return a.id.localeCompare(b.id)
      }
    })

  return (
    <>
      <Tabs defaultValue="units" className="w-full">
        <TabsList className="grid w-full max-w-full grid-cols-2">
          <TabsTrigger value="units">Units</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="units">
          <Card>
            <CardTitle className="p-4">Storage Units</CardTitle>
            <CardContent className="p-4">
              <UnitFilters
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                filterStatus={filterStatus}
                setFilterStatus={setFilterStatus}
                sortBy={sortBy}
                setSortBy={setSortBy}
                statusColors={statusColors}
              />

              <ScrollArea className="h-[600px] rounded-md border">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 gap-4">
                  {filteredUnits.map((unit) => (
                    <UnitCard
                      key={unit.id}
                      unit={unit}
                      statusColor={statusColors.find((s) => s.name === unit.status)?.color || ""}
                    />
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardTitle className="p-4">Customize Unit Status Colors</CardTitle>
            <CardContent className="p-4">
              <ColorSettings statusColors={statusColors} setStatusColors={setStatusColors} />
              <div className="flex justify-end gap-4 mt-6">
                <Button variant="outline" size="sm">Reset to Defaults</Button>
                <Button size="sm">Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  )
}

