import { Music, Mail, Instagram, Youtube, Facebook, Download, ExternalLink } from "lucide-react";

const FooterSection = () => (
  <footer className="py-16 px-6 border-t border-border">
    <div className="container mx-auto max-w-6xl">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <a href="#" className="flex items-center gap-2 text-gold font-display text-2xl font-bold mb-4">
            <Music className="w-5 h-5" /> Nikita Wired
          </a>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            Young Saraswati Veena virtuoso from Frisco, Texas. Dedicated to preserving and sharing the beauty of Carnatic music with the world.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-gold border border-gold/30 rounded-lg px-4 py-2 hover:bg-gold/10 transition-colors"
          >
            <Download className="w-4 h-4" /> Download Portfolio PDF
          </a>
        </div>

        <div>
          <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
          <div className="space-y-2">
            {["About", "Journey", "Performances", "Albums", "Booking"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="block text-muted-foreground text-sm hover:text-gold transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-foreground font-semibold mb-4">Connect</h4>
          <a href="mailto:contact@nikitawired.com" className="flex items-center gap-2 text-muted-foreground text-sm hover:text-gold transition-colors mb-4">
            <Mail className="w-4 h-4" /> contact@nikitawired.com
          </a>
          <a href="#" className="flex items-center gap-2 text-muted-foreground text-sm hover:text-gold transition-colors mb-6">
            <ExternalLink className="w-4 h-4" /> YouTube Channel
          </a>
          <div className="flex gap-4">
            {[Instagram, Youtube, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-gold hover:bg-primary/10 transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-muted-foreground text-xs">
        <p>© {new Date().getFullYear()} Nikita Wired. All rights reserved.</p>
        <p className="text-cream/40">Last Updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}</p>
        <p className="text-teal">Proud 7th Grader, Frisco ISD, Texas 🎓</p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
