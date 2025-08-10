import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StoryCarousel from "@/components/StoryCarousel";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import PlacesSection from "@/components/PlacesSection";
import { stories, byCategory, places } from "@/data/mock";
import { Helmet } from "react-helmet-async";

export default function Index() {
  return (
    <>
      <Helmet>
        <title>ComMarília.com.br — Notícias, Web Stories e Locais</title>
        <meta name="description" content="Notícias locais de Marília-SP e região. Web Stories 9:16, cultura e história com foco mobile-first." />
        <link rel="canonical" href="https://commarilia.com.br/" />
      </Helmet>
      <Header />
      <main>
        <h1 className="sr-only">ComMarília — Notícias e Web Stories de Marília-SP</h1>
        <section aria-label="Stories">
          <StoryCarousel stories={stories} />
        </section>
        <HeroSection stories={stories} />
        <CategorySection title="Cidade" stories={byCategory.Cidade} />
        <CategorySection title="Região" stories={byCategory.Região} />
        <CategorySection title="Cultura" stories={byCategory.Cultura} />
        <CategorySection title="História" stories={byCategory.História} />
        <PlacesSection places={places} />
      </main>
      <Footer />
    </>
  );
}
