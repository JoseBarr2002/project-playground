import { useState } from "react"
import { Button } from "@components/ui/button"
import { UnitDetails } from "./unitDetails"
import { BillingDetails } from "./billingDetails"
import { QuoteSummary } from "./summary"
import type { Quote } from "./IQuote"
import { toast } from "@hooks/use-toast"

export function QuoteForm() {
  const [quote, setQuote] = useState<Quote>({
    unitType: "",
    startDate: undefined,
    moveInDate: undefined,
    plan: "",
    chargeSetupFee: true,
    chargeDeposit: false,
    setupFee: 25.0,
    depositAmount: 0,
    baseRent: 60.0,
  })

  const [errors, setErrors] = useState<Partial<Record<keyof Quote, string>>>({})

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof Quote, string>> = {}

    if (!quote.unitType) {
      newErrors.unitType = "Please select a unit type"
    }
    if (!quote.startDate) {
      newErrors.startDate = "Please select a start date"
    }
    if (!quote.plan) {
      newErrors.plan = "Please select a plan"
    }
    if (!quote.moveInDate) {
      newErrors.moveInDate = "Please select a move-in date"
    }
    if (quote.chargeSetupFee && (isNaN(quote.setupFee) || quote.setupFee <= 0)) {
      newErrors.setupFee = "Please enter a valid setup fee"
    }
    if (quote.chargeDeposit && (isNaN(quote.depositAmount) || quote.depositAmount <= 0)) {
      newErrors.depositAmount = "Please enter a valid deposit amount"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      // Handle form submission
      console.log("Form submitted:", quote)
      toast({
        title: "Quote Generated",
        description: "Your quote has been successfully generated.",
      })
    } else {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <UnitDetails quote={quote} onChange={setQuote} errors={errors} />
      <BillingDetails quote={quote} onChange={setQuote} errors={errors} />
      <QuoteSummary quote={quote} />
      <Button type="submit" className="w-full">
        Generate Quote
      </Button>
    </form>
  )
}

