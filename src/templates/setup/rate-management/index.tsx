import { RateManagementTabs } from "./rateManagementTabs"
import { PageHeader } from "@components/page-header"

export default function RateManagementTemplate() {
  return (
    <div className="container mx-auto p-6 max-w-5xl">
      <PageHeader
        title="Rate Management Settings"
        description="Configure automated pricing changes based on occupancy and time-based rules."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Setup", href: "/setup" },
          { label: "Rate Management Settings", href: "/settings/rate-management" },
        ]}
      />
      <RateManagementTabs />
    </div>
  )
}

