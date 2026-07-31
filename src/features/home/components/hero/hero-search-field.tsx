import { ChevronDown } from "lucide-react";
type HeroSearchFieldProps = {
  label: string;
  value: string;
};
export function HeroSearchField({ label, value }: HeroSearchFieldProps) {
  return (
    <button
      type="button"
      className="flex w-full flex-col items-start gap-[5px] py-3 text-left lg:flex-1 lg:px-[5px] lg:py-0"
    >
      <span className="text-field-label w-full text-sm leading-[21px] font-normal">
        {label}
      </span>
      <span className="flex w-full items-center justify-between gap-[5px]">
        <span className="text-surface-ink text-base leading-6 font-medium">
          {value}
        </span>
        <ChevronDown className="text-field-arrow size-6 shrink-0" aria-hidden />
      </span>
    </button>
  );
}
