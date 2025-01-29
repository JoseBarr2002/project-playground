import { Input } from "@components/ui/input"
import { FormField } from "./formField"

export function VehicleInformation() {
  return (
    <div className="space-y-4">
      <h3 className="font-medium">Vehicle Information</h3>
      <div className="grid gap-4 md:grid-cols-2">
        <FormField label="Type of Vehicle (Automobile, Recreational, Motorcycle, Etc.)">
          <Input id="vehicleType" />
        </FormField>
        <FormField label="Vehicle - Make, Model & Year">
          <Input id="vehicleMakeModel" />
        </FormField>
        <FormField label="Vehicle - Body Style">
          <Input id="vehicleBodyStyle" />
        </FormField>
        <FormField label="Vehicle - VIN Number">
          <Input id="vehicleVIN" />
        </FormField>
        <FormField label="Vehicle - License Plate Number">
          <Input id="vehicleLicense" />
        </FormField>
        <FormField label="Vehicle - States Registered">
          <Input id="vehicleState" />
        </FormField>
        <FormField label="Vehicle - Title number">
          <Input id="vehicleTitle" />
        </FormField>
        <FormField label="Vehicle - Expiration">
          <Input id="vehicleExpiration" type="date" />
        </FormField>
        <FormField label="Vehicle - Est. Value $">
          <Input id="vehicleValue" type="number" />
        </FormField>
        <FormField label="Vehicle - Insurance Provider">
          <Input id="vehicleInsurance" />
        </FormField>
        <FormField label="Vehicle - Policy #">
          <Input id="vehiclePolicy" />
        </FormField>
      </div>
    </div>
  )
}

