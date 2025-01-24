import { Badge } from "@components/ui/badge"
import type { UnitStatus } from "./IUnit"

interface UnitStatusBadgeProps {
  status: UnitStatus
}

export function UnitStatusBadge({ status }: UnitStatusBadgeProps) {
  const variant =
    status === "Available"
      ? "success"
      : status === "Moving Out" || status === "Late" || status === "Pending" || status === "Pre-Lien"
        ? "warning"
        : status === "Lien" || status === "Auction" || status === "Locked Out"
          ? "destructive"
          : status === "Unavailable"
            ? "outline"
            : "secondary"

  return <Badge variant={variant}>{status}</Badge>
}

