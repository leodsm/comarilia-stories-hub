import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5514999999999"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center justify-center rounded-full border bg-background p-3 text-accent shadow-elevated-hover hover-scale"
    >
      <MessageCircle />
    </a>
  );
}
