import { useState, useEffect } from "react"

interface Page {
  id: string
  title: string
  url: string
  status: "published" | "draft"
  lastModified: string
}

export function usePages() {
  const [pages, setPages] = useState<Page[]>([])

  useEffect(() => {
    // In a real application, you would fetch this data from an API
    setPages([
      {
        id: "1",
        title: "110 Mini Storage: Home",
        url: "/home",
        status: "published",
        lastModified: "2024-02-03",
      },
      {
        id: "2",
        title: "110 Mini Storage: Map",
        url: "/map",
        status: "published",
        lastModified: "2024-02-02",
      },
      {
        id: "3",
        title: "110 Mini Storage: Contact Us",
        url: "/contact",
        status: "draft",
        lastModified: "2024-02-01",
      },
      {
        id: "4",
        title: "110 Mini Storage: Availability",
        url: "/availability",
        status: "published",
        lastModified: "2024-01-31",
      },
    ])
  }, [])

  return { pages }
}

