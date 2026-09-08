import { useTranslations } from "next-intl";
import Reveal from "./Reveal";

// TODO(kairox): confirmar cifras reales de años de trayectoria y proyectos
// entregados antes de publicar (hoy son estimaciones).
const STAT_KEYS = ["years", "projects", "clients", "team"] as const;

export default function Stats() {
  const t = useTranslations("stats");

  return (
    <section className="border-y border-line bg-navy/50">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-12 sm:grid-cols-4">
        {STAT_KEYS.map((key, i) => (
          <Reveal key={key} delay={i * 100} className="text-center">
            <p className="text-4xl font-bold text-accent sm:text-5xl">
              {t(`${key}.value`)}
            </p>
            <p className="mt-2 text-sm text-muted">{t(`${key}.label`)}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
