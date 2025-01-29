import { useState } from "react"
import { ChevronRight, HelpCircle, Percent, DollarSign, Loader2 } from "lucide-react"
import { Button } from "@components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"
import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@components/ui/tooltip"
import { Switch } from "@components/ui/switch"
import { useToast } from "@hooks/use-toast"
import { Toaster } from "@components/ui/toaster"

interface FormData {
  monthsAgo: string
  unitType: string
  amount: string
  days: string
  isPercentage: boolean
}

interface FormErrors {
  monthsAgo?: string
  amount?: string
  days?: string
}

export default function MassEditRentalFormTemplate() {
  const [formData, setFormData] = useState<FormData>({
    monthsAgo: "",
    unitType: "all",
    amount: "",
    days: "",
    isPercentage: false,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isLoading, setIsLoading] = useState(false)
  const [previewMode, setPreviewMode] = useState(false)
  const { toast } = useToast()

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.monthsAgo) {
      newErrors.monthsAgo = "Please specify how many months ago"
    } else if (Number(formData.monthsAgo) < 0) {
      newErrors.monthsAgo = "Months cannot be negative"
    }

    if (!formData.amount) {
      newErrors.amount = "Please enter an amount"
    } else if (formData.isPercentage && (Number(formData.amount) < 0 || Number(formData.amount) > 100)) {
      newErrors.amount = "Percentage must be between 0 and 100"
    } else if (!formData.isPercentage && Number(formData.amount) < 0) {
      newErrors.amount = "Amount cannot be negative"
    }

    if (!formData.days) {
      newErrors.days = "Please specify the notice period"
    } else if (Number(formData.days) < 0) {
      newErrors.days = "Days cannot be negative"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Please check the form for errors and try again.",
      })
      return
    }

    if (!previewMode) {
      setPreviewMode(true)
      return
    }

    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      toast({
        title: "Success!",
        description: "Rental prices have been updated successfully.",
      })
      setPreviewMode(false)
      // Reset form or redirect
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update rental prices. Please try again.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const HelpTooltip = ({ content }: { content: string }) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <HelpCircle className="w-4 h-4 text-muted-foreground hover:text-primary cursor-help" />
        </TooltipTrigger>
        <TooltipContent>
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )

  return (
    <div className="container mx-auto p-6">
      <Toaster />

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <a href="#" className="hover:text-primary">
          Home
        </a>
        <ChevronRight className="w-4 h-4" />
        <a href="#" className="hover:text-primary">
          Setup
        </a>
        <ChevronRight className="w-4 h-4" />
        <span className="text-primary font-medium">Mass Edit Rental Prices</span>
      </nav>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Mass Edit Rental Prices
            <HelpTooltip content="Update multiple rental prices at once with this tool" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <p className="text-muted-foreground">
              This page allows you to schedule price changes for active Rentals. To begin, fill out the form below:
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Rent Updated At Least */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="monthsAgo">Rent Updated At Least</Label>
                    <HelpTooltip content="Filter rentals that haven't been updated in this many months" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                      <Input
                        id="monthsAgo"
                        type="number"
                        placeholder="0"
                        value={formData.monthsAgo}
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, monthsAgo: e.target.value }))
                          setErrors((prev) => ({ ...prev, monthsAgo: undefined }))
                        }}
                        className={errors.monthsAgo ? "border-red-500" : ""}
                      />
                      {errors.monthsAgo && (
                        <span className="text-xs text-red-500 mt-1 absolute -bottom-5 left-0">{errors.monthsAgo}</span>
                      )}
                    </div>
                    <span className="whitespace-nowrap text-sm">Month(s) Ago</span>
                  </div>
                </div>

                {/* Unit Type */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="unitType">Unit Type</Label>
                    <HelpTooltip content="Select a specific type of unit to update" />
                  </div>
                  <Select
                    value={formData.unitType}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, unitType: value }))}
                  >
                    <SelectTrigger id="unitType">
                      <SelectValue placeholder="Select unit type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Units</SelectItem>
                      <SelectItem value="standard">Standard Units</SelectItem>
                      <SelectItem value="climate">Climate Controlled Units</SelectItem>
                      <SelectItem value="parking">Parking Units</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Increase Amount */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="amount">Increase Monthly Rental Price By</Label>
                    <HelpTooltip
                      content={formData.isPercentage ? "Enter a percentage increase" : "Enter a fixed amount increase"}
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="relative flex-1">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2">
                        {formData.isPercentage ? <Percent className="w-4 h-4" /> : <DollarSign className="w-4 h-4" />}
                      </span>
                      <Input
                        id="amount"
                        type="number"
                        step={formData.isPercentage ? "0.1" : "0.01"}
                        className={`pl-8 ${errors.amount ? "border-red-500" : ""}`}
                        placeholder={formData.isPercentage ? "0.0" : "0.00"}
                        value={formData.amount}
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, amount: e.target.value }))
                          setErrors((prev) => ({ ...prev, amount: undefined }))
                        }}
                      />
                      {errors.amount && (
                        <span className="text-xs text-red-500 mt-1 absolute -bottom-5 left-0">{errors.amount}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Label htmlFor="isPercentage" className="text-sm">
                        Percentage
                      </Label>
                      <Switch
                        id="isPercentage"
                        checked={formData.isPercentage}
                        onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, isPercentage: checked }))}
                      />
                    </div>
                  </div>
                </div>

                {/* Advanced Notice */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="days">Advanced Notice</Label>
                    <HelpTooltip content="Number of days notice before the price change takes effect" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                      <Input
                        id="days"
                        type="number"
                        placeholder="0"
                        value={formData.days}
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, days: e.target.value }))
                          setErrors((prev) => ({ ...prev, days: undefined }))
                        }}
                        className={errors.days ? "border-red-500" : ""}
                      />
                      {errors.days && (
                        <span className="text-xs text-red-500 mt-1 absolute -bottom-5 left-0">{errors.days}</span>
                      )}
                    </div>
                    <span className="whitespace-nowrap text-sm">Days</span>
                  </div>
                </div>
              </div>

              {previewMode && (
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <h3 className="font-medium mb-2">Preview of Changes</h3>
                  <p className="text-sm text-muted-foreground">
                    This will affect units that haven't been updated in {formData.monthsAgo} months. Prices will
                    increase by {formData.isPercentage ? `${formData.amount}%` : `$${formData.amount}`}. Tenants will
                    receive {formData.days} days notice.
                  </p>
                </div>
              )}

              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  After submitting the form, a list of matching rentals will be displayed. You can customize the new
                  monthly price of each selected Rental before submitting your final changes.
                </p>
                <p className="text-sm text-muted-foreground">
                  Please note that changing the price of a Rental will not affect any line items that have already been
                  invoiced.
                </p>
              </div>

              <Button type="submit" size="lg" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {previewMode ? "Confirm Changes" : "Preview Changes"}
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

