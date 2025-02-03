import * as z from "zod"

export const formSchema = z.object({
  status: z.string(),
  template: z.string(),
  contactMethod: z.enum(["email", "print"]),
  printFormat: z.string().optional(),
  includeHeader: z.boolean().default(false),
  selectedCustomers: z.array(z.string()),
})

