import { Button } from "@components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"
import { Textarea } from "@components/ui/textarea"
import { Info} from "lucide-react"
import {Link} from "expo-router"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@components/ui/tooltip"

export default function NewPageTemplate() {
  return (
    <div className="container mx-auto p-6">

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Create New Page</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Basic Information Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold border-b pb-2">Basic Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="title">Page Title</Label>
                <Input id="title" placeholder="Enter page title" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="slug">URL Slug</Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">
                          This will be the URL of your page. For example, setting this to "about" will create the page
                          at https://ibexpayments.com/pages/about
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Input id="slug" placeholder="page-url-slug" />
              </div>
            </div>
          </div>

          {/* Navigation Settings */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold border-b pb-2">Navigation Settings</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="tab-name">Menu Label</Label>
                <Input id="tab-name" placeholder="Enter menu label" />
                <p className="text-sm text-muted-foreground">Text shown in the navigation menu</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tab-visibility">Menu Placement</Label>
                <Select>
                  <SelectTrigger id="tab-visibility">
                    <SelectValue placeholder="Select menu placement" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="main">Main Menu</SelectItem>
                    <SelectItem value="footer">Footer Menu</SelectItem>
                    <SelectItem value="hidden">Hidden</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* SEO Settings */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold border-b pb-2">SEO Settings</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="meta-keywords">Keywords</Label>
                  <Button variant="ghost" size="sm" className="h-8">
                    Get suggestions
                  </Button>
                </div>
                <Input id="meta-keywords" placeholder="Enter SEO keywords" />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="meta-description">Description</Label>
                <Textarea id="meta-description" placeholder="Enter a description for search engines" className="h-24" />
              </div>
            </div>
          </div>

          {/* Additional Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold border-b pb-2">Additional Links</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="footer-button">Footer Button Text</Label>
                <Input id="footer-button" placeholder="Leave empty to hide button" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="login-form-link">Login Form Link Text</Label>
                <Input id="login-form-link" placeholder="Leave empty to hide link" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-6 border-t">
            <p className="text-sm text-muted-foreground">Additional widgets can be added after saving the page</p>
            <div className="flex gap-2">
              <Link href="/website/pages">
                <Button size="sm" variant="outline">Cancel</Button>
              </Link>
              <Button size="sm" type="submit">Save Page</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

