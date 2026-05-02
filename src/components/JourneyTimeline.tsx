import { MapPin } from "lucide-react";
import { siteContent } from "@/data/siteContent";

const JourneyTimeline = () => (
  <section id="journey" className="py-24 px-6 bg-maroon-deep/30">
    <div className="container mx-auto max-w-3xl">
      <p className="text-teal uppercase tracking-[0.3em] text-sm font-medium text-center mb-3">{siteContent.journey.eyebrow}</p>
      <h2 className="font-display text-4xl sm:text-5xl font-bold text-gold text-center mb-16">{siteContent.journey.title}</h2>

      <div className="relative">
        <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />

        {siteContent.journey.milestones.map((m, i) => (
          <div key={i} className={`relative flex items-start mb-12 last:mb-0 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
            <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-2 border-background z-10 mt-1" />
            <div className={`ml-14 sm:ml-0 sm:w-[calc(50%-2rem)] ${i % 2 === 0 ? "sm:pr-8 sm:text-right" : "sm:pl-8"}`}>
              <span className="text-primary font-display text-xl font-bold">{m.year}</span>
              <h3 className="text-foreground font-semibold text-lg mt-1">{m.title}</h3>
              <p className="text-muted-foreground text-sm mt-2">{m.description}</p>
              <span className="inline-flex items-center gap-1 text-teal text-xs mt-2">
                <MapPin className="w-3 h-3" /> {m.location}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default JourneyTimeline;
