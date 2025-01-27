import { useState } from "react"
import { CSVDropzone } from "./csvDropZone"
import { ImportPreview } from "./importPreview"
import { ExampleFormat } from "./exampleFormat"
import { RequiredFields } from "./requiredFields"
import { ImportButton } from "./importButton"
import { Alert, AlertDescription, AlertTitle } from "@components/ui/alert"
import { AlertCircle } from "lucide-react"

export default function CustomerImportTemplate() {
  const [csvData, setCsvData] = useState<string[][]>([])
  const [error, setError] = useState("")

  const handleFileUpload = (data: string[][]) => {
    setCsvData(data)
    setError("")
  }

  const handleError = (message: string) => {
    setError(message)
    setCsvData([])
  }

  return (
    <div className="grid gap-6">
      <div className="flex justify-end">
        <ImportButton csvData={csvData} />
      </div>

      <CSVDropzone onUpload={handleFileUpload} onError={handleError} />

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="mt-4">
        <ExampleFormat />
      </div>

      {csvData.length > 0 && <ImportPreview data={csvData} />}

      <div className="mt-4">
        <RequiredFields />
      </div>
    </div>
  )
}

