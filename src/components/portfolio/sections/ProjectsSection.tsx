import { Button } from "@/components/ui/button";
import { portfolioContent } from "@/content/portfolio";
import { useLocale } from "@/contexts/locale";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import { SectionShell } from "./SectionShell";

export function ProjectsSection() {
  const { locale, dir } = useLocale();
  const t = (val: { en: string; ar: string }) => val[locale];

  return (
    <SectionShell id="projects">
      <div className={cn("flex items-end justify-between gap-6", dir === "rtl" && "flex-row-reverse")}
      >
        <div className={cn(dir === "rtl" && "text-right")}>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{t(portfolioContent.projects.title)}</h2>
          <p className="mt-3 text-muted-foreground">
            {t({ en: "Problem → Solution → Result. Skimmable and outcome-driven.", ar: "مشكلة → حل → نتيجة. بشكل سريع وواضح." })}
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {portfolioContent.projects.items.map((p) => (
          <article key={p.id} className="group overflow-hidden rounded-3xl border border-border/60 bg-card/40 backdrop-blur">
            <div className="aspect-[16/9] bg-muted/30">
              {p.imageUrl ? (
                <img src={p.imageUrl} alt={locale === "en" ? `${p.title.en} screenshot` : `صورة مشروع ${p.title.ar}`} className="h-full w-full object-fill" loading="lazy" />
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                  {locale === "en" ? "Upload project screenshot" : "ارفع صورة للمشروع"}
                </div>
              )}
            </div>

            <div className="p-6">
              <div className={cn("flex items-start justify-between gap-6", dir === "rtl" && "flex-row-reverse")}
              >
                <div className={cn("min-w-0", dir === "rtl" && "text-right")}>
                  <h3 className="truncate text-lg font-semibold tracking-tight">{t(p.title)}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{t(p.description)}</p>
                </div>

                <div className={cn("flex shrink-0 items-center gap-2", dir === "rtl" && "flex-row-reverse")}
                >
                  {p.githubUrl && (
                    <Button asChild variant="secondary" size="icon" className="hover-scale" aria-label="GitHub">
                      <a href={p.githubUrl} target="_blank" rel="noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {p.liveUrl && (
                    <Button asChild size="icon" className="hover-scale" aria-label="Live demo">
                      <a href={p.liveUrl} target="_blank" rel="noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <div className={cn("mt-5 grid gap-3 rounded-2xl border border-border/60 bg-background/40 p-4", dir === "rtl" && "text-right")}
              >
                <div>
                  <div className="text-xs font-medium text-foreground/80">{locale === "en" ? "Problem" : "المشكلة"}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{t(p.problem)}</div>
                </div>
                <div>
                  <div className="text-xs font-medium text-foreground/80">{locale === "en" ? "Solution" : "الحل"}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{t(p.solution)}</div>
                </div>
                <div>
                  <div className="text-xs font-medium text-foreground/80">{locale === "en" ? "Result" : "النتيجة"}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{t(p.result)}</div>
                </div>
              </div>

              <div className={cn("mt-5 flex flex-wrap gap-2", dir === "rtl" && "justify-end")}
              >
                {p.stack.map((it) => (
                  <span key={it} className="rounded-full border border-border/70 bg-background/40 px-3 py-1 text-xs text-muted-foreground">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
