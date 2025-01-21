interface BreadcrumbItem {
    label: string
    href: string
  }
  
  interface BreadcrumbProps {
    items: BreadcrumbItem[]
    className?: string
  }
  
  export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
    return (
      <nav className={`flex items-center space-x-2 text-sm ${className}`}>
        {items.map((item, index) => (
          <div key={item.href} className="flex items-center">
            {index > 0 && <span className="mx-2 text-gray-400">/</span>}
            <a
              href={item.href}
              className={index === items.length - 1 ? "text-gray-600" : "text-blue-500 hover:underline"}
            >
              {item.label}
            </a>
          </div>
        ))}
      </nav>
    )
  }
  
  