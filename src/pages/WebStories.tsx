import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StoryCard, { Story } from "@/components/StoryCard";
import { stories as baseStories } from "@/data/mock";
import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";

const filters = ["Últimas", "Em alta", "Cidade", "Região", "Cultura", "História", "Esportes"] as const;

type Filter = typeof filters[number];

export default function WebStories() {
  const [active, setActive] = useState<Filter>("Últimas");
  const [page, setPage] = useState(1);

  const filtered = useMemo<Story[]>(() => {
    if (active === "Últimas" || active === "Em alta") return baseStories;
    return baseStories.filter((s) => s.category === active);
  }, [active]);

  const pageSize = 8;
  const visible = filtered.slice(0, page * pageSize);

  return (
    <>
      <Helmet>
        <title>Web Stories — ComMarília.com.br</title>
        <meta name="description" content="Web Stories 9:16 sobre Marília-SP e região: Cidade, Cultura, História e mais." />
        <link rel="canonical" href="https://commarilia.com.br/webstories" />
      </Helmet>
      <Header />
      <main className="container py-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {filters.map((f) => (
            <Button
              key={f}
              variant={active === f ? "default" : "pill"}
              size="sm"
              onClick={() => { setActive(f); setPage(1); }}
            >
              {f}
            </Button>
          ))}
        </div>

        <section aria-label="Lista de Web Stories">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {visible.map((s) => (
              <StoryCard key={s.id} story={s} />
            ))}
          </div>
          {visible.length < filtered.length && (
            <div className="mt-6 flex justify-center">
              <Button variant="hero" onClick={() => setPage((p) => p + 1)}>Carregar mais</Button>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
