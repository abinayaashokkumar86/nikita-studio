import { User, Route, Music2, Disc3, CalendarCheck, Image, Video } from "lucide-react";
import { siteContent } from "@/data/siteContent";

const icons = {
  calendar: CalendarCheck,
  disc: Disc3,
  image: Image,
  music: Music2,
  route: Route,
  user: User,
  video: Video,
};

const QuickNav = () => (
  <section className="py-8 px-6 border-b border-border bg-card/50 backdrop-blur-sm sticky top-[72px] z-40">
    <div className="container mx-auto max-w-5xl">
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {siteContent.quickNav.map((l) => {
          const Icon = icons[l.icon as keyof typeof icons];
          return (
          <a
            key={l.href}
            href={l.href}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-medium uppercase tracking-wider text-cream/70 border border-border hover:border-primary/50 hover:text-gold hover:bg-primary/10 transition-all"
          >
            <Icon className="w-3.5 h-3.5" />
            {l.label}
          </a>
          );
        })}
      </div>
    </div>
  </section>
);

export default QuickNav;
