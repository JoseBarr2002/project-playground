import { Button } from "@components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@components/ui/breadcrumb"
import { ChevronRight } from "lucide-react"
import BasicInformation from "./basicInformation"
import NavigationSettings from "./navSettings"
import SEOSettings from "./SEOSettings"
import AdditionalLinks from "./additionalLinks"

export default function NewPageForm() {
  return (
    <div className="container mx-auto p-6">
      <Breadcrumb className="mb-6">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <ChevronRight className="h-4 w-4" />
          <BreadcrumbLink href="/website">Website</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <ChevronRight className="h-4 w-4" />
          <span className="text-muted-foreground">New Page</span>
        </BreadcrumbItem>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Create New Page</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <BasicInformation />
          <NavigationSettings />
          <SEOSettings />
          <AdditionalLinks />

          <div className="flex items-center justify-between pt-6 border-t">
            <p className="text-sm text-muted-foreground">Additional widgets can be added after saving the page</p>
            <div className="flex gap-2">
              <Button variant="outline">Cancel</Button>
              <Button type="submit">Save Page</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

