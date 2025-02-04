import { Button } from "@components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@components/ui/card"
import { LinkIcon } from "lucide-react"
import {Link} from "expo-router"
import { Layout } from "./_layout"
import { FormField } from "./formField"
import { VisibilitySelect } from "./visibilitySelect"

export default function ExternalLinkTemplate() {
  return (
    <Layout>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <LinkIcon className="h-5 w-5 text-blue-500" />
            <CardTitle className="text-2xl font-semibold text-gray-900">Add External Link</CardTitle>
          </div>
          <CardDescription>Create a new external link for your website navigation</CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-8">
            <FormField
              id="tab-name"
              label="Tab Name"
              type="text"
              placeholder="e.g., Our Blog"
              tooltip="This text will appear in your website's navigation menu"
            />

            <FormField
              id="external-url"
              label="External URL"
              type="url"
              placeholder="https://example.com"
              tooltip="Enter the full URL including https://"
            />

            <VisibilitySelect />

            {/* Additional Options */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-700">
                Need to rearrange your navigation? Visit the{" "}
                <Link href="/website/pages" className="font-medium underline hover:text-blue-900">
                  navigation management page
                </Link>{" "}
                to customize the order and hierarchy of your links.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 pt-4">
              <Button size="sm" type="submit" className="bg-blue-600 hover:bg-blue-700">
                Save Link
              </Button>
              <Link href="/website/pages">
                <Button size="sm" variant="outline" type="button">
                  Cancel
                </Button>
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </Layout>
  )
}

