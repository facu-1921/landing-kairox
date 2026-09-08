import Image from "next/image";
import { useTranslations } from "next-intl";
import { initials, TEAM } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Team() {
  const t = useTranslations("team");

  return (
    <section id="equipo" className="border-y border-line bg-navy/40 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <Reveal className="mb-14 grid gap-5 md:grid-cols-5">
          <div className="overflow-hidden rounded-2xl border border-line md:col-span-3">
            <Image
              src="/team/equipo-grupal.jpg"
              alt={t("groupPhotoAlt")}
              width={1200}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl border border-line md:col-span-2">
            <Image
              src="/team/equipo-trabajando.jpg"
              alt={t("workingPhotoAlt")}
              width={800}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {TEAM.map((member, i) => (
            <Reveal key={member.name} delay={(i % 4) * 80}>
              <div className="flex h-full items-center gap-3.5 rounded-xl border border-line bg-card p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-mid to-accent-deep text-sm font-bold text-pale">
                  {initials(member.name)}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">{member.name}</p>
                  <p className="text-xs text-muted">{t(`roles.${member.role}`)}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
