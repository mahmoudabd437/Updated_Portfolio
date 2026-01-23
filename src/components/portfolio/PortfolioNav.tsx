import { Button } from "@/components/ui/button";
import { useLocale } from "@/contexts/locale";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Globe, Moon, Sun } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type Props = {
  name: string;
};

const navItems = [
  { id: "about", en: "About", ar: "نبذة" },
  { id: "skills", en: "Skills", ar: "المهارات" },
  { id: "projects", en: "Projects", ar: "المشاريع" },
  { id: "why", en: "Why", ar: "ليه أنا" },
  { id: "contact", en: "Contact", ar: "تواصل" },
] as const;

export function PortfolioNav({ name }: Props) {
  const { locale, toggleLocale, dir } = useLocale();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const label = useMemo(() => (locale === "en" ? "AR" : "EN"), [locale]);
  const ThemeIcon = !mounted ? Moon : theme === "dark" ? Moon : Sun;

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50">
      <div className="container flex h-16 items-center justify-between">
        <a href="#top" className="group flex items-baseline gap-2">
          <span className="text-sm font-semibold tracking-wide text-foreground">{name}</span>
          <span className="text-xs text-muted-foreground">Full‑Stack</span>
          <span className="sr-only">Home</span>
        </a>

        <nav className={cn("hidden items-center gap-6 md:flex", dir === "rtl" && "flex-row-reverse")}
          aria-label={locale === "en" ? "Primary" : "الرئيسية"}
        >
          {navItems.map((it) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              className="story-link text-sm text-muted-foreground hover:text-foreground"
            >
              {locale === "en" ? it.en : it.ar}
            </a>
          ))}
        </nav>

        <div className={cn("flex items-center gap-2", dir === "rtl" && "flex-row-reverse")}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={locale === "en" ? "Toggle theme" : "تبديل الثيم"}
          >
            <ThemeIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            onClick={toggleLocale}
            className="gap-2"
            aria-label={locale === "en" ? "Switch language" : "تبديل اللغة"}
          >
            <Globe className="h-4 w-4" />
            <span className="text-xs font-medium">{label}</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
