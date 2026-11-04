"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Globe2 } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/agenda", label: "Agenda" },
  { href: "/speakers", label: "Speakers" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/registration", label: "Register" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-deep)]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-secondary)] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <Globe2 className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg md:text-xl font-bold text-white tracking-tight">
                World Mosaic
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[var(--color-accent)] hidden sm:block">
                One World · Many Cultures
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/registration"
              className="ml-3 btn-gold text-sm !py-2 !px-5"
            >
              Get Tickets
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="lg:hidden bg-[var(--color-deep)] border-t border-white/10">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-white/90 hover:bg-white/10 rounded-lg font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/registration"
              onClick={() => setOpen(false)}
              className="mt-2 btn-gold text-center"
            >
              Get Tickets
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
