import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5514999999999"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center justify-center rounded-full bg-success text-success-foreground p-3 shadow-elevated-hover hover:bg-success/90 hover-scale"
    >
      <MessageCircle />
    </a>
  );
}
