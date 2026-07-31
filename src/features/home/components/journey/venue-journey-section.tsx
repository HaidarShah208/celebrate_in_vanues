import { SectionHeading } from "@/components/ui/section-heading";
import { JourneyCollage } from "@/features/home/components/journey/journey-collage";
import { JourneySteps } from "@/features/home/components/journey/journey-steps";
export function VenueJourneySection() {
  return (
    <section className="bg-background py-14 sm:py-16 lg:py-24">
      <div className="container-frame px-4 sm:px-6 lg:px-20">
        <SectionHeading
          title="Your Path to the Perfect Venue"
          description="Planning an event, production, or gathering shouldn't feel complicated. Our streamlined process connects you with the right venues and trusted professionals, taking the stress out of logistics so you can focus on what matters most  making it a success."
        />

        <div className="mx-auto mt-8 grid max-w-[1170px] items-center gap-10 xl:grid-cols-[minmax(0,521px)_minmax(0,1fr)]">
          <div className="mx-auto w-full max-w-[521px] xl:mx-0">
            <JourneyCollage />
          </div>
          <JourneySteps />
        </div>
      </div>
    </section>
  );
}
