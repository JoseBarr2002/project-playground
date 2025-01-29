import { Input } from "@components/ui/input"
import { FormField } from "./formField"

export function TrailerInformation() {
  return (
    <div className="space-y-4">
      <h3 className="font-medium">Trailer Information</h3>
      <div className="grid gap-4 md:grid-cols-2">
        <FormField label="Trailer - License Plate number">
          <Input id="trailerLicense" />
        </FormField>
        <FormField label="Trailer - State Registered">
          <Input id="trailerState" />
        </FormField>
        <FormField label="Trailer - Expiration">
          <Input id="trailerExpiration" type="date" />
        </FormField>
        <FormField label="Trailer - VIN/Serial #">
          <Input id="trailerVIN" />
        </FormField>
        <FormField label="Trailer - Est. Value $">
          <Input id="trailerValue" type="number" />
        </FormField>
        <FormField label="Trailer - Insurance Provider">
          <Input id="trailerInsurance" />
        </FormField>
        <FormField label="Trailer - Policy #">
          <Input id="trailerPolicy" />
        </FormField>
      </div>
    </div>
  )
}

