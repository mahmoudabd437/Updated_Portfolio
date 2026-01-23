import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLocale } from "@/contexts/locale";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SectionShell } from "./SectionShell";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(5).max(1000),
});

type FormValues = z.infer<typeof schema>;

function getEmailJsConfig() {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;
  return { serviceId, templateId, publicKey };
}

export function ContactSection() {
  const { locale, dir } = useLocale();
  const { toast } = useToast();

  const t = (val: { en: string; ar: string }) => val[locale];
  const labels = useMemo(
    () => ({
      title: t({ en: "Contact", ar: "تواصل" }),
      subtitle: t({ en: "Tell me about your project — I’ll reply fast.", ar: "احكيلي عن مشروعك — وهرد بسرعة." }),
      name: t({ en: "Name", ar: "الاسم" }),
      email: t({ en: "Email", ar: "الإيميل" }),
      message: t({ en: "Message", ar: "الرسالة" }),
      send: t({ en: "Send", ar: "إرسال" }),
    }),
    [locale],
  );

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", message: "" },
    mode: "onTouched",
  });

  async function onSubmit(values: FormValues) {
    const { serviceId, templateId, publicKey } = getEmailJsConfig();
    if (!serviceId || !templateId || !publicKey) {
      toast({
        title: t({ en: "EmailJS not configured", ar: "EmailJS غير مُجهز" }),
        description: t({
          en: "Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY.",
          ar: "أضف VITE_EMAILJS_SERVICE_ID وVITE_EMAILJS_TEMPLATE_ID وVITE_EMAILJS_PUBLIC_KEY.",
        }),
        variant: "destructive",
      });
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: values.name,
          reply_to: values.email,
          message: values.message,
        },
        { publicKey },
      );

      toast({
        title: t({ en: "Message sent", ar: "تم الإرسال" }),
        description: t({ en: "Thanks! I’ll get back to you shortly.", ar: "شكرًا! هرد عليك قريب." }),
      });
      form.reset();
    } catch {
      toast({
        title: t({ en: "Failed to send", ar: "فشل الإرسال" }),
        description: t({
          en: "Please try again or reach me via LinkedIn/GitHub.",
          ar: "جرّب تاني أو تواصل عبر لينكدإن/جيتهاب.",
        }),
        variant: "destructive",
      });
    }
  }

  return (
    <SectionShell id="contact">
      <div className={cn("grid gap-10 md:grid-cols-12", dir === "rtl" && "md:[direction:rtl]")}
      >
        <div className={cn("md:col-span-5", dir === "rtl" && "text-right")}
        >
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{labels.title}</h2>
          <p className="mt-3 text-muted-foreground">{labels.subtitle}</p>
          <p className="mt-6 text-sm text-muted-foreground">
            {t({
              en: "Tip: Add project screenshots later to make the showcase feel even more premium.",
              ar: "معلومة: لما تضيف صور المشاريع هتطلع الـ Showcase Premium أكتر.",
            })}
          </p>
        </div>

        <div className="md:col-span-7">
          <form onSubmit={form.handleSubmit(onSubmit)} className="rounded-3xl border border-border/60 bg-card/40 p-6 backdrop-blur">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <label className={cn("text-sm", dir === "rtl" && "text-right")}>{labels.name}</label>
                <Input {...form.register("name")} placeholder={t({ en: "Your name", ar: "اسمك" })} />
                {form.formState.errors.name?.message && (
                  <p className={cn("text-xs text-muted-foreground", dir === "rtl" && "text-right")}>{form.formState.errors.name.message}</p>
                )}
              </div>
              <div className="grid gap-2">
                <label className={cn("text-sm", dir === "rtl" && "text-right")}>{labels.email}</label>
                <Input {...form.register("email")} placeholder={t({ en: "you@email.com", ar: "you@email.com" })} />
                {form.formState.errors.email?.message && (
                  <p className={cn("text-xs text-muted-foreground", dir === "rtl" && "text-right")}>{form.formState.errors.email.message}</p>
                )}
              </div>
              <div className="grid gap-2">
                <label className={cn("text-sm", dir === "rtl" && "text-right")}>{labels.message}</label>
                <Textarea
                  {...form.register("message")}
                  rows={6}
                  placeholder={t({ en: "What are you building?", ar: "بتبني إيه؟" })}
                />
                {form.formState.errors.message?.message && (
                  <p className={cn("text-xs text-muted-foreground", dir === "rtl" && "text-right")}>{form.formState.errors.message.message}</p>
                )}
              </div>

              <div className={cn("flex items-center justify-end", dir === "rtl" && "justify-start")}
              >
                <Button type="submit" className="gap-2 hover-scale" disabled={form.formState.isSubmitting}>
                  <Send className="h-4 w-4" />
                  {labels.send}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </SectionShell>
  );
}
