export function SearchResultsSkeleton() {
  return (
    <div
      className="flex flex-1 flex-col"
      aria-busy
      aria-label="Loading search results"
    >
      <div className="border-topbar-border shadow-topbar h-[88px] border-b">
        <div className="container-frame flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="bg-muted h-8 w-32 animate-pulse rounded" />
          <div className="bg-muted hidden h-12 w-[360px] animate-pulse rounded-full md:block" />
          <div className="bg-muted h-10 w-40 animate-pulse rounded-lg" />
        </div>
      </div>

      <div className="border-border container-frame flex gap-1 border-b px-4 py-2 sm:px-6 lg:px-8">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="bg-muted h-[60px] w-[92px] shrink-0 animate-pulse rounded-lg"
          />
        ))}
      </div>

      <div className="flex gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <div className="bg-muted h-11 flex-1 animate-pulse rounded-lg" />
        <div className="bg-muted h-11 w-28 animate-pulse rounded-lg" />
      </div>

      <div className="px-4 pt-2 pb-4 sm:px-6 lg:px-8">
        <div className="bg-muted h-6 w-72 animate-pulse rounded" />
        <div className="mt-3 flex flex-wrap gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="bg-muted h-8 w-24 animate-pulse rounded-full"
            />
          ))}
        </div>
      </div>

      <div className="grid flex-1 grid-cols-1 gap-6 px-4 pb-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:px-8 xl:grid-cols-[minmax(0,1fr)_420px]">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="border-border overflow-hidden rounded-xl border"
            >
              <div className="bg-muted aspect-[16/10] animate-pulse" />
              <div className="space-y-3 p-4">
                <div className="bg-muted h-4 w-[80%] animate-pulse rounded" />
                <div className="bg-muted h-3 w-1/3 animate-pulse rounded" />
                <div className="bg-muted h-3 w-2/3 animate-pulse rounded" />
                <div className="bg-muted mt-4 h-8 w-full animate-pulse rounded" />
              </div>
            </div>
          ))}
        </div>
        <div className="bg-muted hidden min-h-[420px] animate-pulse rounded-2xl lg:block" />
      </div>
    </div>
  );
}
