import { Disc3, ExternalLink } from "lucide-react";
import type { ContentMap, MediaItemRow } from "@/lib/siteData";

const albums = [
  { title: "Raga Reverie", type: "Reproduced", description: "A collection of timeless Carnatic compositions featuring Raga Mohanam and Raga Hamsadhwani." },
  { title: "Veena Vandanam", type: "Reproduced", description: "Devotional pieces celebrating the divine, rendered through the soulful tones of the Saraswati Veena." },
  { title: "Classical Horizons", type: "Reproduced", description: "An exploration of complex ragas and talas showcasing technical growth and musicality." },
  { title: "Strings of the Soul", type: "Original", description: "Nikita's debut original composition — a heartfelt piece blending traditional ragas with her own creative voice." },
];

type AlbumsSectionProps = {
  content: ContentMap;
  media: MediaItemRow[];
};

const AlbumsSection = ({ content, media }: AlbumsSectionProps) => {
  const audioItems = media.filter((item) => item.category === "audios");

  return (
  <section id="albums" className="py-24 px-6 bg-maroon-deep/30">
    <div className="container mx-auto max-w-6xl">
      <p className="text-teal uppercase tracking-[0.3em] text-sm font-medium text-center mb-3">Albums & Compositions</p>
      <h2 className="font-display text-4xl sm:text-5xl font-bold text-gold text-center mb-16">{content.albums_title}</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {(audioItems.length > 0 ? audioItems : albums).map((a, i) => (
          <div key={i} className="bg-card border border-border rounded-xl p-6 hover:shadow-gold transition-all duration-300 group flex flex-col">
            <div className="w-full aspect-square rounded-lg bg-muted flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
              <Disc3 className="w-16 h-16 text-gold/40 group-hover:text-gold/70 transition-colors" />
            </div>
            <span className={`self-start text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3 ${
              ("type" in a ? a.type : "Uploaded") === "Original" ? "bg-accent/20 text-teal" : "bg-primary/15 text-gold"
            }`}>
              {"type" in a ? a.type : "Uploaded"}
            </span>
            <h3 className="text-foreground font-display text-xl font-bold mb-2">{a.title}</h3>
            <p className="text-muted-foreground text-sm flex-1 mb-4">{"description" in a ? a.description : ""}</p>
            {"public_url" in a ? (
              <audio controls className="w-full">
                <source src={a.public_url} />
              </audio>
            ) : (
              <a href="#" className="inline-flex items-center gap-2 text-gold text-sm font-medium hover:underline">
                Listen Now <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default AlbumsSection;
