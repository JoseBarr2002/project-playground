import { useState } from "react"
import { Button } from "@components/ui/button"
import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@components/ui/dialog"
import { Upload } from "lucide-react"

interface UploadDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function UploadDialog({ open, onOpenChange }: UploadDialogProps) {
  const [dragActive, setDragActive] = useState(false)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // Handle file upload
      console.log(e.dataTransfer.files)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Upload Images</DialogTitle>
          <DialogDescription>
            Drag and drop your images or click to browse. Supported formats: JPG, PNG, GIF
          </DialogDescription>
        </DialogHeader>

        <div
          className={`
            mt-4 relative border-2 border-dashed rounded-lg p-8
            flex flex-col items-center justify-center gap-4
            ${dragActive ? "border-primary bg-primary/5" : "border-muted"}
          `}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <Upload className="h-8 w-8 text-muted-foreground" />
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Drag images here or click to browse</p>
            <Input type="file" multiple accept="image/*" className="hidden" id="file-upload" />
            <Label htmlFor="file-upload">
              <Button size="sm" variant="secondary">
                Choose Files
              </Button>
            </Label>
          </div>
        </div>

        <DialogFooter className="mt-4">
          <Button size="sm" variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button size="sm" type="submit">
            Upload
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

