import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import StoryCard, { Story } from "@/components/StoryCard";

export default function StoryCarousel({ stories }: { stories: Story[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", dragFree: true });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="container py-4">
      <div className="relative" ref={emblaRef}>
        <div className="flex gap-4">
          {stories.map((s) => (
            <div key={s.id} className="min-w-[180px] max-w-[220px] flex-[0_0_42%] sm:flex-[0_0_240px]">
              <StoryCard story={s} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 hidden justify-end gap-2 md:flex">
        <button aria-label="Anterior" onClick={scrollPrev} className="rounded-md border p-2 hover:bg-accent/10">
          <ChevronLeft />
        </button>
        <button aria-label="Próximo" onClick={scrollNext} className="rounded-md border p-2 hover:bg-accent/10">
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
