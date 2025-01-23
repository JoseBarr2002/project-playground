import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"
import { Button } from "@components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"
import { Checkbox } from "@components/ui/checkbox"
import { Separator } from "@components/ui/separator"
import { Slider } from "@components/ui/slider"
import { Switch } from "@components/ui/switch"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@components/ui/tooltip"
import { DollarSign, HelpCircle, Trash2, Paintbrush, Zap, Shield, PlusCircle } from "lucide-react"

type AdditionalCost = {
  id: string
  name: string
  amount: number
  type: string
}

const PREDEFINED_COSTS = [
  { type: "cleaning", name: "Cleaning Fee", icon: <Paintbrush className="h-4 w-4" /> },
  { type: "insurance", name: "Insurance", icon: <Shield className="h-4 w-4" /> },
  { type: "utility", name: "Utility Fee", icon: <Zap className="h-4 w-4" /> },
  { type: "custom", name: "Custom Fee", icon: <PlusCircle className="h-4 w-4" /> },
]

export default function PricingCard() {
  const [basePrice, setBasePrice] = useState(0)
  const [reservationPrice, setReservationPrice] = useState(0)
  const [isPromoActive, setIsPromoActive] = useState(false)
  const [discountPercentage, setDiscountPercentage] = useState(0)
  const [billingCycle, setBillingCycle] = useState("monthly")
  const [additionalCosts, setAdditionalCosts] = useState<AdditionalCost[]>([])
  const [taxRate, setTaxRate] = useState(0)
  const [isTaxIncluded, setIsTaxIncluded] = useState(false)

  const calculateDiscountedPrice = (price: number) => {
    return price * (1 - discountPercentage / 100)
  }

  const calculateTotalAdditionalCosts = () => {
    return additionalCosts.reduce((total, cost) => total + cost.amount, 0)
  }

  const calculateTotalPrice = () => {
    const baseWithDiscount = isPromoActive ? calculateDiscountedPrice(basePrice) : basePrice
    const totalWithAdditional = baseWithDiscount + calculateTotalAdditionalCosts()
    const taxAmount = isTaxIncluded ? 0 : (totalWithAdditional * taxRate) / 100
    return totalWithAdditional + taxAmount
  }

  const handleAddAdditionalCost = (type: string) => {
    const newCost: AdditionalCost = {
      id: Date.now().toString(),
      name: PREDEFINED_COSTS.find((cost) => cost.type === type)?.name || "",
      amount: 0,
      type,
    }
    setAdditionalCosts([...additionalCosts, newCost])
  }

  const handleUpdateAdditionalCost = (id: string, field: keyof AdditionalCost, value: string | number) => {
    setAdditionalCosts(additionalCosts.map((cost) => (cost.id === id ? { ...cost, [field]: value } : cost)))
  }

  const handleRemoveAdditionalCost = (id: string) => {
    setAdditionalCosts(additionalCosts.filter((cost) => cost.id !== id))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <DollarSign className="mr-2" /> Pricing
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="base-price">Base Price ($)</Label>
            <Input
              id="base-price"
              type="number"
              min="0"
              step="0.01"
              value={basePrice}
              onChange={(e) => setBasePrice(Number(e.target.value))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="reservation-price">Reservation Price ($)</Label>
            <Input
              id="reservation-price"
              type="number"
              min="0"
              step="0.01"
              value={reservationPrice}
              onChange={(e) => setReservationPrice(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="billing-cycle">Billing Cycle</Label>
          <Select value={billingCycle} onValueChange={setBillingCycle}>
            <SelectTrigger id="billing-cycle">
              <SelectValue placeholder="Select billing cycle" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="discount-toggle">Apply Discount</Label>
            <Switch id="discount-toggle" checked={isPromoActive} onCheckedChange={setIsPromoActive} />
          </div>
          {isPromoActive && (
            <div className="space-y-2">
              <Label>Discount Percentage: {discountPercentage}%</Label>
              <Slider
                id="discount-slider"
                min={0}
                max={100}
                step={1}
                value={[discountPercentage]}
                onValueChange={(value) => setDiscountPercentage(value[0])}
              />
            </div>
          )}
        </div>

        <div className="space-y-4">
          <Label>Additional Costs</Label>
          <div className="flex flex-wrap gap-2">
            {PREDEFINED_COSTS.map((cost) => (
              <TooltipProvider key={cost.type}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="sm" onClick={() => handleAddAdditionalCost(cost.type)}>
                      {cost.icon}
                      <span className="ml-2">{cost.name}</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Add {cost.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
          {additionalCosts.map((cost) => (
            <div key={cost.id} className="flex items-center space-x-2">
              <Input
                placeholder="Cost name"
                value={cost.name}
                onChange={(e) => handleUpdateAdditionalCost(cost.id, "name", e.target.value)}
              />
              <Input
                type="number"
                min="0"
                step="0.01"
                placeholder="Amount"
                value={cost.amount}
                onChange={(e) => handleUpdateAdditionalCost(cost.id, "amount", Number(e.target.value))}
              />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" onClick={() => handleRemoveAdditionalCost(cost.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Remove this cost</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <Label>Tax Settings</Label>
          <div className="flex items-center space-x-2">
            <Input
              type="number"
              min="0"
              max="100"
              step="0.01"
              placeholder="Tax rate (%)"
              value={taxRate}
              onChange={(e) => setTaxRate(Number(e.target.value))}
            />
            <div className="flex items-center space-x-2">
              <Checkbox
                id="tax-included"
                checked={isTaxIncluded}
                onCheckedChange={(checked) => setIsTaxIncluded(checked as boolean)}
              />
              <Label htmlFor="tax-included">Tax Included in Price</Label>
            </div>
          </div>
        </div>

        <div className="bg-muted p-4 rounded-md space-y-2">
          <h4 className="font-semibold">Pricing Summary</h4>
          <div className="flex justify-between">
            <span>Base Price:</span>
            <span>
              ${basePrice.toFixed(2)} / {billingCycle}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Reservation Price:</span>
            <span>${reservationPrice.toFixed(2)}</span>
          </div>
          {isPromoActive && (
            <div className="flex justify-between text-green-600">
              <span>Discounted Price:</span>
              <span>
                ${calculateDiscountedPrice(basePrice).toFixed(2)} / {billingCycle}
              </span>
            </div>
          )}
          {additionalCosts.length > 0 && (
            <>
              <Separator className="my-2" />
              <h5 className="font-medium">Additional Costs:</h5>
              {additionalCosts.map((cost) => (
                <div key={cost.id} className="flex justify-between text-sm">
                  <span>{cost.name}:</span>
                  <span>${cost.amount.toFixed(2)}</span>
                </div>
              ))}
              <div className="flex justify-between font-medium">
                <span>Total Additional Costs:</span>
                <span>${calculateTotalAdditionalCosts().toFixed(2)}</span>
              </div>
            </>
          )}
          {taxRate > 0 && (
            <div className="flex justify-between">
              <span>Tax ({taxRate}%):</span>
              <span>
                $
                {(
                  (calculateTotalPrice() - (isTaxIncluded ? calculateTotalPrice() / (1 + taxRate / 100) : 0)) *
                  (taxRate / 100)
                ).toFixed(2)}
              </span>
            </div>
          )}
          <Separator className="my-2" />
          <div className="flex justify-between font-bold">
            <span>Total Price:</span>
            <span>
              ${calculateTotalPrice().toFixed(2)} / {billingCycle}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

