import { Link } from "expo-router"
import { Button } from "@components/ui/button"
import { FileText } from "lucide-react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"

const ReservationsTemplate = () => {
  return (
    <div className="min-h-screen bg-gray-50">
          {/* Main Content */}
          <main className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-semibold mb-4">Active Reservations</h1>
    
            {/* Breadcrumbs */}
            <div className="flex items-center text-sm mb-6">
              <Link href="/customers" className="text-blue-600 hover:underline">
                Customers
              </Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-600">Active Reservations</span>
            </div>
    
            {/* Controls */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="text-sm">Sort by</span>
                <Select defaultValue="reservation-date">
                  <SelectTrigger className="w-[200px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="reservation-date">Reservation Date</SelectItem>
                      <SelectItem value="move-in-date">Desired Move-in Date</SelectItem>
                      <SelectItem value="unit-name">Unit Name</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Button variant="default" className="bg-[#428bca] hover:bg-[#3071a9]">
                  Sort
                </Button>
              </div>
    
              <Button variant="secondary" className="gap-2" size="sm">
                <FileText className="h-4 w-4" />
                PDF
              </Button>
            </div>
    
            {/* No Records Message */}
            {/* <div className="bg-white p-6 rounded border text-gray-600">There are no records to display.</div> */}

        {/* No Records Message */}
        <div className="bg-white p-8 rounded-lg border text-center">
          <div className="max-w-md mx-auto">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Active Reservations</h3>
            <p className="text-gray-600 mb-4">
              There are currently no active reservations to display. New reservations will appear here once created.
            </p>
            <Button
              size="sm"
              variant="default"
              className="bg-[#428bca] hover:bg-[#3071a9] transition-colors"
              onClick={() => (window.location.href = "#")}
            >
              Create New Reservation
            </Button>
          </div>
        </div>
          </main>
    
          {/* Footer */}
          <footer className="fixed bottom-0 w-full bg-gray-800 text-gray-400 p-3 text-sm">
            <div className="container mx-auto flex justify-between items-center">
              <div>
                © 2025 110 Mini Storage. Powered by{" "}
                <Link href="#" className="text-[#5bc0de] hover:underline">
                  Easy Storage Solutions
                </Link>
              </div>
              <Link href="/terms" className="text-[#5bc0de] hover:underline">
                Terms of Service
              </Link>
            </div>
          </footer>
        </div>
      
  )
}

export default ReservationsTemplate
