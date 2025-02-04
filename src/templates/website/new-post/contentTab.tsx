import { Input } from "@components/ui/input"
import { Textarea } from "@components/ui/textarea"
import { Editor } from "./editor"

export function ContentTab() {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium mb-2">
          Title
        </label>
        <Input id="title" placeholder="Enter post title" />
      </div>

      <div>
        <label htmlFor="slug" className="block text-sm font-medium mb-2">
          Slug
        </label>
        <Input id="slug" placeholder="Enter URL slug" />
      </div>

      <div>
        <label htmlFor="summary" className="block text-sm font-medium mb-2">
          Summary
        </label>
        <Textarea id="summary" placeholder="Enter post summary" className="mb-1" />
        <p className="text-sm text-muted-foreground">A brief summary that will appear in lists of blog posts.</p>
      </div>

      <div>
        <label htmlFor="body" className="block text-sm font-medium mb-2">
          Body
        </label>
        <Editor />
      </div>
    </div>
  )
}

