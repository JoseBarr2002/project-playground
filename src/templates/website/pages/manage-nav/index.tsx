
import { BreadcrumbTrail } from "./breadcrumbTrail"
import { TipsAlert } from "./tipsAlert"
import { NavigationManager } from "./navManager"
import { Button } from "@components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@components/ui/card"

export default function ManageNavigationPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      <main className="container mx-auto px-4 py-8 flex-grow">
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl">Manage Website Navigation</CardTitle>
                <CardDescription className="text-base">
                  Customize how your navigation menu appears to visitors
                </CardDescription>
              </div>
              <Button size="sm" className="bg-blue-500 text-white hover:bg-blue-600">Preview Website</Button>
            </div>
          </CardHeader>
          <CardContent>
            <BreadcrumbTrail />
          </CardContent>
        </Card>

        <div className="mb-6">
          <TipsAlert />
        </div>

        <Card>
          <CardContent className="p-6">
            <NavigationManager />
          </CardContent>
        </Card>
      </main>

    </div>
  )
}

