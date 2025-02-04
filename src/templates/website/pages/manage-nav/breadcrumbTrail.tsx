export function BreadcrumbTrail() {
    return (
      <nav className="text-sm text-gray-500">
        <ol className="flex items-center space-x-2">
          <li>
            <a href="/website/pages" className="text-blue-500 hover:underline">
              Home
            </a>
          </li>
          <li>/</li>
          <li>
            <a href="/website/pages" className="text-blue-500 hover:underline">
              Website
            </a>
          </li>
          <li>/</li>
          <li>Manage Navigation</li>
        </ol>
      </nav>
    )
  }
  
  