import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-navy/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-2.5">
          <Image src="/kairox-mark.png" alt="" width={24} height={24} />
          <div>
            <p className="text-sm font-bold">Kairox</p>
            <p className="text-xs text-muted">{t("tagline")}</p>
          </div>
        </div>
        <p className="text-xs text-muted">
          © {year} Kairox. {t("rights")} · {t("madeIn")}
        </p>
      </div>
    </footer>
  );
}
