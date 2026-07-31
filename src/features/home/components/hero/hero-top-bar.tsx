import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownMini, UserMini } from "@/components/ui/icons";
import { Logo, LogoMark } from "@/components/ui/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LogoutMenuItem } from "@/features/auth/components/logout-menu-item";
import { cn } from "@/lib/utils";
const CONTROL_BASE =
  "flex h-10 items-center justify-center rounded-lg bg-panel text-sm leading-[140%] font-semibold text-ink lg:text-brand-red";
export function HeroTopBar() {
  return (
    <header className="bg-topbar-scrim absolute inset-x-0 top-0 z-20 h-[88px]">
      <div className="container-frame flex h-full items-center justify-between px-4 sm:px-6 lg:pr-[26px] lg:pl-[17px]">
        <LogoMark priority className="w-10 lg:hidden" />
        <Logo priority className="hidden lg:flex" />

        <nav
          aria-label="Account"
          className="drop-shadow-control flex items-center gap-[11px]"
        >
          <ThemeToggle className={cn(CONTROL_BASE, "size-10 rounded-full")} />

          <button
            type="button"
            className={cn(CONTROL_BASE, "hidden gap-2 px-4 sm:flex")}
          >
            Add your listing
            <ChevronDownMini className="text-control-chevron" />
          </button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                aria-label="Account menu"
                className={cn(CONTROL_BASE, "size-10 rounded-full lg:hidden")}
              >
                <Menu className="size-5" aria-hidden />
              </button>
            </DropdownMenuTrigger>
            <AccountMenu />
          </DropdownMenu>

          <button
            type="button"
            aria-label="Change language"
            className={cn(CONTROL_BASE, "hidden gap-2 px-3 lg:flex")}
          >
            EN
            <ChevronDownMini className="text-control-chevron" />
          </button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                aria-label="Account"
                className={cn(CONTROL_BASE, "hidden w-11 px-3 lg:flex")}
              >
                <UserMini />
              </button>
            </DropdownMenuTrigger>
            <AccountMenu />
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
}

function AccountMenu() {
  return (
    <DropdownMenuContent align="end" className="min-w-50">
    
      <DropdownMenuSeparator />
      <LogoutMenuItem />
    </DropdownMenuContent>
  );
}
