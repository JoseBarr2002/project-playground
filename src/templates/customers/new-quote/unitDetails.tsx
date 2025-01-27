import type { Quote } from "./IQuote"
import { QuoteFormFields } from "./formFields"
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"

interface UnitDetailsProps {
  quote: Quote
  onChange: (quote: Quote) => void
  errors: Partial<Record<keyof Quote, string>>
}

export function UnitDetails({ quote, onChange, errors }: UnitDetailsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Unit Details</CardTitle>
      </CardHeader>
      <CardContent>
        <QuoteFormFields
          quote={quote}
          onChange={onChange}
          errors={errors}
          fields={["unitType", "startDate", "moveInDate"]}
        />
      </CardContent>
    </Card>
  )
}

