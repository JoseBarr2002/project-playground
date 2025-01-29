import { Input } from "@components/ui/input"
import { FormSection } from "./formSection"
import { FormField } from "./formField"

export function AdditionalInformation() {
  return (
    <FormSection title="Additional Information">
      <div className="grid gap-4 md:grid-cols-2">
        <FormField label="Occupation">
          <Input id="occupation" />
        </FormField>
        <FormField label="Company">
          <Input id="company" />
        </FormField>
        <FormField label="Referral Source">
          <Input id="referralSource" />
        </FormField>
        <FormField label="Customer Type">
          <Input id="customerType" />
        </FormField>
        <FormField label="Preferred Contact Method">
          <Input id="preferredContactMethod" />
        </FormField>
        <FormField label="Social Media Profiles">
          <Input id="socialMediaProfiles" />
        </FormField>
        <FormField label="Loyalty Program Number">
          <Input id="loyaltyProgramNumber" />
        </FormField>
        <FormField label="Preferred Language">
          <Input id="preferredLanguage" />
        </FormField>
        <FormField label="Special Requirements or Preferences">
          <Input id="specialRequirements" />
        </FormField>
        <FormField label="Emergency Contact">
          <Input id="emergencyContact" />
        </FormField>
        <FormField label="Newsletter Subscription">
          <Input id="newsletterSubscription" type="checkbox" />
        </FormField>
        <FormField label="Terms and Conditions Accepted">
          <Input id="termsAccepted" type="checkbox" />
        </FormField>
      </div>
    </FormSection>
  )
}

