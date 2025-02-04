import { Button } from "@components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs"
import { Plus } from "lucide-react"
import Layout from "./_layout"
import BlogPostControls from "./blogPostControls"
import BlogPostList from "./blogPostList"
import QuickTips from "./quickTips"

export default function BlogPostTemplate() {
  return (
    <Layout>
      <Card className="mb-8">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-3xl font-light mb-2">Blog Posts</CardTitle>
              <CardDescription>Manage and organize your website's blog content</CardDescription>
            </div>
            <Button size="sm" className="bg-[#3E97CB] hover:bg-[#3785b3]">
              <Plus className="h-4 w-4 mr-2" />
              New Blog Post
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <BlogPostControls />

            <Tabs defaultValue="list" className="w-full">
              <TabsList>
                <TabsTrigger value="list">List View</TabsTrigger>
                <TabsTrigger value="grid">Grid View</TabsTrigger>
              </TabsList>

              <TabsContent value="list" className="mt-6">
                <BlogPostList />
              </TabsContent>

              <TabsContent value="grid">
                <div className="grid grid-cols-3 gap-4">{/* Grid view will show post cards here */}</div>
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>

      <QuickTips />
    </Layout>
  )
}

