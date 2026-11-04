"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Download, CheckCircle, User, Mail, Phone, Ticket } from "lucide-react";

type Registration = {
  fullName: string;
  email: string;
  mobile: string;
  organization: string;
  city: string;
  country: string;
  ticketType: string;
  ticketId: string;
  registeredAt: string;
  status: string;
};

function TicketContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [reg, setReg] = useState<Registration | null>(null);
  const [qrDataUrl, setQrDataUrl] = useState<string>("");

  useEffect(() => {
    const raw = localStorage.getItem("wm_last_registration");
    if (raw) {
      const data = JSON.parse(raw) as Registration;
      if (!id || data.ticketId === id) {
        setReg(data);
        // Generate simple QR using a public API for demo (in production use server-side qrcode lib)
        const verifyUrl = `${window.location.origin}/ticket?id=${data.ticketId}`;
        setQrDataUrl(
          `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(verifyUrl)}`
        );
      }
    }
  }, [id]);

  if (!reg) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <h1 className="font-display text-2xl font-bold text-[var(--color-deep)]">
          Ticket not found
        </h1>
        <p className="mt-2 text-[var(--color-deep)]/70">
          Please complete registration first or check your ticket ID.
        </p>
        <Link href="/registration" className="btn-primary mt-6 inline-flex">
          Go to Registration
        </Link>
      </div>
    );
  }

  const typeLabel =
    {
      general: "General Attendee",
      student: "Student",
      vip: "VIP Guest",
      exhibitor: "Exhibitor / Stall",
      artist: "Artist / Performer",
      volunteer: "Volunteer",
    }[reg.ticketType] || reg.ticketType;

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-lg mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 text-green-800 text-sm font-medium">
            <CheckCircle className="w-4 h-4" />
            Registration Confirmed
          </div>
          <h1 className="mt-4 font-display text-3xl font-bold text-[var(--color-deep)]">
            Your Ticket
          </h1>
        </div>

        <div className="card-mosaic overflow-hidden">
          {/* Ticket header */}
          <div className="bg-gradient-to-r from-[var(--color-deep)] to-[var(--color-maroon)] text-white p-6 text-center">
            <div className="font-display text-2xl font-bold">World Mosaic</div>
            <div className="text-sm text-white/70 mt-1">
              One World · Many Cultures · One Celebration
            </div>
          </div>

          <div className="p-6 space-y-5">
            <div className="flex justify-center">
              {qrDataUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={qrDataUrl}
                  alt="Ticket QR Code"
                  className="w-48 h-48 border-4 border-[var(--color-sand)] rounded-xl"
                />
              )}
            </div>

            <div className="text-center">
              <div className="text-xs uppercase tracking-wider text-[var(--color-deep)]/50">
                Ticket Number
              </div>
              <div className="font-mono text-xl font-bold text-[var(--color-secondary)] tracking-wide">
                {reg.ticketId}
              </div>
            </div>

            <div className="section-divider my-2" />

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <User className="w-4 h-4 text-[var(--color-secondary)]" />
                <span className="font-medium">{reg.fullName}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[var(--color-secondary)]" />
                <span>{reg.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[var(--color-secondary)]" />
                <span>{reg.mobile}</span>
              </div>
              <div className="flex items-center gap-3">
                <Ticket className="w-4 h-4 text-[var(--color-secondary)]" />
                <span>{typeLabel}</span>
              </div>
            </div>

            <div className="bg-[var(--color-sand)] rounded-xl p-4 text-sm">
              <div className="font-medium text-[var(--color-deep)] mb-1">
                Event Details
              </div>
              <p className="text-[var(--color-deep)]/70">
                Dates & Venue: To be announced
                <br />
                Timezone: India Standard Time (IST)
              </p>
            </div>

            <div className="bg-[var(--color-cream)] border border-[var(--color-accent)]/30 rounded-xl p-4 text-sm">
              <div className="font-medium text-[var(--color-deep)] mb-1">
                Your Point of Contact (SPOC)
              </div>
              <p className="text-[var(--color-deep)]/70">
                Registration Coordinator
                <br />
                Email: registration@worldmosaic.events
                <br />
                (Assigned SPOCs appear here based on ticket category in the full
                system)
              </p>
            </div>

            <p className="text-xs text-center text-[var(--color-deep)]/50">
              Present this QR code at the entrance for check-in. Keep this page
              or take a screenshot.
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => window.print()}
            className="btn-secondary text-sm"
          >
            <Download className="w-4 h-4 mr-2" />
            Print / Save
          </button>
          <Link href="/" className="btn-primary text-sm">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function TicketPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading ticket...</div>}>
      <TicketContent />
    </Suspense>
  );
}
