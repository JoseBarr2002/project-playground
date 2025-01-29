import { Input } from "@components/ui/input"
import { FormField } from "./formField"

export function MotorInformation() {
  return (
    <div className="space-y-4">
      <h3 className="font-medium">Motor Information</h3>
      <div className="grid gap-4 md:grid-cols-2">
        <FormField label="Motor - Make/Serial #">
          <Input id="motorMakeSerial" />
        </FormField>
        <FormField label="Motor - Horse Power">
          <Input id="motorHorsePower" type="number" />
        </FormField>
        <FormField label="Motor - Inboard, Outboard, or I/O">
          <Input id="motorType" />
        </FormField>
        <FormField label="Motor - Est. Value $">
          <Input id="motorValue" type="number" />
        </FormField>
      </div>
    </div>
  )
}

