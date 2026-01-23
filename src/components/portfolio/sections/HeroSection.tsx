import { Button } from "@/components/ui/button";
import { useLocale } from "@/contexts/locale";
import { cn } from "@/lib/utils";
import { Code2, Layers3, Server } from "lucide-react";

type Props = {
  headline: string;
  subhead: string;
};

export function HeroSection({ headline, subhead }: Props) {
  const { locale, dir } = useLocale();

  return (
    <section id="top" className="pt-16">
      <div className="container py-16 md:py-24">
        <div className={cn("grid items-center gap-10 md:grid-cols-12", dir === "rtl" && "md:[direction:rtl]")}
        >
          <div className={cn("md:col-span-7", dir === "rtl" && "text-right")}
          >
            <h1 className="animate-fade-in text-balance text-4xl font-semibold tracking-tight md:text-6xl">
              {headline}
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
              {subhead}
            </p>

            <div className={cn("mt-8 flex flex-wrap items-center gap-3", dir === "rtl" && "justify-end")}
            >
              <Button asChild className="hover-scale">
                <a href="#projects">{locale === "en" ? "View My Work" : "شوف شغلي"}</a>
              </Button>
              <Button asChild variant="secondary" className="hover-scale">
                <a href="#contact">{locale === "en" ? "Contact Me" : "تواصل معايا"}</a>
              </Button>
            </div>

            <div className={cn("mt-10 flex flex-wrap items-center gap-2", dir === "rtl" && "justify-end")}
            >
              <span className="rounded-full border border-border/70 bg-card/50 px-3 py-1 text-xs text-muted-foreground">JS</span>
              <span className="rounded-full border border-border/70 bg-card/50 px-3 py-1 text-xs text-muted-foreground">React</span>
              <span className="rounded-full border border-border/70 bg-card/50 px-3 py-1 text-xs text-muted-foreground">Django</span>
              <span className="rounded-full border border-border/70 bg-card/50 px-3 py-1 text-xs text-muted-foreground">Python</span>
              <span className="rounded-full border border-border/70 bg-card/50 px-3 py-1 text-xs text-muted-foreground">Bootstrap</span>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/10 to-background blur-xl" />
              <div className="relative rounded-3xl border border-border/60 bg-card/40 p-6 backdrop-blur">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">{locale === "en" ? "Core Focus" : "التركيز"}</div>
                  <div className="text-xs text-muted-foreground">{locale === "en" ? "Scalable, clean, fast" : "نظيف، سريع، قابل للتوسع"}</div>
                </div>
                <div className="mt-6 grid gap-4">
                  <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/40 p-4">
                    <Layers3 className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <div className="text-sm font-medium">{locale === "en" ? "Frontend Craft" : "واجهة"}</div>
                      <div className="text-xs text-muted-foreground">{locale === "en" ? "UX-first React interfaces" : "واجهات React بتركيز UX"}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/40 p-4">
                    <Server className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <div className="text-sm font-medium">{locale === "en" ? "Backend Systems" : "خلفية"}</div>
                      <div className="text-xs text-muted-foreground">{locale === "en" ? "Python APIs that scale" : "APIs بايثون قابلة للتوسع"}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/40 p-4">
                    <Code2 className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <div className="text-sm font-medium">{locale === "en" ? "Clean Architecture" : "معمارية"}</div>
                      <div className="text-xs text-muted-foreground">{locale === "en" ? "Maintainable by design" : "سهل الصيانة من الأساس"}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
