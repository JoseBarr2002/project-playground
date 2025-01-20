import { FeeCard } from "./feeCard"
import type { Fee } from "./IFee"

interface FeeListProps {
  fees: Fee[]
  onEdit: (fee: Fee) => void
  onDelete: (fee: Fee) => void
}

export function FeeList({ fees, onEdit, onDelete }: FeeListProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {fees.map((fee) => (
        <FeeCard key={fee.id} fee={fee} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  )
}

