import { PageStatistics } from "./statistics"
import { PageManagementTable } from "./managementTable"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@components/ui/card"
import { mockPages } from "./mockPages"
import { PageHeader } from "./header"

export default function WebsitePagesTemplate() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col gap-6">
        <PageHeader
          title="Pages"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Website", href: "/website" },
            { label: "Pages", href: "/website/pages", current: true },
          ]}
        />
        <PageStatistics pages={mockPages} />
        <Card>
          <CardHeader>
            <CardTitle>Manage Pages</CardTitle>
            <CardDescription>View and manage all your website pages</CardDescription>
          </CardHeader>
          <CardContent>
            <PageManagementTable pages={mockPages} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

