
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs"
import { ThemeSettings } from "./themeSettings"
import { HeaderSettings } from "./headerSettings"
import { NavigationSettings } from "./navigationSettings"
import { FooterSettings } from "./footerSettings"
import { OfficeHoursSettings } from "./officeHoursSettings"
import { AnalyticsSettings } from "./analyticsSettings"
import { Button } from "@components/ui/button"
import { toast } from "@components/ui/toast"
import { Toaster } from "@components/ui/toaster"
import { Breadcrumb } from "./breadcrumb"

export default function WebsiteSettingsTemplate() {
  const [activeTab, setActiveTab] = useState("theme")

  const handleSave = () => {
    // In a real application, this would save the settings to a backend
    toast({
      title: "Settings saved",
      description: `Your ${activeTab} settings have been saved successfully.`,
    })
  }

  return (
    <div className="container mx-auto py-6">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Website Settings</h1>
          <Breadcrumb />
        </div>
        <Button size="sm" onClick={handleSave}>Save All Changes</Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
          <TabsTrigger value="theme">Theme</TabsTrigger>
          <TabsTrigger value="header">Header</TabsTrigger>
          <TabsTrigger value="navigation">Navigation</TabsTrigger>
          <TabsTrigger value="footer">Footer</TabsTrigger>
          <TabsTrigger value="office-hours">Office Hours</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="theme">
          <ThemeSettings />
        </TabsContent>
        <TabsContent value="header">
          <HeaderSettings />
        </TabsContent>
        <TabsContent value="navigation">
          <NavigationSettings />
        </TabsContent>
        <TabsContent value="footer">
          <FooterSettings />
        </TabsContent>
        <TabsContent value="office-hours">
          <OfficeHoursSettings />
        </TabsContent>
        <TabsContent value="analytics">
          <AnalyticsSettings />
        </TabsContent>
      </Tabs>
      <Toaster />
    </div>
  )
}

