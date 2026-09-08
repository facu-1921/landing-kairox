import { useTranslations } from "next-intl";
import { CONTACT } from "@/lib/data";
import Reveal from "./Reveal";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contacto" className="relative overflow-hidden border-t border-line">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 100%, rgba(112, 193, 245, 0.12), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            {t("eyebrow")}
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {t("subtitle")}
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
            >
              {t("ctaWhatsapp")}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="rounded-full border border-line px-7 py-3 text-sm font-semibold text-cloud transition-colors hover:border-accent hover:text-accent"
            >
              {t("ctaEmail")}
            </a>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mx-auto mt-14 grid max-w-3xl gap-4 text-center sm:grid-cols-3">
            <div className="rounded-xl border border-line bg-card p-5">
              <p className="text-xs uppercase tracking-widest text-muted">
                {t("emailLabel")}
              </p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="mt-1.5 block break-all text-sm font-medium text-pale hover:text-accent"
              >
                {CONTACT.email}
              </a>
            </div>
            <div className="rounded-xl border border-line bg-card p-5">
              <p className="text-xs uppercase tracking-widest text-muted">
                {t("whatsappLabel")}
              </p>
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 block text-sm font-medium text-pale hover:text-accent"
              >
                {CONTACT.phoneDisplay}
              </a>
            </div>
            <div className="rounded-xl border border-line bg-card p-5">
              <p className="text-xs uppercase tracking-widest text-muted">
                {t("locationLabel")}
              </p>
              <p className="mt-1.5 text-sm font-medium text-pale">
                {t("location")}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
