"use client";

import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div>
      <section className="bg-[var(--color-deep)] text-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-3xl md:text-5xl font-bold">Contact Us</h1>
          <p className="mt-3 text-white/80">We would love to hear from you.</p>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display text-2xl font-bold text-[var(--color-deep)] mb-4">Get in Touch</h2>
            <ul className="space-y-4 text-[var(--color-deep)]/80">
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-[var(--color-secondary)] shrink-0" />
                <span>hello@worldmosaic.events</span>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-[var(--color-secondary)] shrink-0" />
                <span>Venue to be finalized · India</span>
              </li>
            </ul>
            <p className="mt-6 text-sm text-[var(--color-deep)]/60">
              For speaker, sponsor, stall or volunteer enquiries, please mention the relevant category in your message. Dedicated SPOCs will respond.
            </p>
          </div>
          <div className="card-mosaic p-6">
            {sent ? (
              <div className="text-center py-8">
                <p className="font-medium text-green-700">Message received (demo).</p>
                <p className="text-sm mt-2 text-[var(--color-deep)]/60">In the full system this is stored and emailed via Resend.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input required placeholder="Your name" className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-sand)] focus:ring-2 focus:ring-[var(--color-secondary)] outline-none" />
                <input required type="email" placeholder="Email" className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-sand)] focus:ring-2 focus:ring-[var(--color-secondary)] outline-none" />
                <textarea required rows={4} placeholder="Message" className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-sand)] focus:ring-2 focus:ring-[var(--color-secondary)] outline-none resize-none" />
                <button type="submit" className="btn-primary w-full">
                  <Send className="w-4 h-4 mr-2" /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
