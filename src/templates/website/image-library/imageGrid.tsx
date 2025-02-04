import { ImageCard } from "./imageCard"
import type { ImageItem } from "./imageLibrary"

interface ImageGridProps {
  images: ImageItem[]
}

export function ImageGrid({ images }: ImageGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  )
}

