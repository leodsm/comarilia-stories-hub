import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("font-bold leading-none", className)}>
      <span className="text-primary">Com</span>
      <span className="text-accent">Marília</span>
      <span className="text-muted-foreground align-top text-xs">.com.br</span>
    </div>
  );
}
