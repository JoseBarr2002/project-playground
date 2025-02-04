import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"

export default function AdditionalLinks() {
  return (
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
  )
}

