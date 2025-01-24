import { Button } from "@components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@components/ui/form"
import { Input } from "@components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"
import { Switch } from "@components/ui/switch"
import { useToast } from "@hooks/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { DollarSign, Loader2 } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import type { UnitType } from "./IUnitTypes"

const formSchema = z.object({
  billingCycle: z.string(),
  discountPercentage: z.string(),
  overridePrice: z.string(),
  managerOnly: z.boolean(),
})

export default function EditPricingDialog({ unit }: { unit: UnitType }) {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      billingCycle: "1",
      discountPercentage: "0",
      overridePrice: "0",
      managerOnly: false,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true)
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log(values)
      toast({
        title: "Pricing updated",
        description: "The pricing plan has been updated successfully.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <DollarSign className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Pricing Plan</DialogTitle>
          <DialogDescription>Customize the pricing plan for this unit type</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="billingCycle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Billing Cycle</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select billing cycle" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">Monthly (Every 1 Month)</SelectItem>
                      <SelectItem value="3">Quarterly (Every 3 Months)</SelectItem>
                      <SelectItem value="6">Bi-Annual (Every 6 Months)</SelectItem>
                      <SelectItem value="12">Annual (Every 12 Months)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>Choose how often customers will be billed</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="discountPercentage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Discount Percentage (%)</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" min="0" max="100" />
                  </FormControl>
                  <FormDescription>Apply a percentage discount to the base price</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="overridePrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Override Price ($)</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" step="0.01" />
                  </FormControl>
                  <FormDescription>Set a custom price that overrides the base price and discount</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="managerOnly"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Manager Only</FormLabel>
                  <FormControl>
                    <Switch {...field} />
                  </FormControl>
                  <FormDescription>Restrict access to managers only</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end gap-4">
              <Button size="sm" type="submit" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isLoading ? "Saving..." : "Save Pricing Plan"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export { EditPricingDialog }

