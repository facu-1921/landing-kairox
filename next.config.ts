import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // Static export: sin servidor Node ni edge functions.
  // El sitio se sirve como HTML/CSS/JS puro desde la CDN de Netlify.
  output: "export",
  // Emite /es/index.html en vez de /es.html — evita 404 en hosts estaticos.
  trailingSlash: true,
  // El optimizador de imagenes de Next requiere servidor; en export no existe.
  images: { unoptimized: true },
};

export default withNextIntl(nextConfig);
