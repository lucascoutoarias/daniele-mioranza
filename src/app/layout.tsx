import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
