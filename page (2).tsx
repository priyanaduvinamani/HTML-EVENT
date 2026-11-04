"use client";

import { useState } from "react";
import Link from "next/link";
import { Lock, LayoutDashboard, Users, Ticket, Settings, Mail } from "lucide-react";

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    // Demo only – full version uses NextAuth + hashed passwords + RBAC
    if (email && password) setLoggedIn(true);
  }

  if (!loggedIn) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
        <div className="card-mosaic p-8 w-full max-w-md">
          <div className="text-center mb-6">
            <div className="w-12 h-12 mx-auto rounded-full bg-[var(--color-deep)] flex items-center justify-center text-white mb-3">
              <Lock className="w-5 h-5" />
            </div>
            <h1 className="font-display text-2xl font-bold text-[var(--color-deep)]">Admin Login</h1>
            <p className="text-sm text-[var(--color-deep)]/60 mt-1">Event Management Dashboard</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-sand)] focus:ring-2 focus:ring-[var(--color-secondary)] outline-none"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-sand)] focus:ring-2 focus:ring-[var(--color-secondary)] outline-none"
              required
            />
            <button type="submit" className="btn-primary w-full">Sign In</button>
          </form>
          <p className="mt-4 text-xs text-center text-[var(--color-deep)]/50">
            Demo: enter any email & password. Full system uses secure auth + roles (Super Admin, Event Manager, Check-in Staff, etc.).
          </p>
        </div>
      </div>
    );
  }

  const modules = [
    { icon: LayoutDashboard, title: "Overview", desc: "Registrations, check-ins, trends" },
    { icon: Users, title: "Registrations", desc: "View, filter, export participants" },
    { icon: Ticket, title: "Tickets & QR", desc: "Ticket types, verification, check-in" },
    { icon: Mail, title: "Email & Reminders", desc: "Campaigns, templates, scheduling" },
    { icon: Settings, title: "Event Config", desc: "Branding, pages, SPOCs, settings" },
  ];

  return (
    <div className="py-10 md:py-14">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="font-display text-3xl font-bold text-[var(--color-deep)]">Dashboard</h1>
            <p className="text-[var(--color-deep)]/60">World Mosaic Event Management</p>
          </div>
          <button onClick={() => setLoggedIn(false)} className="btn-secondary text-sm">Sign Out</button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Total Registrations", value: "—" },
            { label: "Confirmed", value: "—" },
            { label: "Checked In", value: "—" },
            { label: "Pending", value: "—" },
          ].map((s) => (
            <div key={s.label} className="card-mosaic p-4 text-center">
              <div className="text-2xl font-bold text-[var(--color-secondary)]">{s.value}</div>
              <div className="text-xs text-[var(--color-deep)]/60 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((m) => (
            <div key={m.title} className="card-mosaic p-6 hover:shadow-md transition-shadow cursor-pointer">
              <m.icon className="w-8 h-8 text-[var(--color-secondary)] mb-3" />
              <h3 className="font-display text-lg font-semibold text-[var(--color-deep)]">{m.title}</h3>
              <p className="text-sm text-[var(--color-deep)]/60 mt-1">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 rounded-2xl bg-[var(--color-sand)] text-sm text-[var(--color-deep)]/70">
          <strong>Full platform note:</strong> This is a functional public website + registration demo.
          The complete specification includes Prisma + Neon database, full RBAC, dynamic form builder,
          Resend email, QR generation server-side, SPOC assignment, Vercel Cron reminders, and
          student-friendly GitHub → Vercel deployment. Connect a Neon DATABASE_URL and implement
          the API routes to unlock live data.
        </div>
      </div>
    </div>
  );
}
