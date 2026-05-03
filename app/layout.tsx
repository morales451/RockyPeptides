import type { Metadata } from "next";
import "./globals.css";
import ExitIntent from "@/components/ExitIntent";

export const metadata: Metadata = {
  title: "Evolve Peptides | Understanding GLP-3 Peptides",
  description:
    "An educational resource for understanding GLP-3 peptides like retatrutide. Get the facts, debunk the myths, and learn the science in plain language.",
  icons: {
    icon: "/Gemini_Generated_Image_u6pjcwu6pjcwu6pj.png",
    apple: "/Gemini_Generated_Image_u6pjcwu6pjcwu6pj.png",
  },
  openGraph: {
    title: "Evolve Peptides | Understanding GLP-3 Peptides",
    description:
      "An educational resource for understanding GLP-3 peptides like retatrutide. Get the facts, debunk the myths, and learn the science in plain language.",
    images: [{ url: "/Gemini_Generated_Image_u6pjcwu6pjcwu6pj.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        {children}
        <ExitIntent />
      </body>
    </html>
  );
}
