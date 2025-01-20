import { GeneralSettings } from "./generalSettings"
import { BillingSettings } from "./billingSettings"
import { SecuritySettings } from "./securitySettings"
import { CustomerSettings } from "./customerSettings"

const SettingsTemplate = () => (
<div className="space-y-8 p-8">
          <GeneralSettings />
          <BillingSettings />
          <SecuritySettings />
          <CustomerSettings />
        </div>
)

export default SettingsTemplate;    