export const metadata = { title: "Agenda | World Mosaic" };

const days = [
  {
    day: "Day 1",
    title: "Opening & Cultural Showcase",
    items: [
      { time: "09:00", title: "Registration & Welcome Tea", type: "General" },
      { time: "10:00", title: "Opening Ceremony & Keynote", type: "Main Stage" },
      { time: "11:30", title: "World Music Showcase – Set 1", type: "Performance" },
      { time: "13:00", title: "Global Food Village Lunch", type: "Food" },
      { time: "14:30", title: "Dance Traditions of Asia & Africa", type: "Performance" },
      { time: "16:00", title: "Craft Workshops (parallel)", type: "Workshop" },
      { time: "18:00", title: "Evening Cultural Parade", type: "Outdoor" },
    ],
  },
  {
    day: "Day 2",
    title: "Deep Dive & Closing",
    items: [
      { time: "09:30", title: "Morning Meditation & Story Circles", type: "Interactive" },
      { time: "11:00", title: "Panel: Heritage in the Modern World", type: "Talk" },
      { time: "12:30", title: "Culinary Demonstrations", type: "Food" },
      { time: "14:00", title: "Youth & Student Cultural Exchange", type: "Interactive" },
      { time: "16:00", title: "Grand Finale Performance", type: "Main Stage" },
      { time: "18:00", title: "Closing Ceremony & Networking", type: "General" },
    ],
  },
];

export default function AgendaPage() {
  return (
    <div>
      <section className="bg-[var(--color-deep)] text-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-3xl md:text-5xl font-bold">Event Agenda</h1>
          <p className="mt-3 text-white/80">A sample schedule — final timings will be published closer to the event.</p>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          {days.map((d) => (
            <div key={d.day}>
              <h2 className="font-display text-2xl font-bold text-[var(--color-deep)] mb-1">{d.day}</h2>
              <p className="text-[var(--color-secondary)] font-medium mb-6">{d.title}</p>
              <div className="space-y-3">
                {d.items.map((item) => (
                  <div key={item.time + item.title} className="card-mosaic flex flex-col sm:flex-row sm:items-center gap-3 p-4">
                    <div className="font-mono text-sm font-semibold text-[var(--color-secondary)] w-16 shrink-0">{item.time}</div>
                    <div className="flex-1 font-medium text-[var(--color-deep)]">{item.title}</div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-[var(--color-sand)] text-[var(--color-deep)]/70">{item.type}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
