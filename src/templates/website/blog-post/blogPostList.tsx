import { Card, CardContent } from "@components/ui/card"

export default function BlogPostList() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="text-center py-8 text-gray-500">
          <p className="mb-4">No blog posts found.</p>
          <p className="text-sm">Get started by creating your first blog post or importing existing content.</p>
        </div>
      </CardContent>
    </Card>
  )
}

