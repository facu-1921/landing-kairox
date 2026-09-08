import Image from "next/image";
import { CLIENTS } from "@/lib/data";

export default function LogoMarquee() {
  return (
    <div className="marquee-mask overflow-hidden">
      <div className="animate-marquee flex w-max items-center gap-14">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="flex items-center gap-14"
          >
            {CLIENTS.map((client) => (
              <Image
                key={`${copy}-${client.id}`}
                src={client.src}
                alt={copy === 0 ? client.name : ""}
                width={client.width}
                height={60}
                className="h-10 w-auto opacity-70 transition-opacity hover:opacity-100 sm:h-12"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
