import { cn } from "@/lib/utils";

export function SectionShell({
  id,
  children,
  className,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-10 md:py-12", className)}>
      <div className="container">{children}</div>
    </section>
  );
}
