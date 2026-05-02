import { useState } from "react";
import { Calendar, Music2, GraduationCap, MessageSquare, Send, CheckCircle, Mail } from "lucide-react";
import { siteContent, type BookingType } from "@/data/siteContent";

const icons = {
  graduation: GraduationCap,
  message: MessageSquare,
  music: Music2,
};

const BookingSection = () => {
  const [selected, setSelected] = useState<BookingType | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", date: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.message) setSubmitted(true);
  };

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  return (
    <section id="booking" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="relative z-10 container mx-auto max-w-5xl">
        <p className="text-teal uppercase tracking-[0.3em] text-sm font-medium text-center mb-3">{siteContent.booking.eyebrow}</p>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gold text-center mb-4">
          {siteContent.booking.title}
        </h2>
        <p className="text-cream/60 text-lg text-center max-w-2xl mx-auto mb-4">
          {siteContent.booking.description}
        </p>
        <a
          href={`mailto:${siteContent.booking.contactEmail}`}
          className="mx-auto mb-16 flex w-fit items-center gap-2 text-gold hover:text-teal transition-colors text-sm sm:text-base"
        >
          <Mail className="w-4 h-4" /> {siteContent.booking.contactEmail}
        </a>

        {/* Booking type selector */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {siteContent.booking.options.map((opt) => {
            const Icon = icons[opt.icon as keyof typeof icons];
            return (
            <button
              key={opt.type}
              onClick={() => { setSelected(opt.type); setSubmitted(false); }}
              className={`bg-card/50 border rounded-xl p-6 text-left transition-all duration-300 ${
                selected === opt.type
                  ? "border-primary shadow-gold"
                  : "border-border hover:border-primary/40"
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                selected === opt.type ? "bg-primary/25" : "bg-primary/15"
              }`}>
                <Icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="text-foreground font-semibold mb-2">{opt.title}</h3>
              <p className="text-muted-foreground text-sm">{opt.desc}</p>
            </button>
            );
          })}
        </div>

        {/* Booking form */}
        {selected && (
          <div className="max-w-xl mx-auto bg-card border border-border rounded-2xl p-8 shadow-gold animate-fade-in-up">
            {submitted ? (
              <div className="text-center py-6">
                <CheckCircle className="w-12 h-12 text-teal mx-auto mb-4" />
                <h3 className="text-foreground font-display text-2xl font-bold mb-2">{siteContent.booking.form.successTitle}</h3>
                <p className="text-muted-foreground text-sm">
                  {siteContent.booking.form.successPrefix}, {form.name}. {siteContent.booking.form.successSuffix}{" "}
                  {siteContent.booking.form.requestLabels[selected]}.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-foreground font-display text-2xl font-bold text-center mb-6">
                  {siteContent.booking.options.find((o) => o.type === selected)?.title}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">{siteContent.booking.form.nameLabel}</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder={siteContent.booking.form.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">{siteContent.booking.form.emailLabel}</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder={siteContent.booking.form.emailPlaceholder}
                    />
                  </div>
                  {selected !== "inquiry" && (
                    <div>
                      <label className="text-sm text-muted-foreground mb-1 block flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> {siteContent.booking.form.dateLabel}
                      </label>
                      <input
                        type="date"
                        value={form.date}
                        onChange={(e) => update("date", e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  )}
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">
                      {siteContent.booking.form.messageLabels[selected]}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder={
                        siteContent.booking.form.messagePlaceholders[selected]
                      }
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full gradient-gold text-primary-foreground px-6 py-3.5 rounded-lg font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> {siteContent.booking.form.submitLabel}
                  </button>
                </form>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default BookingSection;
