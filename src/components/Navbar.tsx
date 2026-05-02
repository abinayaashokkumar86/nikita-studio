import { useState, useEffect } from "react";
import { Music, Menu, X } from "lucide-react";
import { siteContent } from "@/data/siteContent";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-gold border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#" className="flex items-center gap-2 text-gold font-display text-2xl font-bold tracking-wide">
          <Music className="w-6 h-6" />
          {siteContent.navigation.brand}
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {siteContent.navigation.links.map((l) => (
            <a key={l.href} href={l.href} className="text-cream/70 hover:text-gold transition-colors text-sm font-medium tracking-wide uppercase">
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-gold">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border px-6 pb-6">
          {siteContent.navigation.links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-cream/70 hover:text-gold transition-colors text-sm uppercase tracking-wide">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
