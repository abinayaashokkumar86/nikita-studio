const galleryItems = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  alt: `Performance photo ${i + 1}`,
  height: [200, 280, 240, 320, 200, 260, 300, 220][i],
}));

const GallerySection = () => (
  <section id="gallery" className="py-24 px-6 bg-maroon-deep/30">
    <div className="container mx-auto max-w-6xl">
      <p className="text-teal uppercase tracking-[0.3em] text-sm font-medium text-center mb-3">Gallery</p>
      <h2 className="font-display text-4xl sm:text-5xl font-bold text-gold text-center mb-16">Moments in Music</h2>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {galleryItems.map((item) => (
          <div key={item.id} className="break-inside-avoid rounded-xl overflow-hidden bg-muted border border-border hover:shadow-gold transition-all duration-300">
            <div
              className="w-full flex items-center justify-center text-muted-foreground text-sm"
              style={{ height: item.height }}
            >
              <span className="font-display text-2xl text-gold/20">♪</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
