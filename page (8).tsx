export const metadata = { title: "Sponsors & Partners | World Mosaic" };

export default function SponsorsPage() {
  return (
    <div>
      <section className="bg-[var(--color-deep)] text-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-3xl md:text-5xl font-bold">Sponsors & Partners</h1>
          <p className="mt-3 text-white/80">Organizations supporting cultural exchange and the arts.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-lg text-[var(--color-deep)]/70 mb-8">
            Sponsorship and partnership opportunities are open. Title, Presenting, Supporting and Community partner tiers are available.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {["Title Partner", "Presenting Partners", "Supporting Partners"].map((tier) => (
              <div key={tier} className="card-mosaic p-8 flex items-center justify-center min-h-[120px]">
                <span className="font-display text-lg text-[var(--color-deep)]/40">{tier}</span>
              </div>
            ))}
          </div>
          <a href="/contact" className="btn-primary">Become a Partner</a>
        </div>
      </section>
    </div>
  );
}
