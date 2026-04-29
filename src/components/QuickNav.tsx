import { User, Route, Music2, Disc3, CalendarCheck, Image, Video } from "lucide-react";

const links = [
  { href: "#about", label: "About", icon: User },
  { href: "#featured-video", label: "Featured Video", icon: Video },
  { href: "#journey", label: "Journey", icon: Route },
  { href: "#performances", label: "Performances", icon: Music2 },
  { href: "#albums", label: "Albums", icon: Disc3 },
  { href: "#booking", label: "Booking", icon: CalendarCheck },
  { href: "#gallery", label: "Gallery", icon: Image },
];

const QuickNav = () => (
  <section className="py-8 px-6 border-b border-border bg-card/50 backdrop-blur-sm sticky top-[72px] z-40">
    <div className="container mx-auto max-w-5xl">
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-medium uppercase tracking-wider text-cream/70 border border-border hover:border-primary/50 hover:text-gold hover:bg-primary/10 transition-all"
          >
            <l.icon className="w-3.5 h-3.5" />
            {l.label}
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default QuickNav;
