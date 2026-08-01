"use client";

import { LogOut } from "lucide-react";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useLogoutMutation } from "@/features/auth/hooks/use-logout-mutation";

export function LogoutMenuItem() {
  const logoutMutation = useLogoutMutation();

  return (
    <DropdownMenuItem
      disabled={logoutMutation.isPending}
      onSelect={(event) => {
        event.preventDefault();
        logoutMutation.mutate();
      }}
      className="text-brand-red data-highlighted:text-brand-red"
    >
      <LogOut className="size-4" aria-hidden />
      {logoutMutation.isPending ? "Signing out..." : "Log out"}
    </DropdownMenuItem>
  );
}
