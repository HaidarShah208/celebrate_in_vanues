import { CardCarousel } from "@/components/ui/card-carousel";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatCard } from "@/features/home/components/trusted/stat-card";
import { TestimonialCard } from "@/features/home/components/trusted/testimonial-card";
import { TESTIMONIALS, TRUST_STATS } from "@/features/home/data/trusted";

export function TrustedSection() {
  return (
    <section className="bg-trusted-wash py-14 sm:py-16 lg:py-20">
      <div className="container-frame px-4 sm:px-6 lg:px-20">
        <SectionHeading
          title="Trusted by Event Creators Who Demand Excellence"
          description="Join thousands of planners and hosts who love our seamless discovery and booking experience."
        />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:mt-12 lg:grid-cols-4">
          {TRUST_STATS.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              tone={stat.tone}
            />
          ))}
        </div>

        <CardCarousel label="testimonials" className="mt-8">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </CardCarousel>
      </div>
    </section>
  );
}
