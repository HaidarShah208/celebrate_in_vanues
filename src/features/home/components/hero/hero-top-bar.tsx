import { ChevronDownMini, UserMini } from "@/components/ui/icons";
import { Logo } from "@/components/ui/logo";

const CONTROL_BASE =
  "flex h-10 items-center justify-center rounded-lg bg-surface-white text-sm leading-[140%] font-semibold text-brand-red";

export function HeroTopBar() {
  return (
    <header className="bg-topbar-scrim absolute inset-x-0 top-0 z-20 h-[88px]">
      <div className="container-frame flex h-full items-center justify-between px-4 sm:px-6 lg:pr-[26px] lg:pl-[17px]">
        <Logo />

        <nav
          aria-label="Account"
          className="drop-shadow-control flex items-center gap-[11px]"
        >
          <button type="button" className={`${CONTROL_BASE} gap-2 px-4`}>
            Add your listing
            <ChevronDownMini className="text-control-chevron" />
          </button>

          <button
            type="button"
            className={`${CONTROL_BASE} gap-2 px-3`}
            aria-label="Change language"
          >
            EN
            <ChevronDownMini className="text-control-chevron" />
          </button>

          <button
            type="button"
            className={`${CONTROL_BASE} w-11 px-3`}
            aria-label="Account"
          >
            <UserMini />
          </button>
        </nav>
      </div>
    </header>
  );
}
