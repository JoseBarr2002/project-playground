import { Separator } from "@components/ui/separator"
import GeneralInformation from "./generalInformation"
import AddressTabs from "./addressTabs"
import ActionButtons from "./actionButtons"

const ContactTemplate = () => {
  return (
  <div className="container mx-auto p-6 max-w-4xl">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-orange-600 mb-2">Contact Information</h1>
        <div className="text-sm text-muted-foreground flex items-center space-x-2">
          <span>Home</span>
          <span>/</span>
          <span>Setup</span>
          <span>/</span>
          <span className="font-medium text-orange-600">Contact</span>
        </div>
      </div>

      <form className="space-y-6">
        <GeneralInformation />
        <AddressTabs />
        <ActionButtons />
      </form>

      <Separator className="my-8" />
      </div>
  )
};

export default ContactTemplate;
