import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

export type Story = {
  id: string;
  title: string;
  category: string;
  image: string;
  date?: string;
};

export default function StoryCard({ story, className }: { story: Story; className?: string }) {
  return (
    <article className={cn("group relative overflow-hidden rounded-lg border bg-card shadow-elevated-hover", className)}>
      <div className="absolute left-0 right-0 top-0 h-1 w-full bg-primary/20">
        <div className="h-full w-0 bg-primary transition-all duration-700 group-hover:w-full" />
      </div>
      <AspectRatio ratio={9/16}>
        <img
          src={story.image}
          alt={`${story.title} — ${story.category}`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 image-overlay-gradient" />
        <div className="absolute left-2 top-2">
          <Badge variant="secondary">{story.category}</Badge>
        </div>
        <h3 className="absolute bottom-2 left-2 right-2 text-base font-semibold leading-snug text-primary-foreground">
          {story.title}
        </h3>
      </AspectRatio>
    </article>
  );
}
