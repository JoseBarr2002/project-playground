import { useState } from "react"
import { Card, CardContent } from "@components/ui/card"
import { Switch } from "@components/ui/switch"
import { Label } from "@components/ui/label"
import { Button } from "@components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@components/ui/tooltip"

export default function PaymentMethodsTab() {
  const [paymentMethods, setPaymentMethods] = useState({
    visa: true,
    mastercard: true,
    discover: true,
    amex: true,
    ach: false,
  })

  const handlePaymentMethodChange = (method: keyof typeof paymentMethods) => {
    setPaymentMethods((prev) => ({ ...prev, [method]: !prev[method] }))
  }

  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-4">Accepted Payment Methods</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            {Object.entries(paymentMethods).map(([method, isChecked]) => (
              <div key={method} className="flex items-center justify-between">
                <Label htmlFor={method} className="text-sm font-medium capitalize">
                  {method}
                </Label>
                <Switch
                  id={method}
                  checked={isChecked}
                  onCheckedChange={() => handlePaymentMethodChange(method as keyof typeof paymentMethods)}
                />
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <h3 className="font-medium mb-2">Processing Fees</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• 2.49% on Visa, Mastercard, & Discover</li>
              <li>• 3.29% on American Express</li>
              <li>• $0.25 per credit card authorization</li>
              <li>• $0.50 per ACH transaction</li>
              <li>• $20 per failed ACH transaction</li>
              <li>• $20 if deposit fails</li>
              <li>• $20 per chargeback</li>
              <li>• $14.95 monthly fee</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 space-y-2 text-sm text-muted-foreground border-t pt-4">
          <p>Note: Changes only apply to new payment accounts.</p>
          <p>Disabling a payment method won't cancel active recurring billing.</p>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button className="mt-4" size="sm">Update Payment Methods</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Click to save your payment method changes</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardContent>
    </Card>
  )
}

