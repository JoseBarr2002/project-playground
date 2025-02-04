import { Button } from "@components/ui/button"
import { ArrowLeft, Save, Send } from "lucide-react"
import { Link } from "expo-router"

interface BlogPostHeaderProps {
  isDraft: boolean
  onPublish: () => void
  onSaveDraft: () => void
}

export function BlogPostHeader({ isDraft, onPublish, onSaveDraft }: BlogPostHeaderProps) {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-primary">Create New Blog Post</h1>
        <div className="flex gap-4">
          <Button size="sm" variant="outline" onClick={onSaveDraft}>
            <Save className="mr-2 h-4 w-4" /> Save Draft
          </Button>
          <Button size="sm" onClick={onPublish}>
            <Send className="mr-2 h-4 w-4" /> Publish
          </Button>
          <Link href="/website/blog-post">
            <Button size="sm" variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog Posts
            </Button>
          </Link>
        </div>
      </div>

      {isDraft && (
        <p className="text-sm text-muted-foreground italic mb-4">
          This post is currently saved as a draft and has not been published yet.
        </p>
      )}
    </>
  )
}

