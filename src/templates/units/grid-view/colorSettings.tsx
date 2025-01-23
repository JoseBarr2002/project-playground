import { Input } from "@components/ui/input"
import type { UnitStatus } from "./gridViewTypes"

interface ColorSettingsProps {
  statusColors: UnitStatus[]
  setStatusColors: (colors: UnitStatus[]) => void
}

export const ColorSettings: React.FC<ColorSettingsProps> = ({ statusColors, setStatusColors }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {statusColors.map((status) => (
        <div key={status.name} className="flex flex-col gap-2">
          <label className="text-sm font-medium">{status.name}</label>
          <div className="flex gap-2">
            <div className="w-10 h-10 rounded border" style={{ backgroundColor: status.color }} />
            <Input
              type="color"
              value={status.color}
              onChange={(e) => {
                const newColors = statusColors.map((s) =>
                  s.name === status.name ? { ...status, color: e.target.value } : s,
                )
                setStatusColors(newColors)
              }}
              className="w-full"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

