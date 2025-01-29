import type { FormData } from "./massEditRentalForm"

interface PreviewChangesProps {
  formData: FormData
}

export default function PreviewChanges({ formData }: PreviewChangesProps) {
  return (
    <div className="mt-6 p-4 bg-muted rounded-lg">
      <h3 className="font-medium mb-2">Preview of Changes</h3>
      <p className="text-sm text-muted-foreground">
        This will affect units that haven't been updated in {formData.monthsAgo} months. Prices will increase by{" "}
        {formData.isPercentage ? `${formData.amount}%` : `$${formData.amount}`}. Tenants will receive {formData.days}{" "}
        days notice.
      </p>
    </div>
  )
}

