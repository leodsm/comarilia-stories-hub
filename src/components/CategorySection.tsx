import StoryCard, { Story } from "@/components/StoryCard";
import { Button } from "@/components/ui/button";

export default function CategorySection({ title, stories }: { title: string; stories: Story[] }) {
  return (
    <section className="container py-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">{title}</h2>
        <Button variant="link">Ver mais</Button>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {stories.map((s) => (
          <StoryCard key={s.id} story={s} />
        ))}
      </div>
    </section>
  );
}
