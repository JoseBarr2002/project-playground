import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Button } from "@components/ui/button"
import { Loader2 } from "lucide-react"
import { useToast } from "@hooks/use-toast"
import { Toaster } from "@components/ui/toaster"
import Breadcrumb from "./breadcrumb"
import FormFields from "./formFields"
import PreviewChanges from "./previewChanges"
import FormInstructions from "./formInstructions"
import HelpTooltip from "./helpTooltip"

export interface FormData {
  monthsAgo: string
  unitType: string
  amount: string
  days: string
  isPercentage: boolean
}

export interface FormErrors {
  monthsAgo?: string
  amount?: string
  days?: string
}

export default function MassEditRentalForm() {
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

  return (
    <div className="container mx-auto p-6">
      <Toaster />
      <Breadcrumb />
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
              <FormFields formData={formData} setFormData={setFormData} errors={errors} setErrors={setErrors} />

              {previewMode && <PreviewChanges formData={formData} />}

              <FormInstructions />

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

