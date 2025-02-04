import { useState } from "react"
import { BlogPostHeader } from "./header"
import { BlogPostForm } from "./form"

export default function CreateBlogPost() {
  const [isDraft, setIsDraft] = useState(true)

  const handlePublish = async () => {
    // TODO: Implement publish functionality
    setIsDraft(false)
  }

  const handleSaveAsDraft = async () => {
    // TODO: Implement save as draft functionality
    setIsDraft(true)
  }

  return (
    <div className="container mx-auto py-6 px-4">
      <BlogPostHeader isDraft={isDraft} onPublish={handlePublish} onSaveDraft={handleSaveAsDraft} />
      <BlogPostForm />
    </div>
  )
}

