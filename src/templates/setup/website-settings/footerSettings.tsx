import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Button } from "@components/ui/button"
import { ContactInformation } from "./footer-settings/contactInformation"
import { SocialMediaLinks } from "./footer-settings/socialMediaLinks"
import { FooterOptions } from "./footer-settings/footerOptions"

export function FooterSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Footer Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <ContactInformation />
        <SocialMediaLinks />
        <FooterOptions />
        <Button className="w-full">Preview Footer</Button>
      </CardContent>
    </Card>
  )
}

