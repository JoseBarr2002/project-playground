import { useState } from "react"
import { ImageLibraryHeader } from "./imageLibraryHeader"
import { ImageLibrarySearch } from "./imageLibrarySearch"
import { ImageGrid } from "./imageGrid"
import { UploadDialog } from "./uploadDialog"

export interface ImageItem {
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
    src: "/placeholder.svg",
    size: "3997x2248",
    title: "Storage Units Exterior",
    alt: "Storage facility exterior view",
    dateUploaded: "2024-02-04",
  },
  {
    id: "2",
    src: "/placeholder.svg",
    size: "2048x1536",
    title: "Storage Units at Sunset",
    alt: "Storage units with sunset lighting",
    dateUploaded: "2024-02-04",
  },
]

export function ImageLibrary() {
  const [isUploadOpen, setIsUploadOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8 max-w-7xl">
      <ImageLibraryHeader onUploadClick={() => setIsUploadOpen(true)} />
      <ImageLibrarySearch searchQuery={searchQuery} onSearchChange={setSearchQuery} totalImages={images.length} />
      <ImageGrid images={images} />
      <UploadDialog open={isUploadOpen} onOpenChange={setIsUploadOpen} />
    </div>
  )
}

