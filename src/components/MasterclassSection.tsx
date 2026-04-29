import { useState } from "react";
import { Sparkles, BookOpen, Users, Globe } from "lucide-react";

const features = [
  { icon: BookOpen, title: "Technique & Fundamentals", desc: "Master Saraswati Veena posture, finger techniques, and foundational exercises." },
  { icon: Sparkles, title: "Raga Exploration", desc: "Deep-dive into classical ragas, their moods, and performance nuances." },
  { icon: Users, title: "Performance Skills", desc: "Stage presence, audience engagement, and recital preparation." },
  { icon: Globe, title: "Online & In-Person", desc: "Flexible learning options — join from anywhere in the world or attend live in Texas." },
];

const MasterclassSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="masterclasses" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="relative z-10 container mx-auto max-w-5xl">
        <p className="text-teal uppercase tracking-[0.3em] text-sm font-medium text-center mb-3">Coming Soon</p>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gold text-center mb-4">
          Sharing the Tradition – Masterclasses with Nikita
        </h2>
        <p className="text-cream/60 text-lg text-center max-w-2xl mx-auto mb-16">
          Comprehensive masterclasses designed for aspiring Saraswati Veena players of all levels. Learn technique, ragas, and the art of performance from a passionate young artist committed to preserving this timeless tradition.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((f, i) => (
            <div key={i} className="bg-card/50 border border-border rounded-xl p-6 text-center hover:border-primary/40 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="text-foreground font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-lg mx-auto bg-card border border-border rounded-2xl p-8 shadow-gold">
          <h3 className="text-foreground font-display text-2xl font-bold text-center mb-2">Get Notified</h3>
          <p className="text-muted-foreground text-sm text-center mb-6">Be the first to know when masterclasses launch.</p>
          {submitted ? (
            <p className="text-teal text-center font-medium">Thank you! We'll notify you when masterclasses launch. 🎶</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <button type="submit" className="gradient-gold text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity whitespace-nowrap">
                Notify Me
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default MasterclassSection;
