import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@components/ui/card"
import type { Page } from "./mockPages"

interface PageStatisticsProps {
  pages: Page[]
}

export function PageStatistics({ pages }: PageStatisticsProps) {
  const publishedPages = pages.filter((p) => p.status === "published").length
  const draftPages = pages.filter((p) => p.status === "draft").length

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <StatCard title="Total Pages" description="Active pages on your website" value={pages.length} />
      <StatCard title="Published" description="Live and accessible pages" value={publishedPages} />
      <StatCard title="Drafts" description="Pages in progress" value={draftPages} />
    </div>
  )
}

interface StatCardProps {
  title: string
  description: string
  value: number
}

function StatCard({ title, description, value }: StatCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold">{value}</p>
      </CardContent>
    </Card>
  )
}

