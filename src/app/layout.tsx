import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://danielemioranza.com"
  ),
  title: "Daniele Mioranza | Modelo",
  description: "Portfolio de Daniele Mioranza — modelo, desfiles e campanhas publicitárias.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
