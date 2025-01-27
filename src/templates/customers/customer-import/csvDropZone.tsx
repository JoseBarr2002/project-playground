import { useDropzone } from "react-dropzone"
import { Upload } from "lucide-react"
import { Card, CardContent } from "@components/ui/card"
import { toast } from "@hooks/use-toast"

interface CSVDropzoneProps {
  onUpload: (data: string[][]) => void
  onError: (message: string) => void
}

export function CSVDropzone({ onUpload, onError }: CSVDropzoneProps) {
  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const text = e.target?.result as string
          const rows = text
            .split("\n")
            .filter((row) => row.trim() && !row.startsWith("#"))
            .map((row) => row.split(",").map((cell) => cell.trim()))
          onUpload(rows)
          toast.success("File loaded successfully")
        } catch (err) {
          onError("Failed to parse CSV file. Please check the format.")
          toast.error("Failed to parse CSV file")
        }
      }
      reader.readAsText(file)
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "text/csv": [".csv"],
    },
    maxFiles: 1,
  })

  return (
    <Card>
      <CardContent className="p-6">
        <div
          {...getRootProps()}
          className={`
            border-2 border-dashed rounded-lg p-8 text-center cursor-pointer
            transition-colors duration-200 ease-in-out
            ${isDragActive ? "border-primary bg-primary/5" : "border-gray-300"}
            hover:border-primary hover:bg-primary/5
          `}
        >
          <input {...getInputProps()} />
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2 text-sm text-gray-600">
            {isDragActive ? "Drop the CSV file here" : "Drag and drop a CSV file here, or click to select a file"}
          </p>
          <p className="mt-1 text-xs text-gray-500">Only .csv files are accepted</p>
        </div>
      </CardContent>
    </Card>
  )
}

