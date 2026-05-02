import { siteContent } from "@/data/siteContent";

const renderHighlightedText = (text: string) => {
  const terms = siteContent.about.highlightedTerms;
  const pattern = new RegExp(`(${terms.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")}|riyaaz)`, "g");

  return text.split(pattern).map((part, index) => {
    if (terms.includes(part)) {
      return <span key={`${part}-${index}`} className="text-gold font-semibold">{part}</span>;
    }
    if (part === "riyaaz") {
      return <em key={`${part}-${index}`}>{part}</em>;
    }
    return part;
  });
};

const AboutSection = () => (
  <section id="about" className="py-24 px-6">
    <div className="container mx-auto max-w-4xl">
      <p className="text-teal uppercase tracking-[0.3em] text-sm font-medium text-center mb-3">{siteContent.about.eyebrow}</p>
      <h2 className="font-display text-4xl sm:text-5xl font-bold text-gold text-center mb-4">{siteContent.about.title}</h2>
      <p className="text-cream/50 text-center text-sm uppercase tracking-wider mb-16">{siteContent.about.subtitle}</p>

      <div className="space-y-6 text-cream/75 text-lg leading-relaxed">
        {siteContent.about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{renderHighlightedText(paragraph)}</p>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
