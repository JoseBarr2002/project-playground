interface BreadcrumbItem {
    label: string
    href: string
  }
  
  interface BreadcrumbProps {
    items: BreadcrumbItem[]
  }
  
  export function Breadcrumb({ items }: BreadcrumbProps) {
    return (
      <nav className="text-sm">
        {items.map((item, index) => (
          <span key={item.href}>
            <a href={item.href} className="text-blue-600 hover:text-blue-800">
              {item.label}
            </a>
            {index < items.length - 1 && <span className="mx-2 text-gray-500">/</span>}
          </span>
        ))}
      </nav>
    )
  }
  
  