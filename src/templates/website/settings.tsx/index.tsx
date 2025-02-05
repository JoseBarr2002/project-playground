import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs"
import { ColorTheme } from "./colorTheme"
import { FontSettings } from "./fontSettings"
import { HeaderSettings } from "./headerSettings"
import { FooterSettings } from "./footerSettings"
import { NavigationStyle } from "./navigationStyle"

export default function WebsiteSettingsTemplate() {
  return (
    <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 max-w-5xl">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-semibold">Theme Settings</h1>
        <p className="text-muted-foreground mt-1">Customize your site's appearance and functionality</p>
      </div>

      <Tabs defaultValue="theme" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="theme">Theme</TabsTrigger>
          <TabsTrigger value="header">Header</TabsTrigger>
          <TabsTrigger value="footer">Footer</TabsTrigger>
        </TabsList>

        <TabsContent value="theme" className="space-y-6">
          <FontSettings />
          <ColorTheme />
          <NavigationStyle />
        </TabsContent>

        <TabsContent value="header" className="space-y-6">
          <HeaderSettings />
        </TabsContent>

        <TabsContent value="footer" className="space-y-6">
          <FooterSettings />
        </TabsContent>
      </Tabs>
    </div>
  )
}

