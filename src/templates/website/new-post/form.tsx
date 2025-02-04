import { useState } from "react"
import { Card, CardContent } from "@components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs"
import { ContentTab } from "./contentTab"
import { SEOTab } from "./seoTab"

export function BlogPostForm() {
  const [activeTab, setActiveTab] = useState("content")

  return (
    <Card>
      <CardContent className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="seo">SEO</TabsTrigger>
          </TabsList>
          <TabsContent value="content">
            <ContentTab />
          </TabsContent>
          <TabsContent value="seo">
            <SEOTab />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

