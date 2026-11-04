import Link from "next/link";
import { Globe, Heart, Users, Award } from "lucide-react";

export const metadata = {
  title: "About | World Mosaic",
  description: "Learn about World Mosaic – the international multicultural festival.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="bg-[var(--color-deep)] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            About World Mosaic
          </h1>
          <p className="mt-4 text-xl text-white/80">
            One World. Many Cultures. One Celebration.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="prose prose-lg max-w-none text-[var(--color-deep)]/80">
            <p className="text-xl leading-relaxed">
              World Mosaic is a two-day international multicultural festival
              designed to bring people together to experience the richness of
              cultures from around the world through traditional performances,
              music, dance, food, art, crafts, exhibitions and interactive
              activities.
            </p>
            <p className="mt-6 leading-relaxed">
              In a time when understanding and celebrating diversity has never
              been more important, World Mosaic creates a vibrant space where
              communities share their heritage, artists showcase their craft,
              and visitors discover new flavours, rhythms and stories.
            </p>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 gap-8">
            {[
              {
                icon: Globe,
                title: "Global Voices",
                text: "Artists, chefs, storytellers and cultural ambassadors from dozens of countries and communities.",
              },
              {
                icon: Heart,
                title: "Shared Humanity",
                text: "Beyond performance – conversations, workshops and experiences that build empathy and connection.",
              },
              {
                icon: Users,
                title: "For Everyone",
                text: "Families, students, professionals and culture lovers of all ages are welcome.",
              },
              {
                icon: Award,
                title: "Quality & Care",
                text: "Curated programming, thoughtful production and a welcoming atmosphere for all participants.",
              },
            ].map((item) => (
              <div key={item.title} className="card-mosaic p-6">
                <item.icon className="w-8 h-8 text-[var(--color-secondary)] mb-3" />
                <h3 className="font-display text-xl font-semibold text-[var(--color-deep)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-deep)]/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/registration" className="btn-primary">
              Join the Celebration
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
