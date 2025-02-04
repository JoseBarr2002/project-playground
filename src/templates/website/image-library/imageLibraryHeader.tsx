import { Link } from "expo-router"
import { Button } from "@components/ui/button"
import { ImagePlus } from "lucide-react"

interface ImageLibraryHeaderProps {
  onUploadClick: () => void
}

export function ImageLibraryHeader({ onUploadClick }: ImageLibraryHeaderProps) {
  return (
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
      <Button size="sm" className="w-full sm:w-auto" onClick={onUploadClick}>
        <ImagePlus className="mr-2 h-4 w-4" />
        Add Images
      </Button>
    </div>
  )
}

