import type React from "react"
import UserInfoBar from "./userInfoBar"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <UserInfoBar />
      <main className="container mx-auto px-4 py-8 flex-grow">{children}</main>
    </div>
  )
}

