import { Button } from "@components/ui/button"
import { Link } from 'expo-router'
import { useState, useMemo } from "react"
import { FeeForm } from "./feeForm"
import type { Fee, SortOption, SortDirection } from "./IFee"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@components/ui/alert-dialog"
import { FeeSummary } from "./feeSummary"
import { FeeList } from "./feeList"
import { SearchAndSort } from "./searchAndSort"
import initialFees from "./MockFeesData"

export default function FeesTemplate() {
  const [fees, setFees] = useState<Fee[]>(initialFees)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [selectedFee, setSelectedFee] = useState<Fee | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOption, setSortOption] = useState<SortOption>("name")
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc")

  const handleAddFee = (data: any) => {
    const newFee: Fee = {
      id: Math.random().toString(),
      name: data.name,
      amount: Number.parseFloat(data.amount),
      taxRate: data.taxRate,
      description: data.description,
      category: data.category,
      created: `${new Date().toLocaleDateString()} by System`,
    }
    setFees([...fees, newFee])
    setIsFormOpen(false)
  }

  const handleEditFee = (data: any) => {
    if (!selectedFee) return
    const updatedFees = fees.map((fee) =>
      fee.id === selectedFee.id
        ? {
            ...fee,
            name: data.name,
            amount: Number.parseFloat(data.amount),
            taxRate: data.taxRate,
            description: data.description,
            category: data.category,
          }
        : fee,
    )
    setFees(updatedFees)
    setSelectedFee(null)
    setIsFormOpen(false)
  }

  const handleDeleteFee = () => {
    if (!selectedFee) return
    const updatedFees = fees.filter((fee) => fee.id !== selectedFee.id)
    setFees(updatedFees)
    setSelectedFee(null)
    setIsDeleteDialogOpen(false)
  }

  const filteredAndSortedFees = useMemo(() => {
    return fees
      .filter(
        (fee) =>
          fee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          fee.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          fee.category.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      .sort((a, b) => {
        if (sortOption === "amount") {
          return sortDirection === "asc" ? a.amount - b.amount : b.amount - a.amount
        } else if (sortOption === "created") {
          return sortDirection === "asc"
            ? new Date(a.created).getTime() - new Date(b.created).getTime()
            : new Date(b.created).getTime() - new Date(a.created).getTime()
        } else {
          return sortDirection === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
        }
      })
  }, [fees, searchTerm, sortOption, sortDirection])

  const toggleSort = (option: SortOption) => {
    if (sortOption === option) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortOption(option)
      setSortDirection("asc")
    }
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Fees</h1>
          <nav className="text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-500">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/setup" className="hover:text-blue-500">
              Setup
            </Link>
            <span className="mx-2">/</span>
            <span>Fees</span>
          </nav>
        </div>
        <Button size="sm" onClick={() => setIsFormOpen(true)}>New Fee</Button>
      </div>

      <FeeSummary fees={fees} />

      <SearchAndSort
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        sortOption={sortOption}
        onSortOptionChange={(value: SortOption) => toggleSort(value)}
        sortDirection={sortDirection}
        onSortDirectionToggle={() => toggleSort(sortOption)}
      />

      <FeeList
        fees={filteredAndSortedFees}
        onEdit={(fee) => {
          setSelectedFee(fee)
          setIsFormOpen(true)
        }}
        onDelete={(fee) => {
          setSelectedFee(fee)
          setIsDeleteDialogOpen(true)
        }}
      />

      <p className="text-sm text-gray-500 mt-6">
        These fees can be manually charged to customers individually or as part of a new rental. Automatic late or lien
        fees can be managed on the{" "}
        <Link href="/settings/late-lien" className="text-blue-500 hover:underline">
          Late/Lien settings page
        </Link>
        .
      </p>

      <FeeForm
        open={isFormOpen}
        onClose={() => {
          setIsFormOpen(false)
          setSelectedFee(null)
        }}
        onSubmit={selectedFee ? handleEditFee : handleAddFee}
        initialData={selectedFee || undefined}
      />

      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete the fee. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteFee} className="bg-red-500 hover:bg-red-600">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

