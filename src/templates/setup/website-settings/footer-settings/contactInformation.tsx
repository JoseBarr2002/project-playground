import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"

export function ContactInformation() {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Contact Information</h3>
      <div className="grid gap-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Email</Label>
            <Input type="email" placeholder="contact@example.com" />
          </div>
          <div className="space-y-2">
            <Label>Phone</Label>
            <Input type="tel" placeholder="(555) 555-5555" />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Address</Label>
          <Input placeholder="123 Main St" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label>City</Label>
            <Input placeholder="City" />
          </div>
          <div className="space-y-2">
            <Label>State</Label>
            <Input placeholder="State" />
          </div>
          <div className="space-y-2">
            <Label>ZIP</Label>
            <Input placeholder="ZIP" />
          </div>
        </div>
      </div>
    </div>
  )
}

