import StoryCard, { Story } from "@/components/StoryCard";

export default function HeroSection({ stories }: { stories: Story[] }) {
  const [main, ...side] = stories;
  return (
    <section className="container py-6">
      <div className="grid gap-4 md:grid-cols-3">
        {main && (
          <div className="md:col-span-2">
            <StoryCard story={main} className="h-full" />
          </div>
        )}
        <div className="grid gap-4">
          {side.slice(0, 2).map((s) => (
            <StoryCard key={s.id} story={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
