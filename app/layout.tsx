import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "OMNYGEN | Desenvolvimento de Sites e Aplicativos",
  description:
    "OMNYGEN: Especialistas em desenvolvimento de sites de alta performance e aplicativos mobile inovadores.",
  keywords: [
    "desenvolvimento web",
    "aplicativos",
    "apps",
    "sites",
    "UI/UX",
    "OMNYGEN",
    "landing page",
    "SEO",
    "mobile",
  ],
  authors: [{ name: "OMNYGEN" }],
  robots: { index: true, follow: true },
  icons: { icon: "/logo.jpg", apple: "/logo.jpg" },
  openGraph: {
    title: "OMNYGEN | Desenvolvimento de Sites e Aplicativos",
    description:
      "Engenharia de software premium, design de alta conversão e performance inigualável.",
    images: ["/logo.jpg"],
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0B1120",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} bg-omny-dark`}>
      <body className="relative overflow-x-hidden bg-omny-dark font-sans text-white antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
