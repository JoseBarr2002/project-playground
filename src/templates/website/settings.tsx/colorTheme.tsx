import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"
import { SectionCard } from "./sectionCard"

const colorThemes = [
  { name: "Default", primary: "#000000", secondary: "#ffffff" },
  { name: "Ocean", primary: "#0077be", secondary: "#ffffff" },
  { name: "Forest", primary: "#228B22", secondary: "#ffffff" },
  { name: "Sunset", primary: "#FF7F50", secondary: "#FFD700" },
  { name: "Lavender", primary: "#E6E6FA", secondary: "#9370DB" },
  { name: "Cherry", primary: "#DC143C", secondary: "#FFB6C1" },
  { name: "Midnight", primary: "#191970", secondary: "#87CEFA" },
  { name: "Earthy", primary: "#8B4513", secondary: "#DEB887" },
]

export function ColorTheme() {
  return (
    <SectionCard title="Color Theme" description="Select a preset or customize your own color scheme">
      <div className="space-y-6">
        <div className="space-y-4">
          <Label>Preset Themes</Label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {colorThemes.map((theme, i) => (
              <button
                key={i}
                className="aspect-square rounded-lg overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ring-offset-2"
              >
                <div className="w-full h-1/2" style={{ backgroundColor: theme.primary }} />
                <div className="w-full h-1/2" style={{ backgroundColor: theme.secondary }} />
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label>Primary Color</Label>
            <div className="flex gap-2">
              <Input type="color" className="w-12 p-1 h-10" />
              <Input placeholder="#000000" className="font-mono" />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Secondary Color</Label>
            <div className="flex gap-2">
              <Input type="color" className="w-12 p-1 h-10" />
              <Input placeholder="#000000" className="font-mono" />
            </div>
          </div>
        </div>
      </div>
    </SectionCard>
  )
}

