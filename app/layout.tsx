import type { Metadata, Viewport } from "next";
import { DEMO_MODE, studio } from "@/content/site";
import "./globals.css";

const title = DEMO_MODE
  ? `${studio.handle} — conceito de site (proposta)`
  : `${studio.handle} — ${studio.tagline}`;

export const metadata: Metadata = {
  title,
  description: `${studio.tagline}. Veja trabalhos, encontre o endereço e converse com o ${studio.displayName}.`,
  robots: DEMO_MODE ? { index: false, follow: false } : undefined,
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
