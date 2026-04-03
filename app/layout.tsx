import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Evolve Peptides | Understanding GLP-3 Peptides",
  description:
    "An educational resource for understanding GLP-3 peptides like retatrutide. Get the facts, debunk the myths, and learn the science in plain language.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Evolve Peptides | Understanding GLP-3 Peptides",
    description:
      "An educational resource for understanding GLP-3 peptides like retatrutide. Get the facts, debunk the myths, and learn the science in plain language.",
    images: [{ url: "/logo.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
