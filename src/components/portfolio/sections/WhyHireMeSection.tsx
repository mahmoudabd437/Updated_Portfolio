import { portfolioContent } from "@/content/portfolio";
import { useLocale } from "@/contexts/locale";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";
import { SectionShell } from "./SectionShell";

export function WhyHireMeSection() {
  const { locale, dir } = useLocale();
  const t = (val: { en: string; ar: string }) => val[locale];

  return (
    <SectionShell id="why">
      <div className={cn("grid gap-8 md:grid-cols-12", dir === "rtl" && "md:[direction:rtl]")}
      >
        <div className={cn("md:col-span-5", dir === "rtl" && "text-right")}
        >
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{t(portfolioContent.why.title)}</h2>
          <p className="mt-3 text-muted-foreground">
            {t({ en: "A simple promise: deliver quality, not noise.", ar: "وعد بسيط: جودة حقيقية بدون زحمة." })}
          </p>
        </div>

        <div className="md:col-span-7">
          <div className="grid gap-4 md:grid-cols-2">
            {portfolioContent.why.points.map((p, idx) => (
              <div key={idx} className="rounded-3xl border border-border/60 bg-card/40 p-6 backdrop-blur">
                <div className={cn("flex items-start gap-3", dir === "rtl" && "flex-row-reverse")}
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-muted-foreground" />
                  <div className={cn("text-sm text-foreground/90", dir === "rtl" && "text-right")}>{t(p)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
