import type { Quote } from "./IQuote"
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"

interface QuoteSummaryProps {
  quote: Quote
}

export function QuoteSummary({ quote }: QuoteSummaryProps) {
  const calculateTotals = () => {
    const setupFee = quote.chargeSetupFee ? quote.setupFee : 0
    const proratedRent = 9.68 // This would normally be calculated based on dates
    const deposit = quote.chargeDeposit ? quote.depositAmount : 0

    return {
      rent: quote.baseRent,
      proratedRent,
      setupFee,
      deposit,
      total: proratedRent + setupFee + deposit,
    }
  }

  const totals = calculateTotals()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quote Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Monthly Rent</span>
            <span>${totals.rent.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Prorated Rent</span>
            <span>${totals.proratedRent.toFixed(2)}</span>
          </div>
          {quote.chargeSetupFee && (
            <div className="flex justify-between">
              <span>Setup Fee</span>
              <span>${totals.setupFee.toFixed(2)}</span>
            </div>
          )}
          {quote.chargeDeposit && (
            <div className="flex justify-between">
              <span>Deposit</span>
              <span>${totals.deposit.toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between font-semibold pt-2 border-t">
            <span>Total Due</span>
            <span>${totals.total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>
              Amount due every month starting {quote.startDate ? quote.startDate.toLocaleDateString() : "N/A"}
            </span>
            <span>${totals.rent.toFixed(2)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

