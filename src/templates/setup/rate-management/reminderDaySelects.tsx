import { Label } from "@components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"

export function ReminderDaySelect() {
  return (
    <div className="space-y-4">
      <Label htmlFor="reminder-day" className="text-lg font-semibold">
        Reminder Day of Month
      </Label>
      <Select defaultValue="dont-send">
        <SelectTrigger id="reminder-day" className="w-full sm:w-[200px]">
          <SelectValue placeholder="Select reminder day" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="dont-send">Don't Send Reminders</SelectItem>
          {Array.from({ length: 31 }, (_, i) => (
            <SelectItem key={i + 1} value={String(i + 1)}>
              {i + 1}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <p className="text-sm text-muted-foreground">
        Choose the day of the month you would like to be reminded to review and process any potential Rate Management
        changes.
      </p>
    </div>
  )
}

