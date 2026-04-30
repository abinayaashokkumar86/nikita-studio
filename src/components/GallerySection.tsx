import type { ContentMap, MediaItemRow } from "@/lib/siteData";

type GallerySectionProps = {
  content: ContentMap;
  media: MediaItemRow[];
};

const GallerySection = ({ content, media }: GallerySectionProps) => {
  const images = media.filter((item) => item.category === "images");

  return (
  <section id="gallery" className="py-24 px-6 bg-maroon-deep/30">
    <div className="container mx-auto max-w-6xl">
      <p className="text-teal uppercase tracking-[0.3em] text-sm font-medium text-center mb-3">Gallery</p>
      <h2 className="font-display text-4xl sm:text-5xl font-bold text-gold text-center mb-16">{content.gallery_title}</h2>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.length > 0 ? (
          images.map((item) => (
            <div key={item.id} className="break-inside-avoid rounded-xl overflow-hidden bg-muted border border-border hover:shadow-gold transition-all duration-300">
              <img src={item.public_url} alt={item.title} className="w-full h-auto object-cover" loading="lazy" />
            </div>
          ))
        ) : (
          <div className="break-inside-avoid rounded-xl overflow-hidden bg-muted border border-border p-10 text-center text-muted-foreground">
            Upload gallery images from Developer Mode.
          </div>
        )}
      </div>
    </div>
  </section>
  );
};

export default GallerySection;
