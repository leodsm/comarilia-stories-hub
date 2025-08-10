import StoryCard, { Story } from "@/components/StoryCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function CategorySection({ title, stories }: { title: string; stories: Story[] }) {
  const borderClass = (() => {
    switch (title) {
      case "Cidade":
        return "border-primary";
      case "Região":
        return "border-success";
      case "Cultura":
        return "border-accent";
      case "História":
        return "border-purple";
      default:
        return "border-primary";
    }
  })();

  return (
    <section className="container py-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className={cn("text-xl font-semibold border-l-4 pl-3", borderClass)}>{title}</h2>
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
