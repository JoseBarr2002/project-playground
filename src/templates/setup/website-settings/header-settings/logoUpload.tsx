import { Button } from "@components/ui/button"
import { Label } from "@components/ui/label"
import { Image } from 'expo-image'

export function LogoUpload() {
  return (
    <div>
      <Label>Logo</Label>
      <div className="mt-2 rounded-lg border bg-muted/50 p-6">
        <div className="flex justify-center rounded-lg border-2 border-dashed p-4">
          <Image
            source={{ uri: '/assets/images/logo.png' }}
            alt="Logo preview"
            contentFit="contain"
            style={{ width: 300, height: 150 }}
            className="max-h-[200px] w-auto"
          />
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <Button variant="outline" className="flex-1">
          Choose File
        </Button>
        <Button variant="destructive">Remove</Button>
      </div>
    </div>
  )
}

