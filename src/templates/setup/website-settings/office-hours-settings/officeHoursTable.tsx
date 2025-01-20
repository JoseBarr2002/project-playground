import { Input } from "@components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"

export function OfficeHoursTable() {
  return (
    <div className="rounded-lg border">
      <table className="w-full">
        <thead>
          <tr className="border-b bg-muted/50">
            <th className="p-2 text-left font-medium">Day</th>
            <th className="p-2 text-left font-medium">Status</th>
            <th className="p-2 text-left font-medium">Open</th>
            <th className="p-2 text-left font-medium">Close</th>
          </tr>
        </thead>
        <tbody>
          {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day) => (
            <tr key={day} className="border-b last:border-0">
              <td className="p-2">{day}</td>
              <td className="p-2">
                <Select defaultValue="open">
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                  </SelectContent>
                </Select>
              </td>
              <td className="p-2">
                <Input type="time" className="w-[120px]" defaultValue="09:00" />
              </td>
              <td className="p-2">
                <Input type="time" className="w-[120px]" defaultValue="17:00" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

