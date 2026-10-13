import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import PrintObserver from "@/components/PrintObserver";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const description =
  "Plain-language facts about GLP-3 peptides like retatrutide: what they are, who shouldn't use them, how to use them safely, and what they cost in Houston.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.URL ?? "http://localhost:3000"),
  title: "Evolve Peptides | The facts about GLP-3s",
  description,
  openGraph: {
    title: "Evolve Peptides | The facts about GLP-3s",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#2fd3a0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        {children}
        <PrintObserver />
      </body>
    </html>
  );
}
