import { Play, MapPin, Calendar } from "lucide-react";
import performanceCardBg from "@/assets/performance-card-bg.jpg";
import type { MediaItemRow } from "@/lib/siteData";

const performances = [
  { date: "2024", event: "Annual Carnatic Music Festival", place: "Chennai, India", description: "Performed a 30-minute solo Saraswati Veena recital featuring Raga Kalyani and Raga Shankarabharanam.", video: "" },
  { date: "2024", event: "DFW Telugu Association Cultural Night", place: "Dallas, USA", description: "Showcased classical and semi-classical compositions to an audience of over 500 attendees.", video: "" },
  { date: "2023", event: "Temple Anniversary Celebration", place: "Frisco, USA", description: "Opened the evening program with a devotional Saraswati Veena performance at the local Hindu temple.", video: "" },
  { date: "2023", event: "India Heritage Festival", place: "Hyderabad, India", description: "Invited as a young prodigy performer at this prestigious cultural gathering.", video: "" },
  { date: "2022", event: "Frisco Arts & Culture Showcase", place: "Frisco, USA", description: "First public US performance, introducing Carnatic Saraswati Veena to a diverse American audience.", video: "" },
  { date: "2021", event: "Virtual Carnatic Concert Series", place: "Online (India & USA)", description: "Participated in a pandemic-era virtual concert series connecting musicians across continents.", video: "" },
];

type PerformancesSectionProps = {
  media: MediaItemRow[];
};

const PerformancesSection = ({ media }: PerformancesSectionProps) => {
  const videos = media.filter((item) => item.category === "videos" && !item.is_featured);
  const cards = videos.length > 0 ? videos : performances;

  return (
  <section id="performances" className="py-24 px-6">
    <div className="container mx-auto max-w-6xl">
      <p className="text-teal uppercase tracking-[0.3em] text-sm font-medium text-center mb-3">Performances</p>
      <h2 className="font-display text-4xl sm:text-5xl font-bold text-gold text-center mb-16">On Stage</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((p, i) => (
          <div key={i} className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-gold transition-all duration-300 group">
            <div className="relative aspect-square flex items-center justify-center overflow-hidden">
              {"public_url" in p ? (
                <video src={p.public_url} controls className="w-full h-full object-cover" />
              ) : p.video ? (
                <iframe src={p.video} className="w-full h-full" allow="autoplay; encrypted-media" allowFullScreen title={p.event} />
              ) : (
                <>
                  <img src={performanceCardBg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1080} height={1080} />
                  <div className="relative flex flex-col items-center gap-2">
                    <div className="w-14 h-14 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Play className="w-6 h-6 text-gold ml-1" />
                    </div>
                    <span className="text-cream/70 text-xs font-medium">Video Coming Soon</span>
                  </div>
                </>
              )}
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{"date" in p ? p.date : "Recent"}</span>
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{"place" in p ? p.place : "Nikita Studio"}</span>
              </div>
              <h3 className="text-foreground font-semibold mb-2">{"event" in p ? p.event : p.title}</h3>
              <p className="text-muted-foreground text-sm">{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default PerformancesSection;
