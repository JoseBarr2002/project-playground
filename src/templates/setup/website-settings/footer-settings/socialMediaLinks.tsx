import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"
// import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

export function SocialMediaLinks() {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Social Media Links</h3>
      <div className="grid gap-4">
        <div className="flex items-center gap-2">
          {/* <Facebook className="h-5 w-5 text-muted-foreground" /> */}
          <Input placeholder="Facebook URL" />
        </div>
        <div className="flex items-center gap-2">
          {/* <Twitter className="h-5 w-5 text-muted-foreground" /> */}
          <Input placeholder="Twitter URL" />
        </div>
        <div className="flex items-center gap-2">
          {/* <Linkedin className="h-5 w-5 text-muted-foreground" /> */}
          <Input placeholder="LinkedIn URL" />
        </div>
        <div className="flex items-center gap-2">
          {/* <Instagram className="h-5 w-5 text-muted-foreground" /> */}
          <Input placeholder="Instagram URL" />
        </div>
        <div className="flex items-center gap-2">
          {/* <Youtube className="h-5 w-5 text-muted-foreground" /> */}
          <Input placeholder="YouTube URL" />
        </div>
      </div>
    </div>
  )
}

