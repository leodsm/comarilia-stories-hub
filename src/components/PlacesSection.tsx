import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

export type Place = {
  id: string;
  name: string;
  bairro: string;
  image: string;
};

export default function PlacesSection({ places }: { places: Place[] }) {
  return (
    <section className="container py-10">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold border-l-4 pl-3 border-success">Locais</h2>
        <Button variant="success" size="sm">Ver todos</Button>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {places.map((p) => (
          <article key={p.id} className="overflow-hidden rounded-lg border bg-card shadow-elevated-hover">
            <AspectRatio ratio={1/1}>
              <img src={p.image} alt={`${p.name} — ${p.bairro}`} loading="lazy" decoding="async" className="h-full w-full object-cover" />
            </AspectRatio>
            <div className="p-2">
              <h3 className="truncate text-sm font-medium">{p.name}</h3>
              <p className="text-xs text-muted-foreground">{p.bairro}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
