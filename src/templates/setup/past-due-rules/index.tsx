import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@components/ui/dialog"
import { toast } from "@components/ui/toast"
import { RuleForm } from "./ruleForm"
import { RuleSummaryCard } from "./ruleSummaryCard"
import { RuleCategoryCard } from "./rulesCategoryCard"
import { useToast } from "@hooks/use-toast"

interface Rule {
  id: string
  status: string
  daysPastDue: number
  notifications: string
  fees: string
  auctionDate: string
  enabled: boolean
}

const initialRules: Record<string, Rule[]> = {
  late: [
    {
      id: "1",
      status: "Late",
      daysPastDue: 9,
      notifications: "Past Due Notice: Email, Text, Letter",
      fees: "LATE FEE: $10.00",
      auctionDate: "N/A",
      enabled: true,
    },
    {
      id: "2",
      status: "Late",
      daysPastDue: 20,
      notifications: "Past Due Notice: Email, Text",
      fees: "20 days late: $10.00",
      auctionDate: "N/A",
      enabled: true,
    },
  ],
  lockout: [
    {
      id: "3",
      status: "Locked Out",
      daysPastDue: 10,
      notifications:
        'Notice of "Lockout" of Storage Unit Notice of Intended Sale of Personal Property At Auction: Email, Text, Letter',
      fees: "No fees",
      auctionDate: "N/A",
      enabled: true,
    },
  ],
  lien: [
    {
      id: "4",
      status: "Pre-Lien",
      daysPastDue: 30,
      notifications:
        'Notice of "Lockout" of Storage Unit Notice of Intended Sale of Personal Property At Auction: Email, Text, Letter',
      fees: "Pre Lien: $20.00",
      auctionDate: "N/A",
      enabled: true,
    },
    {
      id: "5",
      status: "Lien",
      daysPastDue: 60,
      notifications: "No notifications",
      fees: "Lien: $20.00",
      auctionDate: "N/A",
      enabled: true,
    },
  ],
  auction: [
    {
      id: "6",
      status: "Auction",
      daysPastDue: 90,
      notifications:
        'Notice of "Lockout" of Storage Unit Notice of Intended Sale of Personal Property At Auction: Email, Text, Letter',
      fees: "Auction : $25.00",
      auctionDate: "N/A",
      enabled: true,
    },
  ],
}

export default function PastDueRulesTemplate() {
  const [rules, setRules] = useState(initialRules)
  const [editingRule, setEditingRule] = useState<Rule | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { toast } = useToast()

  const handleAddRule = (category: string) => {
    setEditingRule({
      id: "",
      status: category,
      daysPastDue: 0,
      notifications: "",
      fees: "",
      auctionDate: "N/A",
      enabled: true,
    })
    setIsDialogOpen(true)
  }

  const handleEditRule = (rule: Rule) => {
    setEditingRule(rule)
    setIsDialogOpen(true)
  }

  const handleSaveRule = (updatedRule: Rule) => {
    const category = updatedRule.status.toLowerCase()
    if (updatedRule.id) {
      setRules((prevRules) => ({
        ...prevRules,
        [category]: prevRules[category].map((rule) => (rule.id === updatedRule.id ? updatedRule : rule)),
      }))
    } else {
      const newRule = { ...updatedRule, id: Date.now().toString() }
      setRules((prevRules) => ({
        ...prevRules,
        [category]: [...prevRules[category], newRule],
      }))
    }
    setIsDialogOpen(false)
    toast({
      title: "Success",
      description: `Rule ${updatedRule.id ? "updated" : "added"} successfully.`,
    })
  }

  const handleDeleteRule = (id: string) => {
    setRules((prevRules) => {
      const newRules = { ...prevRules }
      Object.keys(newRules).forEach((category) => {
        newRules[category] = newRules[category].filter((rule) => rule.id !== id)
      })
      return newRules
    })
    toast({
      title: "Success",
      description: "Rule deleted successfully.",
    })
  }

  const handleToggleRule = (id: string, enabled: boolean) => {
    setRules((prevRules) => {
      const newRules = { ...prevRules }
      Object.keys(newRules).forEach((category) => {
        newRules[category] = newRules[category].map((rule) => (rule.id === id ? { ...rule, enabled } : rule))
      })
      return newRules
    })
    toast({
      title: "Success",
      description: `Rule ${enabled ? "enabled" : "disabled"} successfully.`,
    })
  }

  return (
    <div className="container mx-auto py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-[#c26d4d]">Late/Lien Settings</h1>
        <div className="mt-2 text-sm text-muted-foreground">
          <p>
            This page allows you to fully control what happens when a rent line item remains unpaid past its due date.
          </p>
          <p className="mt-2">
            You can setup multiple status events to occur on different dates past the due date of the invoiced rent. For
            example, you can set up an automatic late fee to be queued 5 days after the due date coupled with an
            automated text message reminder and an automated email reminder.
          </p>
        </div>
      </div>

      <RuleSummaryCard rules={rules} />

      <Tabs defaultValue="late" className="space-y-4">
        <TabsList>
          <TabsTrigger value="late">Late Fees</TabsTrigger>
          <TabsTrigger value="lockout">Lockout</TabsTrigger>
          <TabsTrigger value="lien">Lien</TabsTrigger>
          <TabsTrigger value="auction">Auction</TabsTrigger>
        </TabsList>

        {Object.entries(rules).map(([category, categoryRules]) => (
          <TabsContent key={category} value={category}>
            <RuleCategoryCard
              category={category}
              rules={categoryRules}
              onAddRule={() => handleAddRule(category)}
              onEditRule={handleEditRule}
              onDeleteRule={handleDeleteRule}
              onToggleRule={handleToggleRule}
            />
          </TabsContent>
        ))}
      </Tabs>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingRule?.id ? "Edit Rule" : "Add New Rule"}</DialogTitle>
            <DialogDescription>
              {editingRule?.id
                ? "Make changes to the existing rule"
                : "Create a new rule for late fees, lockouts, liens, or auctions"}
            </DialogDescription>
          </DialogHeader>
          <RuleForm
            initialData={editingRule || undefined}
            onSubmit={handleSaveRule}
            onCancel={() => setIsDialogOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}


