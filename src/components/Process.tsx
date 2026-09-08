import { useTranslations } from "next-intl";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const STEP_KEYS = ["understand", "build", "evolve"] as const;

export default function Process() {
  const t = useTranslations("process");

  return (
    <section id="proceso" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("intro")}
      />

      <ol className="grid gap-5 md:grid-cols-3">
        {STEP_KEYS.map((key, i) => (
          <Reveal key={key} delay={i * 120}>
            <li className="h-full rounded-2xl border border-line bg-card p-7">
              <span className="text-sm font-bold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold leading-snug">
                {t(`steps.${key}.title`)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {t(`steps.${key}.description`)}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
