import { useState } from "react";
import { Calendar, Music2, GraduationCap, MessageSquare, Send, CheckCircle, Mail } from "lucide-react";

type BookingType = "performance" | "lesson" | "inquiry";

const bookingOptions = [
  { type: "performance" as BookingType, icon: Music2, title: "Book a Performance", desc: "Invite Nikita for a live Saraswati Veena recital at your event." },
  { type: "lesson" as BookingType, icon: GraduationCap, title: "Private Lesson", desc: "Schedule one-on-one Veena lessons — online or in-person in Texas." },
  { type: "inquiry" as BookingType, icon: MessageSquare, title: "General Inquiry", desc: "Collaborations, media, or anything else — let's connect." },
];

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
        <p className="text-teal uppercase tracking-[0.3em] text-sm font-medium text-center mb-3">Bookings</p>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gold text-center mb-4">
          Work With Nikita
        </h2>
        <p className="text-cream/60 text-lg text-center max-w-2xl mx-auto mb-4">
          Whether it's a live performance, a private lesson, or a creative collaboration — reach out to get started.
        </p>
        <a
          href="mailto:nikitamusicalstudio@gmail.com"
          className="mx-auto mb-16 flex w-fit items-center gap-2 text-gold hover:text-teal transition-colors text-sm sm:text-base"
        >
          <Mail className="w-4 h-4" /> nikitamusicalstudio@gmail.com
        </a>

        {/* Booking type selector */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {bookingOptions.map((opt) => (
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
                <opt.icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="text-foreground font-semibold mb-2">{opt.title}</h3>
              <p className="text-muted-foreground text-sm">{opt.desc}</p>
            </button>
          ))}
        </div>

        {/* Booking form */}
        {selected && (
          <div className="max-w-xl mx-auto bg-card border border-border rounded-2xl p-8 shadow-gold animate-fade-in-up">
            {submitted ? (
              <div className="text-center py-6">
                <CheckCircle className="w-12 h-12 text-teal mx-auto mb-4" />
                <h3 className="text-foreground font-display text-2xl font-bold mb-2">Request Received!</h3>
                <p className="text-muted-foreground text-sm">
                  Thank you, {form.name}. We'll get back to you shortly regarding your{" "}
                  {selected === "performance" ? "performance booking" : selected === "lesson" ? "lesson request" : "inquiry"}.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-foreground font-display text-2xl font-bold text-center mb-6">
                  {bookingOptions.find((o) => o.type === selected)?.title}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">Your Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  {selected !== "inquiry" && (
                    <div>
                      <label className="text-sm text-muted-foreground mb-1 block flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> Preferred Date
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
                      {selected === "performance" ? "Event Details" : selected === "lesson" ? "What would you like to learn?" : "Your Message"}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder={
                        selected === "performance"
                          ? "Tell us about your event — date, venue, audience size..."
                          : selected === "lesson"
                          ? "Your current skill level, goals, preferred schedule..."
                          : "How can we help?"
                      }
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full gradient-gold text-primary-foreground px-6 py-3.5 rounded-lg font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Submit Request
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
