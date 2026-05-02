import { Play } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import type { ContentMap, MediaItemRow } from "@/lib/siteData";

type FeaturedVideoProps = {
  content: ContentMap;
  media: MediaItemRow[];
};

const FeaturedVideo = ({ content, media }: FeaturedVideoProps) => {
  const featuredVideo = media.find((item) => item.category === "videos" && item.is_featured);

  return (
  <section id="featured-video" className="py-24 px-6">
    <div className="container mx-auto max-w-4xl">
      <p className="text-teal uppercase tracking-[0.3em] text-sm font-medium text-center mb-3">{siteContent.featuredVideo.eyebrow}</p>
      <h2 className="font-display text-4xl sm:text-5xl font-bold text-gold text-center mb-4">{content.featured_title}</h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
        {content.featured_description}
      </p>

      <div className="relative aspect-video rounded-2xl overflow-hidden border border-border shadow-gold bg-card">
        {featuredVideo ? (
          <video src={featuredVideo.public_url} controls className="w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-muted">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
              <Play className="w-8 h-8 text-gold ml-1" />
            </div>
            <p className="text-cream/70 font-display text-lg">{siteContent.featuredVideo.fallbackLabel}</p>
          </div>
        )}
      </div>
    </div>
  </section>
  );
};

export default FeaturedVideo;
