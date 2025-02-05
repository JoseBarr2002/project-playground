import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"
import { Switch } from "@components/ui/switch"
import { SectionCard } from "./sectionCard"

export function FooterSettings() {
  return (
    <>
      <SectionCard title="Contact Information" description="Add your business contact details">
        <div className="grid gap-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label>Email Address</Label>
              <Input type="email" placeholder="contact@example.com" />
            </div>
            <div className="space-y-2">
              <Label>Phone Number</Label>
              <Input type="tel" placeholder="(555) 555-5555" />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Street Address</Label>
            <Input placeholder="123 Main St" />
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-2">
              <Label>City</Label>
              <Input placeholder="City" />
            </div>
            <div className="space-y-2">
              <Label>State</Label>
              <Input placeholder="State" />
            </div>
            <div className="space-y-2">
              <Label>ZIP Code</Label>
              <Input placeholder="ZIP" />
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Social Media" description="Link your social media accounts">
        <div className="grid gap-4">
          {[
            { label: "Facebook", placeholder: "https://facebook.com/..." },
            { label: "Twitter", placeholder: "https://twitter.com/..." },
            { label: "LinkedIn", placeholder: "https://linkedin.com/..." },
            { label: "Instagram", placeholder: "https://instagram.com/..." },
          ].map(({ label, placeholder }) => (
            <div key={label} className="space-y-2">
              <Label>{label}</Label>
              <Input placeholder={placeholder} />
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Business Hours" description="Set your operating hours">
        <div className="space-y-4">
          {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day) => (
            <div key={day} className="grid gap-4 sm:grid-cols-[1fr_2fr] items-center">
              <div className="flex items-center gap-2">
                <Switch />
                <Label>{day}</Label>
              </div>
              <div className="flex items-center gap-2">
                <Input type="time" className="flex-1" />
                <span className="text-muted-foreground">to</span>
                <Input type="time" className="flex-1" />
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </>
  )
}

