import { Info } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@components/ui/alert"

export function TipsAlert() {
  return (
    <Alert>
      <Info className="h-4 w-4" />
      <AlertTitle>Quick Tips</AlertTitle>
      <AlertDescription>
        <ul className="ml-4 list-disc space-y-1">
          <li>Drag items between sections to organize your navigation menu</li>
          <li>Use the "More" dropdown to prevent cluttering your main menu</li>
          <li>Hidden items won't appear in any navigation menu</li>
          <li>Click and drag the handle (≡) to reorder items within each section</li>
        </ul>
      </AlertDescription>
    </Alert>
  )
}

