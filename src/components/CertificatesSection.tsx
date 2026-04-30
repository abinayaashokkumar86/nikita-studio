import type { ContentMap, MediaItemRow } from "@/lib/siteData";

type CertificatesSectionProps = {
  content: ContentMap;
  media: MediaItemRow[];
};

const CertificatesSection = ({ content, media }: CertificatesSectionProps) => {
  const certificates = media.filter((item) => item.category === "certificates");

  if (certificates.length === 0) return null;

  return (
    <section id="certificates" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <p className="text-teal uppercase tracking-[0.3em] text-sm font-medium text-center mb-3">Achievements</p>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-gold text-center mb-16">{content.certificates_title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((item) => (
            <a
              key={item.id}
              href={item.public_url}
              target="_blank"
              rel="noreferrer"
              className="bg-card border border-border rounded-xl p-6 hover:shadow-gold transition-all duration-300"
            >
              <p className="text-foreground font-semibold mb-2">{item.title}</p>
              <p className="text-muted-foreground text-sm">{item.description || "Certificate"}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
