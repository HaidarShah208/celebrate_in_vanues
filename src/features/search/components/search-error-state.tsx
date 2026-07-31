import Link from "next/link";

type SearchErrorStateProps = {
  message?: string;
};

export function SearchErrorState({
  message = "We couldn’t load venues right now. Please try again.",
}: SearchErrorStateProps) {
  return (
    <div className="border-border bg-surface-white flex flex-col items-center justify-center rounded-2xl border px-6 py-20 text-center">
      <h2 className="text-foreground text-lg font-semibold">
        Something went wrong
      </h2>
      <p className="text-muted-foreground mt-2 max-w-md text-sm">{message}</p>
      <div className="mt-6 flex items-center gap-3">
        <Link
          href="/search"
          className="bg-brand-red text-surface-white inline-flex h-11 items-center rounded-lg px-5 text-sm font-semibold"
        >
          Retry search
        </Link>
        <Link
          href="/"
          className="border-border text-foreground inline-flex h-11 items-center rounded-lg border px-5 text-sm font-medium"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
