import heroMain from "@/assets/nikita-hero-cinematic.jpg";
import type { ContentMap, MediaItemRow } from "@/lib/siteData";

type HeroSectionProps = {
  content: ContentMap;
  media: MediaItemRow[];
};

const HeroSection = ({ content, media }: HeroSectionProps) => {
  const featuredImage = media.find((item) => item.category === "images" && item.is_featured);
  const heroImageUrl = featuredImage?.public_url || heroMain;

  return (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background – full hero image */}
    <div className="absolute inset-0">
      <img src={heroImageUrl} alt="Nikita playing Saraswati Veena" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
    </div>

    {/* Content */}
    <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
      <p className="text-teal uppercase tracking-[0.3em] text-sm font-medium mb-4 animate-fade-in-up">
        {content.hero_kicker}
      </p>
      <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold mb-4 animate-fade-in-up animation-delay-200">
        <span className="animate-shimmer">{content.hero_title}</span>
      </h1>
      <p className="font-display text-xl sm:text-2xl text-cream/80 mb-3 animate-fade-in-up animation-delay-200">
        {content.hero_subtitle}
      </p>
      <p className="text-cream/60 text-base sm:text-lg max-w-3xl mx-auto mb-4 animate-fade-in-up animation-delay-400">
        {content.hero_description}
      </p>
      <p className="text-teal/80 text-sm italic max-w-xl mx-auto mb-10 animate-fade-in-up animation-delay-400">
        {content.hero_quote}
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center animate-fade-in-up animation-delay-600">
        <a href="#about" className="gradient-gold text-primary-foreground px-7 py-3.5 rounded-lg font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity">
          Explore My Journey
        </a>
        <a href="#performances" className="border border-gold text-gold px-7 py-3.5 rounded-lg font-semibold text-sm uppercase tracking-wider hover:bg-gold/10 transition-colors">
          Watch Performances
        </a>
        <a href="#booking" className="border border-gold text-gold px-7 py-3.5 rounded-lg font-semibold text-sm uppercase tracking-wider hover:bg-gold/10 transition-colors">
          Book Nikita
        </a>
      </div>
    </div>

    {/* Decorative bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
  );
};

export default HeroSection;
