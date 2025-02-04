import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"

export default function QuickTips() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Quick Tips</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>• Link to these blog posts on your website by adding a "List of recent Blog Posts" widget</li>
          <li>• Use tags to organize your posts and make them easier to find</li>
          <li>• Preview your posts before publishing to ensure they look perfect</li>
          <li>• Regular blog updates can improve your website's SEO ranking</li>
        </ul>
      </CardContent>
    </Card>
  )
}

