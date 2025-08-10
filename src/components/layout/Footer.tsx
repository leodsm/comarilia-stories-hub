import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function Footer() {
  const { toast } = useToast();

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Inscrito!", description: "Você receberá novidades em breve." });
  };

  return (
    <footer className="border-t mt-16">
      <div className="container grid gap-10 py-12 md:grid-cols-4">
        <div>
          <h3 className="text-lg font-semibold mb-3">ComMarília</h3>
          <p className="text-sm text-muted-foreground">
            Notícias locais de Marília-SP e região. Cultura, história e o melhor da cidade.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Menu</h4>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:text-foreground text-muted-foreground" to="/">Início</Link></li>
            <li><Link className="hover:text-foreground text-muted-foreground" to="/webstories">Web Stories</Link></li>
            <li><Link className="hover:text-foreground text-muted-foreground" to="/cultura">Cultura</Link></li>
            <li><Link className="hover:text-foreground text-muted-foreground" to="/historia">História</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Siga</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground">Instagram</a></li>
            <li><a href="#" className="hover:text-foreground">Facebook</a></li>
            <li><a href="#" className="hover:text-foreground">YouTube</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Newsletter</h4>
          <form onSubmit={onSubscribe} className="flex gap-2">
            <Input type="email" required placeholder="Seu e-mail" aria-label="Seu e-mail" />
            <Button type="submit" variant="hero">Assinar</Button>
          </form>
          <p className="text-xs text-muted-foreground mt-2">Sem spam. Cancele quando quiser.</p>
        </div>
      </div>
      <div className="border-t py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} ComMarília.com.br — Todos os direitos reservados.
      </div>
    </footer>
  );
}
