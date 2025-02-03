export interface LetterTemplate {
    id: string
    title: string
    description: string
    email_subject: string
    email_content: string
    sms_content: string
    postcard_content: string
    template_type: "email_only" | "sms_only" | "postcard_only" | "email_sms" | "all"
    is_active: boolean
    available_placeholders: string
    category: "payment" | "late_notice" | "maintenance" | "general" | "marketing" | "legal"
    last_used_at?: string
    usage_count: number
    created_at: string
    updated_at: string
    created_by?: string
    last_updated_by?: string
  }
  
  