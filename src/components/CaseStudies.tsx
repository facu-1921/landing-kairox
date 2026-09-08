import Image from "next/image";
import { useTranslations } from "next-intl";
import { CASES } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function CaseStudies() {
  const t = useTranslations("cases");

  return (
    <section id="casos" className="border-y border-line bg-navy/40 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {CASES.map((c, i) => (
            <Reveal key={c.id} delay={(i % 2) * 120}>
              <article className="flex h-full flex-col rounded-2xl border border-line bg-card p-8 transition-colors hover:border-accent-mid">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <Image
                    src={c.logo}
                    alt={t(`items.${c.id}.name`)}
                    width={150}
                    height={48}
                    className="h-9 w-auto"
                  />
                  <span className="shrink-0 rounded-full border border-line px-3 py-1 text-xs text-muted">
                    {t(`items.${c.id}.sector`)}
                  </span>
                </div>

                <dl className="flex flex-1 flex-col gap-5">
                  <div>
                    <dt className="mb-1 text-xs font-semibold uppercase tracking-widest text-accent">
                      {t("labels.challenge")}
                    </dt>
                    <dd className="text-sm leading-relaxed text-soft">
                      {t(`items.${c.id}.challenge`)}
                    </dd>
                  </div>
                  <div>
                    <dt className="mb-1 text-xs font-semibold uppercase tracking-widest text-accent">
                      {t("labels.solution")}
                    </dt>
                    <dd className="text-sm leading-relaxed text-soft">
                      {t(`items.${c.id}.solution`)}
                    </dd>
                  </div>
                  <div>
                    <dt className="mb-1 text-xs font-semibold uppercase tracking-widest text-accent">
                      {t("labels.result")}
                    </dt>
                    <dd className="text-sm leading-relaxed text-soft">
                      {t(`items.${c.id}.result`)}
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
                  {c.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-accent-deep/30 px-3 py-1 text-xs font-medium text-pale"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
