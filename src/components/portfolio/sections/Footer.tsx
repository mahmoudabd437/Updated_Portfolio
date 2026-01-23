import { useLocale } from "@/contexts/locale";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer({
  text,
  githubUrl,
  linkedinUrl,
  email,
}: {
  text: string;
  githubUrl: string;
  linkedinUrl: string;
  email: string;
}) {
  const { locale, dir } = useLocale();
  return (
    <footer className="border-t border-border/60 py-10">
      <div className={cn("container flex flex-col gap-4 md:flex-row md:items-center md:justify-between", dir === "rtl" && "md:flex-row-reverse")}
      >
        <div className={cn("text-sm text-muted-foreground", dir === "rtl" && "text-right")}>{text}</div>
        <div className={cn("flex flex-wrap items-center gap-4", dir === "rtl" && "flex-row-reverse")}>
          <a
            className="story-link text-sm text-muted-foreground hover:text-foreground"
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <span className="inline-flex items-center gap-2">
              <Github className="h-4 w-4" />
              GitHub
            </span>
          </a>
          <a
            className="story-link text-sm text-muted-foreground hover:text-foreground"
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <span className="inline-flex items-center gap-2">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </span>
          </a>
          <a className="story-link text-sm text-muted-foreground hover:text-foreground" href={`mailto:${email}`} aria-label={locale === "en" ? "Email" : "إيميل"}>
            <span className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4" />
              {locale === "en" ? "Email" : "إيميل"}
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
