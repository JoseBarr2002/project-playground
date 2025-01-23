import { useState } from "react"
import { Button } from "@components/ui/button"
import { Loader2, PlusCircle } from "lucide-react"
import DimensionsCard from "./dimensionsCard"
import DetailsCard from "./detailsCard"
import MediaUploadCard from "./mediaUploadCard"
import PricingCard from "./pricingCard"
import AdditionalInfoCard from "./additionalInfoCard"

interface UnitTypeFormProps {
  isLoading: boolean
  onSubmit: () => void
}

export default function UnitTypeForm({ isLoading, onSubmit }: UnitTypeFormProps) {
  const [unitTypeFeatures, setUnitTypeFeatures] = useState<string[]>([])
  const [uploadedImages, setUploadedImages] = useState<string[]>([])

  const handleAddFeature = (feature: string) => {
    if (!unitTypeFeatures.includes(feature)) {
      setUnitTypeFeatures([...unitTypeFeatures, feature])
    }
  }

  const handleRemoveFeature = (feature: string) => {
    setUnitTypeFeatures(unitTypeFeatures.filter((f) => f !== feature))
  }

  return (
    <>
      <DimensionsCard />
      <DetailsCard
        unitTypeFeatures={unitTypeFeatures}
        onAddFeature={handleAddFeature}
        onRemoveFeature={handleRemoveFeature}
      />
      <MediaUploadCard uploadedImages={uploadedImages} setUploadedImages={setUploadedImages} />
      <PricingCard />
      <AdditionalInfoCard />

      <div className="flex space-x-2">
        <Button onClick={onSubmit} disabled={isLoading} size="sm">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Creating...
            </>
          ) : (
            <>
              <PlusCircle className="mr-2 h-4 w-4" />
              Create Unit Type
            </>
          )}
        </Button>
        <Button variant="outline" size="sm">
          Cancel
        </Button>
      </div>
    </>
  )
}

