import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import StoryCard, { Story } from "@/components/StoryCard";

export default function HeroSection({ stories }: { stories: Story[] }) {
  const slides = stories.slice(0, 3);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoplayRef = useRef<number | null>(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const start = () => {
      stop();
      autoplayRef.current = window.setInterval(() => {
        emblaApi.scrollNext();
      }, 5000);
    };
    const stop = () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    };
    start();
    return stop;
  }, [emblaApi]);

  const badgeClass = (category: string) => {
    switch (category) {
      case "Cidade":
        return "bg-primary text-primary-foreground";
      case "Região":
        return "bg-success text-success-foreground";
      case "Cultura":
        return "bg-accent text-accent-foreground";
      case "História":
        return "bg-purple text-purple-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section className="container py-6">
      <div className="relative overflow-hidden rounded-xl">
        <div className="h-[70vh]" ref={emblaRef}>
          <div className="flex h-full">
            {slides.map((s) => (
              <article key={s.id} className="relative h-full min-w-0 flex-[0_0_100%]">
                <img src={s.image} alt={`${s.title} — ${s.category}`} className="h-full w-full object-cover" />
                <div className="pointer-events-none absolute inset-0 image-overlay-gradient" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <span className={`mb-3 inline-block rounded px-2 py-1 text-xs font-semibold ${badgeClass(s.category)}`}>{s.category}</span>
                  <h2 className="text-2xl font-bold md:text-4xl">{s.title}</h2>
                </div>
              </article>
            ))}
          </div>
        </div>
        <button aria-label="Anterior" onClick={scrollPrev} className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/30 p-2 text-white hover:bg-white/50">
          <ChevronLeft />
        </button>
        <button aria-label="Próximo" onClick={scrollNext} className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/30 p-2 text-white hover:bg-white/50">
          <ChevronRight />
        </button>
        <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2">
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-2 w-2 rounded-full ${selectedIndex === i ? "bg-white" : "bg-white/50"}`}
                aria-label={`Ir para slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
