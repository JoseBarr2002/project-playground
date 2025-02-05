import { Button } from "@components/ui/button"
import { Play } from "lucide-react"

interface VideoPlayerProps {
  title: string
  duration: string
  progress: number
}

export function VideoPlayer({ title, duration, progress }: VideoPlayerProps) {
  return (
    <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-lg">
      <div className="absolute inset-0 flex items-center justify-center">
        <Button
          size="lg"
          variant="outline"
          className="rounded-full w-16 h-16 bg-white/20 hover:bg-white/30 transition-colors"
        >
          <Play className="h-8 w-8 text-white" />
          <span className="sr-only">Play video</span>
        </Button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
        <p className="font-medium mb-2">{title}</p>
        <div className="flex items-center">
          <div className="flex-1 bg-gray-600 rounded-full h-1">
            <div className="bg-white rounded-full h-1" style={{ width: `${progress}%` }}></div>
          </div>
          <span className="ml-4 text-sm">
            {formatTime(duration, progress)} / {duration}
          </span>
        </div>
      </div>
    </div>
  )
}

function formatTime(duration: string, progress: number): string {
  const [minutes, seconds] = duration.split(":").map(Number)
  const totalSeconds = minutes * 60 + seconds
  const currentSeconds = Math.floor(totalSeconds * (progress / 100))
  const currentMinutes = Math.floor(currentSeconds / 60)
  const remainingSeconds = currentSeconds % 60
  return `${String(currentMinutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`
}

