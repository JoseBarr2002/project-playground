import { GeneralSettings } from "./GeneralSettings"
import { BillingSettings } from "./BillingSettings"
import { SecuritySettings } from "./SecuritySettings"
import { CustomerSettings } from "./CustomerSettings"

const SettingsTemplate = () => (
<div className="space-y-8 p-8">
          <GeneralSettings />
          <BillingSettings />
          <SecuritySettings />
          <CustomerSettings />
        </div>
)

export default SettingsTemplate;    