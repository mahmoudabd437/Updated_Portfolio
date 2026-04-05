import { useLocale } from "@/contexts/locale";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "201128019635";

export function WhatsAppButton() {
  const { locale } = useLocale();
  const label = locale === "ar" ? "تواصل واتساب" : "Chat on WhatsApp";
  const url = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-border/60 bg-card/80 text-foreground shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground hover:shadow-xl active:scale-95"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
