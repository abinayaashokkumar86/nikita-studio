import { Play, MapPin, Calendar } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import type { MediaItemRow } from "@/lib/siteData";

type PerformancesSectionProps = {
  media: MediaItemRow[];
};

const PerformancesSection = ({ media }: PerformancesSectionProps) => {
  const videos = media.filter((item) => item.category === "videos" && !item.is_featured);
  const cards = videos.length > 0 ? videos : siteContent.performances.items;

  return (
  <section id="performances" className="py-24 px-6">
    <div className="container mx-auto max-w-6xl">
      <p className="text-teal uppercase tracking-[0.3em] text-sm font-medium text-center mb-3">{siteContent.performances.eyebrow}</p>
      <h2 className="font-display text-4xl sm:text-5xl font-bold text-gold text-center mb-16">{siteContent.performances.title}</h2>

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
                  <img src={siteContent.assets.performanceCardBackground} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1080} height={1080} />
                  <div className="relative flex flex-col items-center gap-2">
                    <div className="w-14 h-14 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Play className="w-6 h-6 text-gold ml-1" />
                    </div>
                    <span className="text-cream/70 text-xs font-medium">{siteContent.performances.fallbackVideoLabel}</span>
                  </div>
                </>
              )}
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{"date" in p ? p.date : siteContent.performances.defaultDate}</span>
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{"place" in p ? p.place : siteContent.performances.defaultPlace}</span>
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
