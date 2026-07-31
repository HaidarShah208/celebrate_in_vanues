"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

export function LogoutMenuItem() {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  const logout = async () => {
    if (isPending) return;
    setIsPending(true);

    try {
      const response = await fetch("/api/auth/logout", { method: "POST" });
      if (!response.ok) throw new Error("Logout failed");
      router.replace("/login");
      router.refresh();
    } catch {
      toast.error("Unable to sign out. Try again.");
      setIsPending(false);
    }
  };

  return (
    <DropdownMenuItem
      disabled={isPending}
      onSelect={(event) => {
        event.preventDefault();
        void logout();
      }}
      className="text-brand-red data-highlighted:text-brand-red"
    >
      <LogOut className="size-4" aria-hidden />
      {isPending ? "Signing out..." : "Log out"}
    </DropdownMenuItem>
  );
}
