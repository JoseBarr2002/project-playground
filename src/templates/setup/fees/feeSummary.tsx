import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import type { Fee } from "./IFee"

interface FeeSummaryProps {
  fees: Fee[]
}

export function FeeSummary({ fees }: FeeSummaryProps) {
  const totalFees = fees.reduce((sum, fee) => sum + fee.amount, 0)

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Fee Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Total Fees</p>
            <p className="text-2xl font-bold">${totalFees.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Number of Fees</p>
            <p className="text-2xl font-bold">{fees.length}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

