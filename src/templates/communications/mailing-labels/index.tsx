import BreadcrumbNav from "./breadcrumbNav"
import FilterOptions from "./filterOptions"
import PrintInstructions from "./printInstructions"
import CustomerSelection from "./customerSelection"

export default function MailingLabelsTemplate() {
  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <div className="mb-6">
        <BreadcrumbNav />
        <h1 className="text-3xl font-semibold">Mailing labels</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-[300px,1fr]">
        <div className="space-y-6">
          <FilterOptions />
          <PrintInstructions />
        </div>
        <CustomerSelection />
      </div>
    </div>
  )
}

