import { portfolioContent } from "@/content/portfolio";
import { useLocale } from "@/contexts/locale";
import { cn } from "@/lib/utils";
import { SectionShell } from "./SectionShell";

export function AboutSection() {
  const { locale, dir } = useLocale();
  const t = (val: { en: string; ar: string }) => val[locale];

  return (
    <SectionShell id="about">
      <div className={cn("grid gap-8 md:grid-cols-12", dir === "rtl" && "md:[direction:rtl]")}
      >
        <div className={cn("md:col-span-5", dir === "rtl" && "text-right")}
        >
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{t(portfolioContent.about.title)}</h2>
          <p className="mt-4 text-muted-foreground">{t({ en: "A bit of story — and how I think.", ar: "حكاية صغيرة — وطريقة تفكيري." })}</p>
        </div>

        <div className="md:col-span-7">
          <div className="rounded-3xl border border-border/60 bg-card/40 p-6 backdrop-blur">
            <p className={cn("text-pretty text-base leading-relaxed text-foreground/90", dir === "rtl" && "text-right")}
            >
              {t(portfolioContent.about.story)}
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {portfolioContent.about.timeline.map((item) => (
                <div key={item.year} className="rounded-2xl border border-border/60 bg-background/40 p-4">
                  <div className="text-xs text-muted-foreground">{item.year}</div>
                  <div className={cn("mt-2 text-sm", dir === "rtl" && "text-right")}>{locale === "en" ? item.en : item.ar}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
