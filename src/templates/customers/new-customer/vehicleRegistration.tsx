import { FormSection } from "./formSection"
import { MilitaryService } from "./militaryService"
import { BoatInformation } from "./boatInformation"
import { MotorInformation } from "./motorInformation"
import { TrailerInformation } from "./trailerInformation"
import { VehicleInformation } from "./vehicleInformation"

export function VehicleRegistration() {
  return (
    <FormSection title="Vehicle & Registration Information">
      <div className="space-y-6">
        <MilitaryService />
        <BoatInformation />
        <MotorInformation />
        <TrailerInformation />
        <VehicleInformation />
      </div>
    </FormSection>
  )
}

