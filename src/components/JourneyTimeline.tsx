import { MapPin } from "lucide-react";

const milestones = [
  { year: "2019", title: "Started Saraswati Veena Lessons", description: "Began formal Saraswati Veena training at age 7, discovering a passion for Carnatic music.", location: "India" },
  { year: "2020", title: "First Recital Performance", description: "Performed at a local temple cultural event, showcasing foundational ragas to an appreciative audience.", location: "India" },
  { year: "2021", title: "Moved to Frisco, Texas", description: "Continued musical training in the USA while adapting to a new school and cultural environment at Frisco ISD.", location: "Frisco, USA" },
  { year: "2022", title: "First US Stage Performance", description: "Debuted on a US stage at a Carnatic music festival in the Dallas–Fort Worth area.", location: "Texas, USA" },
  { year: "2023", title: "Reproduced First Album", description: "Successfully reproduced a collection of classical compositions, earning recognition from her Guru.", location: "USA" },
  { year: "2024", title: "Released Original Composition", description: "Composed and released her very first original Saraswati Veena piece — a proud milestone in her young career.", location: "Frisco, USA" },
  { year: "2025", title: "Multi-Concert Performer", description: "Performed at multiple prestigious cultural events across India and the USA, growing her audience.", location: "India & USA" },
];

const JourneyTimeline = () => (
  <section id="journey" className="py-24 px-6 bg-maroon-deep/30">
    <div className="container mx-auto max-w-3xl">
      <p className="text-teal uppercase tracking-[0.3em] text-sm font-medium text-center mb-3">My Journey</p>
      <h2 className="font-display text-4xl sm:text-5xl font-bold text-gold text-center mb-16">5 Years of Growth</h2>

      <div className="relative">
        <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />

        {milestones.map((m, i) => (
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
