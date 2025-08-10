import story1 from "@/assets/story-1.webp";
import story2 from "@/assets/story-2.webp";
import story3 from "@/assets/story-3.webp";
import story4 from "@/assets/story-4.webp";
import place1 from "@/assets/place-1.webp";
import place2 from "@/assets/place-2.webp";
import place3 from "@/assets/place-3.webp";

export const stories = [
  { id: "s1", title: "Centro revitalizado recebe novo festival gastronômico", category: "Cidade", image: story1, date: "2025-08-10T10:00:00Z" },
  { id: "s2", title: "Região ganha rota ecológica para ciclistas", category: "Região", image: story2, date: "2025-08-09T15:00:00Z" },
  { id: "s3", title: "Marília celebra semana da cultura com shows gratuitos", category: "Cultura", image: story3, date: "2025-08-08T20:00:00Z" },
  { id: "s4", title: "Linha do tempo: a história ferroviária da cidade", category: "História", image: story4, date: "2025-08-07T09:00:00Z" },
];

export const byCategory = {
  Cidade: stories,
  Região: stories,
  Cultura: stories,
  História: stories,
};

export const places = [
  { id: "p1", name: "Parque do Bosque", bairro: "Centro", image: place1 },
  { id: "p2", name: "Mercadão Municipal", bairro: "Centro", image: place2 },
  { id: "p3", name: "Museu da Cidade", bairro: "Fragata", image: place3 },
];
