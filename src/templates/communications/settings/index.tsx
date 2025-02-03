import { Suspense } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs"
import { Skeleton } from "@components/ui/skeleton"
import { GeneralSettings } from "./generalSettings"
import { NotificationPreferences } from "./notificationPreferences"

export default function CommunicationSettingsTemplate() {
  return (
    <div className="container mx-auto py-6 space-y-6 max-w-4xl">

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="general">General Settings</TabsTrigger>
          <TabsTrigger value="notifications">Notification Preferences</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Suspense fallback={<SettingsSkeleton />}>
            <GeneralSettings />
          </Suspense>
        </TabsContent>

        <TabsContent value="notifications">
          <Suspense fallback={<SettingsSkeleton />}>
            <NotificationPreferences />
          </Suspense>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function SettingsSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
      <Skeleton className="h-4 w-[300px]" />
      <Skeleton className="h-10 w-[180px]" />
    </div>
  )
}

