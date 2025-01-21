import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@components/ui/breadcrumb"

interface PageHeaderProps {
  title: string
  description: string
  breadcrumbs: {
    label: string
    href: string
  }[]
}

export function PageHeader({ title, description, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="mb-8">
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          {breadcrumbs.map((crumb, index) => (
            <BreadcrumbItem key={crumb.href}>
              <BreadcrumbLink href={crumb.href}>{crumb.label}</BreadcrumbLink>
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      <p className="text-muted-foreground mt-2">{description}</p>
    </div>
  )
}

