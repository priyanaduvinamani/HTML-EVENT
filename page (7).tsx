export const metadata = { title: "Speakers & Artists | World Mosaic" };

const people = [
  { name: "Aisha Rahman", role: "Cultural Anthropologist", focus: "South Asian heritage storytelling" },
  { name: "Carlos Mendoza", role: "Flamenco Guitarist", focus: "Spanish & Latin American fusion" },
  { name: "Mei Lin Chen", role: "Calligraphy Master", focus: "East Asian ink traditions" },
  { name: "Kwame Osei", role: "Percussion Ensemble Lead", focus: "West African rhythms" },
  { name: "Sofia Petrova", role: "Folk Dance Director", focus: "Eastern European traditions" },
  { name: "Rajiv Kapoor", role: "Culinary Historian", focus: "Spice routes & regional cuisines" },
];

export default function SpeakersPage() {
  return (
    <div>
      <section className="bg-[var(--color-deep)] text-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-3xl md:text-5xl font-bold">Speakers & Artists</h1>
          <p className="mt-3 text-white/80">Meet some of the voices and performers shaping the festival (illustrative list).</p>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {people.map((p) => (
            <div key={p.name} className="card-mosaic p-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-primary)] flex items-center justify-center text-white text-xl font-bold mb-4">
                {p.name.split(" ").map(n => n[0]).join("")}
              </div>
              <h3 className="font-display text-xl font-semibold text-[var(--color-deep)]">{p.name}</h3>
              <p className="text-sm text-[var(--color-secondary)] font-medium mt-0.5">{p.role}</p>
              <p className="mt-2 text-sm text-[var(--color-deep)]/70">{p.focus}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-10 text-sm text-[var(--color-deep)]/50">Full lineup and bios will be updated in the admin dashboard closer to the event.</p>
      </section>
    </div>
  );
}
