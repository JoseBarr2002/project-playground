import { format } from "date-fns"
import { CalendarIcon, InfoIcon } from "lucide-react"
import { Calendar } from "@components/ui/calendar"
import { Checkbox } from "@components/ui/checkbox"
import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@components/ui/popover"
import { Button } from "@components/ui/button"
import { cn } from "@lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@components/ui/tooltip"
import type { Quote } from "./IQuote"

interface QuoteFormFieldsProps {
  quote: Quote
  onChange: (quote: Quote) => void
  errors: Partial<Record<keyof Quote, string>>
  fields: (keyof Quote)[]
}

export function QuoteFormFields({ quote, onChange, errors, fields }: QuoteFormFieldsProps) {
  const updateQuote = (field: keyof Quote, value: any) => {
    onChange({ ...quote, [field]: value })
  }

  const renderField = (field: keyof Quote) => {
    switch (field) {
      case "unitType":
        return (
          <div key={field}>
            <Label htmlFor="unit-type" className="flex items-center gap-2">
              Unit type
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Select the type of storage unit you need</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <Select value={quote.unitType} onValueChange={(value) => updateQuote("unitType", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select unit type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="car-truck">Car and Truck Parking (10 x 20)</SelectItem>
                <SelectItem value="small">Small Storage Unit (5 x 5)</SelectItem>
                <SelectItem value="medium">Medium Storage Unit (10 x 10)</SelectItem>
                <SelectItem value="large">Large Storage Unit (10 x 20)</SelectItem>
              </SelectContent>
            </Select>
            {errors.unitType && <p className="text-sm text-red-500 mt-1">{errors.unitType}</p>}
          </div>
        )
      case "startDate":
        return (
          <div key={field}>
            <Label className="flex items-center gap-2">
              Start Date for Billing Cycle
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Choose the date when your billing cycle will begin</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !quote.startDate && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {quote.startDate ? format(quote.startDate, "MMMM d, yyyy") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={quote.startDate}
                  onSelect={(date) => updateQuote("startDate", date)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            {errors.startDate && <p className="text-sm text-red-500 mt-1">{errors.startDate}</p>}
          </div>
        )
      case "moveInDate":
        return (
          <div key={field}>
            <Label className="flex items-center gap-2">
              Move-in Date
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Select the date you plan to move in</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !quote.moveInDate && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {quote.moveInDate ? format(quote.moveInDate, "MMMM d, yyyy") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={quote.moveInDate}
                  onSelect={(date) => updateQuote("moveInDate", date)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            {errors.moveInDate && <p className="text-sm text-red-500 mt-1">{errors.moveInDate}</p>}
          </div>
        )
      case "plan":
        return (
          <div key={field}>
            <Label className="flex items-center gap-2">
              Plan
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Choose your preferred payment plan</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <Select value={quote.plan} onValueChange={(value) => updateQuote("plan", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select plan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="monthly">${quote.baseRent.toFixed(2)} Each Month</SelectItem>
                <SelectItem value="quarterly">
                  ${(quote.baseRent * 3 * 0.95).toFixed(2)} Every 3 Months (5% discount)
                </SelectItem>
                <SelectItem value="annually">
                  ${(quote.baseRent * 12 * 0.9).toFixed(2)} Annually (10% discount)
                </SelectItem>
              </SelectContent>
            </Select>
            {errors.plan && <p className="text-sm text-red-500 mt-1">{errors.plan}</p>}
          </div>
        )
      case "chargeSetupFee":
      case "chargeDeposit":
        return (
          <div key={field} className="flex items-center space-x-2">
            <Checkbox id={field} checked={quote[field]} onCheckedChange={(checked) => updateQuote(field, checked)} />
            <Label htmlFor={field}>{field === "chargeSetupFee" ? "Charge Setup Fee" : "Charge Deposit"}</Label>
          </div>
        )
      case "setupFee":
        return quote.chargeSetupFee ? (
          <div key={field}>
            <Label htmlFor="setup-fee" className="flex items-center gap-2">
              Setup Fee
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>One-time fee for setting up your storage unit</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <div className="flex items-center">
              <span className="mr-2">$</span>
              <Input
                id="setup-fee"
                type="number"
                value={quote.setupFee}
                onChange={(e) => updateQuote("setupFee", Number.parseFloat(e.target.value))}
                className="w-24"
              />
            </div>
            {errors.setupFee && <p className="text-sm text-red-500 mt-1">{errors.setupFee}</p>}
          </div>
        ) : null
      case "depositAmount":
        return quote.chargeDeposit ? (
          <div key={field}>
            <Label htmlFor="deposit-amount" className="flex items-center gap-2">
              Deposit Amount
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Refundable deposit amount for your storage unit</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <div className="flex items-center">
              <span className="mr-2">$</span>
              <Input
                id="deposit-amount"
                type="number"
                value={quote.depositAmount}
                onChange={(e) => updateQuote("depositAmount", Number.parseFloat(e.target.value))}
                className="w-24"
              />
            </div>
            {errors.depositAmount && <p className="text-sm text-red-500 mt-1">{errors.depositAmount}</p>}
          </div>
        ) : null
      default:
        return null
    }
  }

  return <div className="space-y-4">{fields.map(renderField)}</div>
}

