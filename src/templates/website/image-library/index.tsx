import { useState } from "react"
import Image from "next/image"
import { Link } from "expo-router"
import { Button } from "@components/ui/button"
import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"
import { Card, CardContent, CardFooter, CardHeader } from "@components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui/dialog"
import { ImagePlus, Search, Upload, MoreVertical } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@components/ui/dropdown-menu"

interface ImageItem {
  id: string
  src: string
  size: string
  title: string
  alt: string
  dateUploaded: string
}

const images: ImageItem[] = [
  {
    id: "1",
    src: "/Users/josebarrera/Projects/goodcodeworks/Mini-Storage/ui-demo/src/templates/website/image-library/goat.png",
    size: "3997x2248",
    title: "Storage Units Exterior",
    alt: "Storage facility exterior view",
    dateUploaded: "2024-02-04",
  },
  {
    id: "2",
    src: "/Users/josebarrera/Projects/goodcodeworks/Mini-Storage/ui-demo/src/templates/website/image-library/goat.png",
    size: "2048x1536",
    title: "Storage Units at Sunset",
    alt: "Storage units with sunset lighting",
    dateUploaded: "2024-02-04",
  },
]

export default function ImageLibraryTemplate() {
  const [isUploadOpen, setIsUploadOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
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
    <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8 max-w-7xl">
      {/* Header Section */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <nav className="flex mb-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-primary">
              Home
            </Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <Link href="/website" className="text-muted-foreground hover:text-primary">
              Website
            </Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <span className="text-primary">Image Library</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl font-bold">Image Library</h1>
        </div>
        <Dialog open={isUploadOpen} onOpenChange={setIsUploadOpen}>
          <DialogTrigger asChild>
            <Button size="sm" className="w-full sm:w-auto">
              <ImagePlus className="mr-2 h-4 w-4" />
              Add Images
            </Button>
          </DialogTrigger>
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
                  <Button variant="secondary" size="sm">
                    Choose Files
                  </Button>
                </Label>
              </div>
            </div>

            <DialogFooter className="mt-4">
              <Button variant="outline" onClick={() => setIsUploadOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Upload</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search and Info Bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search images..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 w-full"
          />
        </div>
        <p className="text-sm text-muted-foreground">
          {images.length} images • Last updated {new Date().toLocaleDateString()}
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {images.map((image) => (
          <Card key={image.id} className="overflow-hidden">
            <CardHeader className="p-0">
              <div className="relative aspect-video">
                <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2 line-clamp-1">{image.title}</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Dimensions: {image.size}</p>
                <p>Uploaded: {new Date(image.dateUploaded).toLocaleDateString()}</p>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between items-center">
              <Button variant="outline" size="sm" className="w-full sm:w-auto">
                View
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="ml-2">
                    <MoreVertical className="h-4 w-4" />
                    <span className="sr-only">More options</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit Details</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

