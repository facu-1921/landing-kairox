export const CONTACT = {
  email: "contacto@kairoxlab.com",
  phoneDisplay: "+54 9 2616 52-9534",
  whatsappUrl: "https://wa.me/5492616529534",
  location: "Mendoza, Argentina",
} as const;

export type ClientLogo = {
  id: string;
  name: string;
  src: string;
  /** Relative width of the logo inside the marquee, to balance visual weight */
  width: number;
};

export const CLIENTS: ClientLogo[] = [
  { id: "invertironline", name: "InvertirOnline", src: "/logos/clients/invertironline.png", width: 170 },
  { id: "rentennials", name: "Rentennials", src: "/logos/clients/rentennials.png", width: 170 },
  { id: "taker", name: "Taker", src: "/logos/clients/taker.png", width: 150 },
  { id: "sinustrack", name: "SinusTrack", src: "/logos/clients/sinustrack.png", width: 160 },
  { id: "linkcard", name: "Linkcard", src: "/logos/clients/linkcard.png", width: 150 },
  { id: "wispro", name: "Wispro", src: "/logos/clients/wispro.png", width: 140 },
  { id: "ohana", name: "Ohana", src: "/logos/clients/ohana.png", width: 130 },
  { id: "gieris", name: "Gieris", src: "/logos/clients/gieris.png", width: 140 },
  { id: "femmto", name: "Femmto", src: "/logos/clients/femmto.png", width: 140 },
  { id: "llt", name: "LLT", src: "/logos/clients/llt.png", width: 120 },
  { id: "pgic", name: "PGIC Comercial", src: "/logos/clients/pgic.png", width: 140 },
  { id: "grupo-barbagallo", name: "Grupo Barbagallo", src: "/logos/clients/grupo-barbagallo.png", width: 180 },
  { id: "bruno-brown", name: "Bruno Brown", src: "/logos/clients/bruno-brown.png", width: 130 },
  { id: "white-shark-coffee", name: "White Shark Coffee", src: "/logos/clients/white-shark-coffee.png", width: 140 },
  { id: "estudioplus", name: "estudioplus", src: "/logos/clients/estudioplus.png", width: 160 },
];

export type CaseId = "rentennials" | "taker" | "sinustrack" | "invertironline";

export type CaseStudy = {
  id: CaseId;
  logo: string;
  stack: string[];
};

export const CASES: CaseStudy[] = [
  {
    id: "rentennials",
    logo: "/logos/clients/rentennials.png",
    stack: ["Next.js", "Node.js", "AWS"],
  },
  {
    id: "taker",
    logo: "/logos/clients/taker.png",
    stack: ["Next.js", "Node.js", "AWS"],
  },
  {
    id: "sinustrack",
    logo: "/logos/clients/sinustrack.png",
    stack: ["Next.js", "Node.js", "WhatsApp API"],
  },
  {
    id: "invertironline",
    logo: "/logos/clients/invertironline.png",
    stack: ["React", "Node.js", "AWS"],
  },
];

export type RoleKey = "founder" | "backend" | "frontend" | "mobile" | "uxui";

export type TeamMember = {
  name: string;
  role: RoleKey;
};

// TODO(kairox): completar nombre de "Cufa" y apellido de "Milagros" cuando estén disponibles.
export const TEAM: TeamMember[] = [
  { name: "Rodrigo Perez", role: "founder" },
  { name: "Gerardo Stella", role: "founder" },
  { name: "Dario Angel Lopez", role: "backend" },
  { name: "Fer Potichkin", role: "backend" },
  { name: "Facundo Lopez", role: "backend" },
  { name: "Bruno Lucero", role: "backend" },
  { name: "Facundo Pacho", role: "backend" },
  { name: "Cufa", role: "backend" },
  { name: "Milagros", role: "uxui" },
  { name: "Bernardo Arce", role: "frontend" },
  { name: "Luciano Valenzuela", role: "frontend" },
  { name: "Matias Vazquez", role: "frontend" },
  { name: "Maximiliano Lovos", role: "mobile" },
  { name: "German Conil", role: "mobile" },
];

export type TechLogo = {
  id: string;
  name: string;
  src: string;
};

export const TECHNOLOGIES: TechLogo[] = [
  { id: "aws", name: "AWS", src: "/logos/tech/aws.png" },
  { id: "react", name: "React", src: "/logos/tech/react.png" },
  { id: "react-native", name: "React Native", src: "/logos/tech/react-native.png" },
  { id: "nodejs", name: "Node.js", src: "/logos/tech/nodejs.png" },
  { id: "go", name: "Go", src: "/logos/tech/go.png" },
  { id: "python", name: "Python", src: "/logos/tech/python.png" },
  { id: "docker", name: "Docker", src: "/logos/tech/docker.png" },
  { id: "n8n", name: "n8n", src: "/logos/tech/n8n.png" },
];

export function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
