import { Music, Mail, Instagram, Youtube, Facebook, Download, ExternalLink } from "lucide-react";
import { siteContent } from "@/data/siteContent";

const socialIcons = {
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
};

const FooterSection = () => (
  <footer className="py-16 px-6 border-t border-border">
    <div className="container mx-auto max-w-6xl">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <a href="#" className="flex items-center gap-2 text-gold font-display text-2xl font-bold mb-4">
            <Music className="w-5 h-5" /> {siteContent.footer.brand}
          </a>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {siteContent.footer.description}
          </p>
          <a
            href={siteContent.footer.portfolio.href}
            className="inline-flex items-center gap-2 text-sm font-medium text-gold border border-gold/30 rounded-lg px-4 py-2 hover:bg-gold/10 transition-colors"
          >
            <Download className="w-4 h-4" /> {siteContent.footer.portfolio.label}
          </a>
        </div>

        <div>
          <h4 className="text-foreground font-semibold mb-4">{siteContent.footer.quickLinksTitle}</h4>
          <div className="space-y-2">
            {siteContent.footer.quickLinks.map((l) => (
              <a key={l.href} href={l.href} className="block text-muted-foreground text-sm hover:text-gold transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-foreground font-semibold mb-4">{siteContent.footer.connectTitle}</h4>
          <a href={`mailto:${siteContent.footer.contactEmail}`} className="flex items-center gap-2 text-muted-foreground text-sm hover:text-gold transition-colors mb-4">
            <Mail className="w-4 h-4" /> {siteContent.footer.contactEmail}
          </a>
          <a href={siteContent.footer.youtube.href} className="flex items-center gap-2 text-muted-foreground text-sm hover:text-gold transition-colors mb-6">
            <ExternalLink className="w-4 h-4" /> {siteContent.footer.youtube.label}
          </a>
          <div className="flex gap-4">
            {siteContent.footer.socialLinks.map((link) => {
              const Icon = socialIcons[link.icon as keyof typeof socialIcons];
              return (
              <a key={link.label} href={link.href} aria-label={link.label} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-gold hover:bg-primary/10 transition-colors">
                <Icon className="w-4 h-4" />
              </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-muted-foreground text-xs">
        <p>© {new Date().getFullYear()} {siteContent.footer.copyright}</p>
        <p className="text-cream/40">{siteContent.footer.updatedPrefix} {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}</p>
        <p className="text-teal">{siteContent.footer.studentNote}</p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
