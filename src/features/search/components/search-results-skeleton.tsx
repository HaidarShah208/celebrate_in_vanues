const BAR = "bg-muted animate-pulse rounded";
function VenueCardSkeleton() {
  return (
    <div className="flex flex-col">
      <div className={`${BAR} aspect-16/10 w-full rounded-t-[20px]`} />

      <div className="border-card-hairline bg-panel flex flex-1 flex-col rounded-b-[20px] border px-[15px] pt-[18px] pb-[15px]">
        <div className={`${BAR} h-5 w-[92%]`} />
        <div className={`${BAR} mt-[4px] h-5 w-[64%]`} />

        <div className={`${BAR} mt-[9px] h-4 w-[38%]`} />

        <div className="mt-[8px] flex flex-wrap items-center gap-x-[5px] gap-y-[7px]">
          {["w-[59px]", "w-[86px]", "w-[98px]", "w-[63px]"].map((width) => (
            <div
              key={width}
              className={`${BAR} h-[28px] rounded-full ${width}`}
            />
          ))}
        </div>

        <div className="border-rule-card mt-[21px] flex items-center justify-between border-t pt-[17px]">
          <div className={`${BAR} h-4 w-[88px]`} />
          <div className={`${BAR} h-[34px] w-[104px] rounded-lg`} />
        </div>
      </div>
    </div>
  );
}
export function SearchResultsSkeleton() {
  return (
    <div
      className="bg-background flex flex-1 flex-col"
      aria-busy
      aria-label="Loading search results"
    >
      <div className="shadow-topbar flex h-22 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className={`${BAR} h-8 w-[120px]`} />
        <div
          className={`${BAR} hidden h-11 w-[430px] rounded-[10px] md:block`}
        />
        <div className={`${BAR} h-10 w-[150px] rounded-lg`} />
      </div>

      <div className="border-border flex h-16 items-center gap-4 border-b px-4 sm:px-6 lg:px-8">
        <div className={`${BAR} h-4 w-[180px]`} />
        <div className="bg-border ml-auto h-6 w-px shrink-0" />
        <div className={`${BAR} h-4 w-[70px]`} />
      </div>

      <div className="border-rule-strong flex gap-1 border-b px-4 py-0.5 sm:px-6 lg:px-8">
        {Array.from({ length: 11 }).map((_, index) => (
          <div
            key={index}
            className={`${BAR} h-19.75 min-w-[88px] flex-1 rounded-md`}
          />
        ))}
      </div>

      <div className="grid flex-1 grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(280px,421px)]">
        <div className="min-w-0 px-4 pb-8 sm:px-6 lg:px-8">
          <div className="flex items-center gap-x-4 pt-4 pb-4">
            <div className={`${BAR} h-5 w-[210px] shrink-0`} />
            <div className="flex min-w-0 flex-1 items-center gap-2 overflow-hidden">
              {["w-[96px]", "w-[88px]", "w-[112px]", "w-[80px]"].map(
                (width) => (
                  <div
                    key={width}
                    className={`${BAR} h-8 shrink-0 rounded-full ${width}`}
                  />
                ),
              )}
            </div>
            <div className={`${BAR} h-8 w-[190px] shrink-0 rounded-full`} />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 2xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <VenueCardSkeleton key={index} />
            ))}
          </div>
        </div>

        <div
          className={`${BAR} h-[360px] rounded-none md:h-[420px] lg:h-auto`}
        />
      </div>
    </div>
  );
}
