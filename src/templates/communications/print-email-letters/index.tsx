import { TemplateLettersForm } from "./templateLettersForm"

export default function PrintEmailLettersTemplate() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mt-4">Send Template Letters</h1>
          <p className="text-gray-500 mt-2">Generate and send template letters to your customers</p>
        </div>
        <TemplateLettersForm />
      </div>
    </div>
  )
}

