import { Button } from "@components/ui/button"
import { Card, CardContent } from "@components/ui/card"
import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@components/ui/tooltip"
import { Info, Plus, Search } from "lucide-react"
import { Image } from "react-native"
import { UnitBreadcrumb } from "./breadcrumb"
import { EditPricingDialog } from "./editPricing"
import { EditUnitDialog } from "./editUnit"
import { UnitType } from "./IUnitTypes"

// interface UnitType {
//   id: string
//   name: string
//   dimensions: {
//     length: number
//     width: number
//     height?: number
//   }
//   description: string
//   price: number
//   imageUrl: string
//   status: "available" | "occupied"
//   agreement: string
//   reservationPrice: number
//   setupFee: number
//   deposit: number
//   rentTaxRate: number
//   setupTaxRate: number
// }

const units: UnitType[] = [
  {
    id: "1",
    name: "Car and Truck Parking",
    dimensions: {
      length: 20,
      width: 10,
    },
    description: "Car, Truck, and Boat parking on crushed asphalt. 20 ft long length.",
    price: 60.0,
    imageUrl: "assets/images/unit-types/car-parking.png",
    status: "available",
    agreement: "TSRA Vehicle and Boat Lease 2021",
    reservationPrice: 0,
    setupFee: 25,
    deposit: 0,
    rentTaxRate: 0,
    setupTaxRate: 0,
  },
  // Add more mock units as needed
]

export default function UnitsPageTemplate() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="space-y-2">
        <UnitBreadcrumb />
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Unit Types</h1>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Unit Type
                </Button>
              </TooltipTrigger>
              <TooltipContent>Create a new unit type with custom dimensions and pricing</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search unit types..." className="pl-8" />
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <Info className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Manage your storage unit types, pricing, and availability</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <Tabs defaultValue="list" className="w-full">
        <TabsList>
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="grid">Grid View</TabsTrigger>
        </TabsList>
        <TabsContent value="list">
          <div className="grid gap-4">
            {units.map((unit) => (
              <Card key={unit.id}>
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <Image
                        source={{ uri: unit.imageUrl || "assets/images/unit-types/car-parking.png" }}
                        style={{ width: 150, height: 100, borderRadius: 8 }}
                        resizeMode="cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold">{unit.name}</h3>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">
                              {`${unit.dimensions.length} x ${unit.dimensions.width}`}
                              {unit.dimensions.height ? ` x ${unit.dimensions.height}` : ""}
                            </span>
                            <span
                              className={`px-2 py-0.5 rounded-full text-xs ${
                                unit.status === "available"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-yellow-100 text-yellow-700"
                              }`}
                            >
                              {unit.status.charAt(0).toUpperCase() + unit.status.slice(1)}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{unit.description}</p>
                        </div>
                        <div className="flex gap-2">
                          <EditPricingDialog unit={unit} />
                          <EditUnitDialog unit={unit} />
                        </div>
                      </div>
                      <div className="mt-4 space-y-1">
                        <Label className="text-muted-foreground">Base Price</Label>
                        <p className="text-lg font-semibold">${unit.price.toFixed(2)}/month</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="grid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {units.map((unit) => (
              <Card key={unit.id}>
                <CardContent className="p-6">
                  <Image
                    source={{ uri: unit.imageUrl || "assets/images/unit-types/car-parking.png" }}
                    style={{ width: '100%', height: 200, borderRadius: 8, marginBottom: 16 }}
                    resizeMode="cover"
                  />
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold">{unit.name}</h3>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">
                            {`${unit.dimensions.length} x ${unit.dimensions.width}`}
                            {unit.dimensions.height ? ` x ${unit.dimensions.height}` : ""}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded-full text-xs ${
                              unit.status === "available"
                                ? "bg-green-100 text-green-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {unit.status.charAt(0).toUpperCase() + unit.status.slice(1)}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <EditPricingDialog unit={unit} />
                        <EditUnitDialog unit={unit} />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{unit.description}</p>
                    <div className="space-y-1">
                      <Label className="text-muted-foreground">Base Price</Label>
                      <p className="text-lg font-semibold">${unit.price.toFixed(2)}/month</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

