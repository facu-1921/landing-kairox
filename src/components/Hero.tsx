import { useTranslations } from "next-intl";
import LogoMarquee from "./LogoMarquee";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section id="inicio" className="relative overflow-hidden pt-16">
      {/* Glow de fondo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 0%, rgba(112, 193, 245, 0.14), transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 pb-16 pt-20 text-center sm:pt-28">
        <span className="mb-6 rounded-full border border-line bg-navy/60 px-4 py-1.5 text-xs font-medium tracking-wide text-accent">
          {t("badge")}
        </span>

        <h1 className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
          {t("title")}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {t("subtitle")}
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contacto"
            className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
          >
            {t("ctaPrimary")}
          </a>
          <a
            href="#casos"
            className="rounded-full border border-line px-7 py-3 text-sm font-semibold text-cloud transition-colors hover:border-accent hover:text-accent"
          >
            {t("ctaSecondary")}
          </a>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-16">
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted">
          {t("trustedBy")}
        </p>
        <LogoMarquee />
      </div>
    </section>
  );
}
