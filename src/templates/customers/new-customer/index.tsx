import { useState } from "react"
import { Button } from "@components/ui/button"
import { useToast } from "@hooks/use-toast"
import { ContactInformation } from "./contactInformation"
import { AccountAccess } from "./accountAccess"
import { PersonalInformation } from "./personalInformation"
import { VehicleRegistration } from "./vehicleRegistration"
import { AdditionalInformation } from "./additionalInformation"
import { Notes } from "./notes"

export default function NewCustomerTemplate() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Success",
      description: "Customer created successfully!"
    })
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <ContactInformation />
      <AccountAccess />
      <PersonalInformation />
      <VehicleRegistration />
      <AdditionalInformation />
      <Notes />

      <div className="flex justify-end gap-4">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating..." : "Create Customer"}
        </Button>
      </div>
    </form>
  )
}

