import { portfolioContent } from "@/content/portfolio";
import { useLocale } from "@/contexts/locale";
import { PortfolioNav } from "@/components/portfolio/PortfolioNav";
import { HeroSection } from "@/components/portfolio/sections/HeroSection";
import { AboutSection } from "@/components/portfolio/sections/AboutSection";
import { SkillsSection } from "@/components/portfolio/sections/SkillsSection";
import { ProjectsSection } from "@/components/portfolio/sections/ProjectsSection";
import { WhyHireMeSection } from "@/components/portfolio/sections/WhyHireMeSection";
import { ContactSection } from "@/components/portfolio/sections/ContactSection";
import { Footer } from "@/components/portfolio/sections/Footer";

export function PortfolioPage() {
  const { locale } = useLocale();
  const t = (val: { en: string; ar: string }) => val[locale];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ambient background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
        <div className="absolute -top-24 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-24 left-1/4 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-3xl" />
      </div>

      <PortfolioNav name={portfolioContent.name} />

      <main>
        <HeroSection headline={t(portfolioContent.hero.headline)} subhead={t(portfolioContent.hero.subhead)} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <WhyHireMeSection />
        <ContactSection />
      </main>
      <Footer
        text={t({ en: portfolioContent.footer.en, ar: portfolioContent.footer.ar })}
        githubUrl={portfolioContent.links.github}
        linkedinUrl={portfolioContent.links.linkedin}
        email={portfolioContent.links.email}
      />
    </div>
  );
}
