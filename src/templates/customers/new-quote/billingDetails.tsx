import type { Quote } from "./IQuote"
import { QuoteFormFields } from "./formFields"
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"

interface BillingDetailsProps {
  quote: Quote
  onChange: (quote: Quote) => void
  errors: Partial<Record<keyof Quote, string>>
}

export function BillingDetails({ quote, onChange, errors }: BillingDetailsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Billing Details</CardTitle>
      </CardHeader>
      <CardContent>
        <QuoteFormFields
          quote={quote}
          onChange={onChange}
          errors={errors}
          fields={["plan", "chargeSetupFee", "chargeDeposit", "setupFee", "depositAmount"]}
        />
      </CardContent>
    </Card>
  )
}

