import Image from "next/image"
import { Button } from "@components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@components/ui/dropdown-menu"
import { MoreVertical } from "lucide-react"
import type { ImageItem } from "./imageLibrary"

interface ImageCardProps {
  image: ImageItem
}

export function ImageCard({ image }: ImageCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative aspect-video">
          <Image src={image.src || "goat.png"} alt={image.alt} fill className="object-cover" />
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
  )
}

