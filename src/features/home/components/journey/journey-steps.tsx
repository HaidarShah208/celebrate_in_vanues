import { JOURNEY_STEPS } from "@/features/home/data/journey";
export function JourneySteps() {
  return (
    <ol className="flex flex-col">
      {JOURNEY_STEPS.map((step, index) => {
        const isLast = index === JOURNEY_STEPS.length - 1;
        return (
          <li key={step.title} className="flex gap-4 lg:gap-5">
            <div className="flex flex-col items-center">
              <span className="bg-marker-gradient text-surface-white flex size-11 shrink-0 items-center justify-center rounded-full text-lg font-semibold lg:size-14 lg:text-xl">
                {index + 1}
              </span>
              {isLast ? null : (
                <span className="w-0 flex-1 border-l border-dashed border-[#A1A1A1]" />
              )}
            </div>

            <div className={isLast ? undefined : "pb-9 lg:pb-11"}>
              <h3 className="text-sm leading-[1.3] font-semibold text-black lg:text-2xl">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-[1.7] font-normal text-black md:text-base">
                {step.description}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
