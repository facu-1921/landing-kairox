"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";

const SECTIONS = [
  { id: "servicios", key: "services" },
  { id: "casos", key: "cases" },
  { id: "proceso", key: "process" },
  { id: "equipo", key: "team" },
  { id: "contacto", key: "contact" },
] as const;

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const otherLocale = locale === "es" ? "en" : "es";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-line bg-ink/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#inicio" className="flex items-center gap-2.5">
          <Image
            src="/kairox-mark.png"
            alt=""
            width={28}
            height={28}
            priority
          />
          <span className="text-lg font-bold tracking-tight">Kairox</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-sm text-soft transition-colors hover:text-cloud"
            >
              {t(s.key)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={pathname}
            locale={otherLocale}
            className="rounded-full border border-line px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-soft transition-colors hover:border-accent hover:text-accent"
          >
            {otherLocale}
          </Link>
          <a
            href="#contacto"
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-ink transition-opacity hover:opacity-90 md:block"
          >
            {t("cta")}
          </a>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`h-0.5 w-5 bg-cloud transition-transform ${open ? "translate-y-1 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-5 bg-cloud transition-transform ${open ? "-translate-y-1 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-ink/95 px-5 py-4 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="text-sm text-soft"
              >
                {t(s.key)}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="rounded-full bg-accent px-4 py-2 text-center text-sm font-semibold text-ink"
            >
              {t("cta")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
