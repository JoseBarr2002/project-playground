import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"
import { Switch } from "@components/ui/switch"
import { Camera, Upload, X } from "lucide-react"
import Image from "next/image"

interface MediaUploadCardProps {
  uploadedImages: string[]
  setUploadedImages: React.Dispatch<React.SetStateAction<string[]>>
}

export default function MediaUploadCard({ uploadedImages, setUploadedImages }: MediaUploadCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Camera className="mr-2" /> Media
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch id="use-type-photo" />
            <Label htmlFor="use-type-photo">Use Type Photos for All Units of This Type</Label>
          </div>
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="photo-upload"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" />
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
              <Input
                id="photo-upload"
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={(e) => {
                  const files = e.target.files
                  if (files) {
                    setUploadedImages((prev) => [
                      ...prev,
                      ...Array.from(files).map((file) => URL.createObjectURL(file)),
                    ])
                  }
                }}
              />
            </label>
          </div>
          {uploadedImages.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {uploadedImages.map((image, index) => (
                <div key={index} className="relative group">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Uploaded image ${index + 1}`}
                    width={200}
                    height={200}
                    className="rounded-lg object-cover w-full h-40"
                  />
                  <button
                    onClick={() => setUploadedImages((prev) => prev.filter((_, i) => i !== index))}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
          <p className="text-sm text-muted-foreground">
            You can upload multiple images for this unit type. Click on an image to remove it.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

