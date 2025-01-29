export default function FormInstructions() {
    return (
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          After submitting the form, a list of matching rentals will be displayed. You can customize the new monthly price
          of each selected Rental before submitting your final changes.
        </p>
        <p className="text-sm text-muted-foreground">
          Please note that changing the price of a Rental will not affect any line items that have already been invoiced.
        </p>
      </div>
    )
  }
  
  