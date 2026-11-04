import Link from "next/link";
import {
  Music,
  Utensils,
  Palette,
  Users,
  Calendar,
  MapPin,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const highlights = [
  {
    icon: Music,
    title: "Performances & Music",
    desc: "Traditional and contemporary music, dance and stage performances from cultures across the globe.",
  },
  {
    icon: Utensils,
    title: "Global Cuisine",
    desc: "Taste authentic dishes and street food from every corner of the world in our food village.",
  },
  {
    icon: Palette,
    title: "Art & Crafts",
    desc: "Live exhibitions, workshops and artisan stalls showcasing heritage crafts and contemporary art.",
  },
  {
    icon: Users,
    title: "Interactive Experiences",
    desc: "Workshops, cultural exchanges, storytelling and hands-on activities for all ages.",
  },
];

const stats = [
  { value: "40+", label: "Cultures Represented" },
  { value: "100+", label: "Artists & Performers" },
  { value: "2", label: "Days of Celebration" },
  { value: "50+", label: "Workshops & Sessions" },
];

export default function HomePage() {
  return (
    <div className="pattern-overlay">
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-accent)] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[var(--color-maroon)] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[var(--color-accent)] text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              International Multicultural Festival
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
              One World.
              <br />
              <span className="text-[var(--color-accent)]">Many Cultures.</span>
              <br />
              One Celebration.
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
              A two-day international multicultural festival bringing people
              together to experience cultures through traditional performances,
              music, dance, food, art, crafts, exhibitions and interactive
              activities.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/registration" className="btn-gold text-base">
                Register Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium border-2 border-white/30 text-white hover:bg-white/10 transition-all"
              >
                Discover More
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[var(--color-accent)]" />
                <span>Dates: To be announced</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[var(--color-accent)]" />
                <span>Venue: To be finalized</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl md:text-4xl font-bold text-[var(--color-accent)]">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-white/80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-deep)]">
              Celebrate Diversity
            </h2>
            <p className="mt-4 text-[var(--color-deep)]/70 text-lg">
              Immerse yourself in a rich tapestry of global cultures through
              performances, flavours, crafts and conversations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="card-mosaic p-6 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-primary)] flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  <h.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-[var(--color-deep)]">
                  {h.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-deep)]/70 leading-relaxed">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-20 bg-[var(--color-sand)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-deep)]">
            Be Part of the Mosaic
          </h2>
          <p className="mt-4 text-lg text-[var(--color-deep)]/70">
            Whether as a visitor, performer, exhibitor or volunteer — there is a
            place for you at World Mosaic.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/registration" className="btn-primary">
              Register Your Interest
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact the Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
