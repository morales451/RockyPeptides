import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rocky Peptides | Understanding GLP-3 Peptides",
  description:
    "An educational resource for understanding GLP-3 peptides like retatrutide. Get the facts, debunk the myths, and learn the science in plain language.",
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
