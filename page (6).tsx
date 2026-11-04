"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Loader2 } from "lucide-react";

type FormData = {
  fullName: string;
  email: string;
  mobile: string;
  organization: string;
  city: string;
  country: string;
  ticketType: string;
  dietary: string;
  notes: string;
};

const ticketTypes = [
  { value: "general", label: "General Attendee" },
  { value: "student", label: "Student" },
  { value: "vip", label: "VIP Guest" },
  { value: "exhibitor", label: "Exhibitor / Stall" },
  { value: "artist", label: "Artist / Performer" },
  { value: "volunteer", label: "Volunteer" },
];

export default function RegistrationPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormData>({
    fullName: "",
    email: "",
    mobile: "",
    organization: "",
    city: "",
    country: "India",
    ticketType: "general",
    dietary: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  function update(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function validate() {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Valid email is required";
    if (!form.mobile.trim() || form.mobile.length < 8)
      e.mobile = "Valid mobile number is required";
    if (!form.city.trim()) e.city = "City is required";
    if (!form.ticketType) e.ticketType = "Please select a ticket type";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    // Simulate registration + ticket generation
    // In full version this calls /api/register which writes to Neon + generates QR + sends email via Resend
    const ticketId =
      "WM-" +
      Date.now().toString(36).toUpperCase() +
      "-" +
      Math.random().toString(36).substring(2, 6).toUpperCase();

    // Store in localStorage for demo ticket page
    const registration = {
      ...form,
      ticketId,
      registeredAt: new Date().toISOString(),
      status: "confirmed",
    };
    localStorage.setItem("wm_last_registration", JSON.stringify(registration));

    // Also keep a list
    const existing = JSON.parse(localStorage.getItem("wm_registrations") || "[]");
    existing.push(registration);
    localStorage.setItem("wm_registrations", JSON.stringify(existing));

    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    router.push(`/ticket?id=${ticketId}`);
  }

  return (
    <div>
      <section className="bg-[var(--color-deep)] text-white py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-display text-3xl md:text-5xl font-bold">
            Register for World Mosaic
          </h1>
          <p className="mt-3 text-white/80">
            Secure your place at the international multicultural festival.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-2xl mx-auto px-4">
          <form
            onSubmit={handleSubmit}
            className="card-mosaic p-6 md:p-8 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-[var(--color-deep)] mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={form.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-sand)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
                  placeholder="Your full name"
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--color-deep)] mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-sand)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--color-deep)] mb-1.5">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  value={form.mobile}
                  onChange={(e) => update("mobile", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-sand)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
                  placeholder="+91 98765 43210"
                />
                {errors.mobile && (
                  <p className="mt-1 text-sm text-red-600">{errors.mobile}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--color-deep)] mb-1.5">
                  Organization / Institution
                </label>
                <input
                  type="text"
                  value={form.organization}
                  onChange={(e) => update("organization", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-sand)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
                  placeholder="Optional"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--color-deep)] mb-1.5">
                  City *
                </label>
                <input
                  type="text"
                  value={form.city}
                  onChange={(e) => update("city", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-sand)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
                  placeholder="Your city"
                />
                {errors.city && (
                  <p className="mt-1 text-sm text-red-600">{errors.city}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--color-deep)] mb-1.5">
                  Country
                </label>
                <input
                  type="text"
                  value={form.country}
                  onChange={(e) => update("country", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-sand)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-[var(--color-deep)] mb-1.5">
                  Ticket / Participation Category *
                </label>
                <select
                  value={form.ticketType}
                  onChange={(e) => update("ticketType", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-sand)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
                >
                  {ticketTypes.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-[var(--color-deep)] mb-1.5">
                  Dietary Preferences / Accessibility Needs
                </label>
                <input
                  type="text"
                  value={form.dietary}
                  onChange={(e) => update("dietary", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-sand)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
                  placeholder="Optional"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-[var(--color-deep)] mb-1.5">
                  Additional Notes
                </label>
                <textarea
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-sand)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] resize-none"
                  placeholder="Anything else we should know?"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    Processing Registration...
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-5 h-5 mr-2" />
                    Complete Registration
                  </>
                )}
              </button>
            </div>

            <p className="text-xs text-center text-[var(--color-deep)]/50">
              By registering you agree to our{" "}
              <a href="/terms" className="underline">
                Terms
              </a>{" "}
              and{" "}
              <a href="/privacy" className="underline">
                Privacy Policy
              </a>
              . You will receive a confirmation with your unique ticket and QR
              code.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
