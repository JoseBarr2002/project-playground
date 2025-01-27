import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Button } from "@components/ui/button"
import { toast } from "@hooks/use-toast"

export function ExampleFormat() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Example Format</span>
          <Button
            variant="default"
            size="sm"
            className="text-xs"
            onClick={() => {
              navigator.clipboard.writeText(
                "Name, Address, City, State, Zipcode, Phone, Cell Phone, Drivers License Number, Drivers License State, Social Security Number, Employer Name, Employer Phone, Emergency Contact, Emergency Phone, Referred By, Email",
              )
              toast({
                title: "Format copied to clipboard",
                variant: "default",
              })
            }}
          >
            Copy Format
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-muted p-4 rounded-lg overflow-x-auto">
          <code className="text-sm whitespace-pre-wrap">
            # Name, Address, City, State, Zipcode, Phone, Cell Phone, Drivers License Number, Drivers License State,
            Social Security Number, Employer Name, Employer Phone, Emergency Contact, Emergency Phone, Referred By,
            Email John Doe, 123 Main St., St. George, UT, 84790, 123-123-1234,, 1112223333, UT, 111-22-3333, Acme
            Corporation, 435-123-1234, Jane Doe, 123-123-1234, Online, john@example.com
          </code>
        </div>
        <p className="text-sm text-muted-foreground mt-2">Lines starting with # will be ignored</p>
      </CardContent>
    </Card>
  )
}

