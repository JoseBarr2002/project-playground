import { useState } from "react"
import { Button } from "@components/ui/button"
import { Input } from "@components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@components/ui/card"
import { Plus, Search } from "lucide-react"
import { PromotionsTable } from "./promotionsTable"
import { PromotionForm } from "./promotionalForm"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui/dialog"

interface Promotion {
  id: string
  name: string
  description: string
  type: "manual" | "promo" | "automatic"
  discount: number
  status: "active" | "scheduled" | "expired"
  startDate: string
  endDate: string
}

const mockPromotions: Promotion[] = [
  {
    id: "1",
    name: "Summer Special",
    description: "25% off for all storage units",
    type: "promo",
    discount: 25,
    status: "active",
    startDate: "2024-06-01",
    endDate: "2024-08-31",
  },
  {
    id: "2",
    name: "New Customer Discount",
    description: "First month free for new customers",
    type: "automatic",
    discount: 100,
    status: "active",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
  },
  {
    id: "3",
    name: "Holiday Sale",
    description: "15% off for all units during holidays",
    type: "manual",
    discount: 15,
    status: "scheduled",
    startDate: "2024-12-01",
    endDate: "2024-12-31",
  },
  {
    id: "4",
    name: "Spring Cleaning",
    description: "10% off for 3 months",
    type: "promo",
    discount: 10,
    status: "expired",
    startDate: "2024-03-01",
    endDate: "2024-05-31",
  },
]

export default function PromotionsPage() {
  const [promotions, setPromotions] = useState<Promotion[]>(mockPromotions)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const deletePromotion = (id: string) => {
    setPromotions(promotions.filter((promo) => promo.id !== id))
  }

  const archivePromotion = (id: string) => {
    setPromotions(promotions.map((promo) => (promo.id === id ? { ...promo, status: "expired" } : promo)))
  }

  const addPromotion = (newPromotion: Omit<Promotion, "id">) => {
    const id = (promotions.length + 1).toString()
    setPromotions([...promotions, { ...newPromotion, id }])
    setIsDialogOpen(false)
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Promotions</h1>
            <p className="mt-2 text-gray-600 max-w-4xl">
              Manage your promotional campaigns and discounts to boost sales and customer engagement.
            </p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="w-full sm:w-auto px-4">
                <Plus className="w-4 h-4 mr-2" />
                New Promotion
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Create New Promotion</DialogTitle>
                <DialogDescription>
                  Fill in the details to create a new promotion. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
              <PromotionForm onSubmit={addPromotion} />
            </DialogContent>
          </Dialog>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input type="search" placeholder="Search promotions..." className="pl-8" />
          </div>
          <Button className="w-full sm:w-auto px-4" variant="outline">
            Filters
          </Button>
        </div>
      </div>

      <div className="mt-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Active Promotions</CardTitle>
              <CardDescription>Currently running offers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{promotions.filter((p) => p.status === "active").length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Total Discount Value</CardTitle>
              <CardDescription>Discounts applied this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">$1,234.56</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Redemptions</CardTitle>
              <CardDescription>Times promotions were used</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">45</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Promotions</CardTitle>
            <CardDescription>Manage your promotional campaigns and discounts</CardDescription>
          </CardHeader>
          <CardContent>
            <PromotionsTable promotions={promotions} onDelete={deletePromotion} onArchive={archivePromotion} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

