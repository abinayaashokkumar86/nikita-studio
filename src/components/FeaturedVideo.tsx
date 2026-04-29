import { Play } from "lucide-react";

const FeaturedVideo = () => (
  <section id="featured-video" className="py-24 px-6">
    <div className="container mx-auto max-w-4xl">
      <p className="text-teal uppercase tracking-[0.3em] text-sm font-medium text-center mb-3">Featured</p>
      <h2 className="font-display text-4xl sm:text-5xl font-bold text-gold text-center mb-4">Watch &amp; Listen</h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
        Experience the Saraswati Veena — a featured performance or original composition by Nikita.
      </p>

      <div className="relative aspect-video rounded-2xl overflow-hidden border border-border shadow-gold bg-card">
        {/* Replace the placeholder below with a real YouTube embed URL */}
        {/* <iframe src="https://www.youtube.com/embed/VIDEO_ID" ... /> */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-muted">
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
            <Play className="w-8 h-8 text-gold ml-1" />
          </div>
          <p className="text-cream/70 font-display text-lg">YouTube Video Coming Soon</p>
          <p className="text-muted-foreground text-sm max-w-sm text-center">
            Replace this placeholder with a YouTube embed of Nikita's best performance or original composition.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedVideo;
