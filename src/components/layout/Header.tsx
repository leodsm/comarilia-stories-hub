import { Link, NavLink } from "react-router-dom";
import { Search, BookOpenText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Logo from "@/components/Logo";

const navItems = [
  { to: "/", label: "Início" },
  { to: "/cidade", label: "Cidade" },
  { to: "/regiao", label: "Região" },
  { to: "/cultura", label: "Cultura" },
  { to: "/historia", label: "História" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" aria-label="ComMarília Home" className="flex items-center gap-3">
          <Logo className="text-xl sm:text-2xl font-bold" />
        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="Menu principal">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium story-link",
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Buscar">
            <Search />
          </Button>
          <Button asChild variant="pill" className="hidden sm:inline-flex">
            <Link to="/webstories" aria-label="Web Stories">
              <BookOpenText className="mr-2" /> Web Stories
            </Link>
          </Button>
        </div>
      </div>

      <div className="md:hidden border-t">
        <nav className="container flex items-center gap-4 overflow-x-auto py-2" aria-label="Menu principal mobile">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "whitespace-nowrap text-sm font-medium",
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button asChild variant="pill" size="sm" className="ml-auto">
            <Link to="/webstories">
              <BookOpenText className="mr-2" /> Web Stories
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
