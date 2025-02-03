"use server"

import { revalidatePath } from "next/cache"
import type { UpdateCommunicationSettingsInput, UpdateNotificationPreferenceInput } from "./ICommunitcationSettings"

export async function updateCommunicationSettings(data: UpdateCommunicationSettingsInput) {
  // TODO: Implement your database update logic here
  revalidatePath("/settings/communication")
  return { success: true }
}

export async function updateNotificationPreference(
  notificationTypeId: string,
  data: UpdateNotificationPreferenceInput,
) {
  // TODO: Implement your database update logic here
  revalidatePath("/settings/communication")
  return { success: true }
}

