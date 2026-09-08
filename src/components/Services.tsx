import { useTranslations } from "next-intl";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const ICONS: Record<string, React.ReactNode> = {
  productDesign: (
    <path d="M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.586 7.586M11 11a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" />
  ),
  mobile: (
    <path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM12 18h.01" />
  ),
  web: (
    <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5zM3 9h18M8 6h.01M5.5 6h.01" />
  ),
  backend: (
    <path d="M4 4h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM4 14h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zM7 7h.01M7 17h.01" />
  ),
  infra: (
    <path d="M17.5 19a4.5 4.5 0 0 0 .42-8.98 7 7 0 0 0-13.6 1.75A4 4 0 0 0 6 19h11.5z" />
  ),
};

const SERVICE_KEYS = [
  "productDesign",
  "mobile",
  "web",
  "backend",
  "infra",
] as const;

export default function Services() {
  const t = useTranslations("services");

  return (
    <section id="servicios" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICE_KEYS.map((key, i) => (
          <Reveal key={key} delay={(i % 3) * 100}>
            <article className="group h-full rounded-2xl border border-line bg-card p-7 transition-colors hover:border-accent-mid">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-deep/40 text-accent">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5.5 w-5.5"
                >
                  {ICONS[key]}
                </svg>
              </div>
              <h3 className="text-lg font-semibold">{t(`items.${key}.title`)}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {t(`items.${key}.description`)}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
