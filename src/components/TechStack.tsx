import Image from "next/image";
import { useTranslations } from "next-intl";
import { TECHNOLOGIES } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function TechStack() {
  const t = useTranslations("tech");

  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {TECHNOLOGIES.map((tech, i) => (
          <Reveal key={tech.id} delay={(i % 4) * 80}>
            <div className="flex h-24 items-center justify-center rounded-xl border border-line bg-card px-6">
              <Image
                src={tech.src}
                alt={tech.name}
                width={120}
                height={48}
                className="tech-logo h-10 w-auto max-w-full object-contain"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
