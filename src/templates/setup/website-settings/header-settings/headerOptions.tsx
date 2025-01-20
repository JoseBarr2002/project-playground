import { useState } from "react"
import { Label } from "@components/ui/label"
import { Switch } from "@components/ui/switch"

export function HeaderOptions() {
  const [stickyHeader, setStickyHeader] = useState(false)
  const [showSearchBar, setShowSearchBar] = useState(false)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label htmlFor="sticky-header">Sticky Header</Label>
        <Switch id="sticky-header" checked={stickyHeader} onCheckedChange={setStickyHeader} />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="show-search">Show Search Bar</Label>
        <Switch id="show-search" checked={showSearchBar} onCheckedChange={setShowSearchBar} />
      </div>
    </div>
  )
}

