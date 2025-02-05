import { Button } from "@components/ui/button"
import { ExternalLink, Phone } from "lucide-react"

export function CTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button size="lg" className="w-full sm:w-auto">
        <Phone className="w-4 h-4 mr-2" />
        Call 999-999-9999 x2
      </Button>
      <Button size="lg" variant="outline" className="w-full sm:w-auto">
        Request Information
        <ExternalLink className="w-4 h-4 ml-2" />
      </Button>
    </div>
  )
}

