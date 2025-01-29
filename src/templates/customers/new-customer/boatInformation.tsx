import { Input } from "@components/ui/input"
import { FormField } from "./formField"
import { Label } from "@components/ui/label"

export function BoatInformation() {
  return (
    <div className="space-y-4">
      <h3 className="font-medium">Boat Information</h3>
      <div className="grid gap-4 md:grid-cols-2">
        <FormField label="Boat - Type">
          <Input id="boatType" />
        </FormField>
        <FormField label="Boat - HIN or Serial #">
          <Input id="boatHIN" />
        </FormField>
        <FormField label="Boat - Make, Model & Year Built">
          <Input id="boatMakeModel" />
        </FormField>
        <FormField label="Boat Length">
          <Input id="boatLength" />
        </FormField>
        <FormField label="Boat - Home Port">
          <Input id="boatHomePort" />
        </FormField>
        <FormField label="Boat Name">
          <Input id="boatName" />
        </FormField>
        <FormField label="Boat - Documentation (if documented)">
          <Input id="boatDocumentation" />
        </FormField>
        <FormField label="Is 'boat' the registered owner of the boat?">
          <div className="flex gap-4">
            <Label className="flex items-center gap-2">
              <Input type="radio" name="boatOwner" value="yes" />
              Yes
            </Label>
            <Label className="flex items-center gap-2">
              <Input type="radio" name="boatOwner" value="no" />
              No
            </Label>
          </div>
        </FormField>
      </div>
    </div>
  )
}

