import { portfolioContent } from "@/content/portfolio";
import { useLocale } from "@/contexts/locale";
import { cn } from "@/lib/utils";
import { SectionShell } from "./SectionShell";

export function SkillsSection() {
  const { locale, dir } = useLocale();
  const t = (val: { en: string; ar: string }) => val[locale];

  return (
    <SectionShell id="skills">
      <div className={cn("flex items-end justify-between gap-6", dir === "rtl")}
      >
        <div className={cn(dir === "rtl" && "text-right")}>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{t(portfolioContent.skills.title)}</h2>
          <p className="mt-3 text-muted-foreground">
            {t({ en: "A focused stack built for real-world delivery.", ar: "Stack مُركّز للتسليم الحقيقي." })}
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {portfolioContent.skills.groups.map((group) => (
          <div key={group.title.en} className="rounded-3xl border border-border/60 bg-card/40 p-6 backdrop-blur">
            <div className={cn("text-sm font-medium", dir === "rtl" && "text-right")}>{t(group.title)}</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((it) => (
                <span key={it} className="rounded-full border border-border/70 bg-background/40 px-3 py-1 text-xs text-muted-foreground">
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
