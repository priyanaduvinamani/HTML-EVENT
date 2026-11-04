import Link from "next/link";
import { Globe2, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--color-deep)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-secondary)] flex items-center justify-center">
                <Globe2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-display text-xl font-bold">World Mosaic</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              One World. Many Cultures. One Celebration. A two-day international
              multicultural festival celebrating diversity through art, music,
              dance, food and heritage.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-[var(--color-accent)]">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/about", label: "About the Event" },
                { href: "/agenda", label: "Event Agenda" },
                { href: "/speakers", label: "Speakers & Artists" },
                { href: "/sponsors", label: "Sponsors & Partners" },
                { href: "/registration", label: "Registration" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-[var(--color-accent)]">
              Information
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white/70 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/70 hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-white/70 hover:text-white">
                  Admin Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-[var(--color-accent)]">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                <span>Venue to be finalized · India</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-[var(--color-accent)]" />
                <a
                  href="mailto:hello@worldmosaic.events"
                  className="hover:text-white"
                >
                  hello@worldmosaic.events
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-[var(--color-accent)]" />
                <span>To be announced</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>© {new Date().getFullYear()} World Mosaic. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Built as a reusable Event Management Platform · Deployable on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
