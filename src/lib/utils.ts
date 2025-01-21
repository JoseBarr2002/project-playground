import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export function formatTime(time: string) {
  const [hours, minutes] = time.split(":")
  const hoursNum = Number.parseInt(hours)
  const period = hoursNum >= 12 ? "PM" : "AM"
  const hour12 = hoursNum % 12 || 12
  return `${hour12}:${minutes} ${period}`
}

export { cn };
