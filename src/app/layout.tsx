import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Instrument_Serif,
  Inter,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Aulia Yasmin, S.Tr.Sos. — Licensed Social Worker | CSR, Community Development & HR Professional",
  description:
    "Personal Branding & Interactive Portfolio of Aulia Yasmin, S.Tr.Sos., Licensed Certified Social Worker (Kemensos RI ID: PS.G.1107-00-LSP.7-24). Bridging Human-Centered Empathy with Strategic CSR, Community Development, Counseling, and People Management.",
  keywords: [
    "Aulia Yasmin",
    "S.Tr.Sos.",
    "Licensed Certified Social Worker",
    "POLTEKESOS Bandung",
    "CSR",
    "Community Development",
    "Human Resources",
    "Employee Relations",
    "Counselor",
    "Kemnaker RI",
    "BNN RI",
    "Kemensos RI",
  ],
  authors: [{ name: "Aulia Yasmin, S.Tr.Sos." }],
  openGraph: {
    title:
      "Aulia Yasmin, S.Tr.Sos. — Licensed Social Worker | CSR, Community Development & HR Professional",
    description:
      "Bridging Human-Centered Empathy with Strategic CSR, Community Development, and People Management. Licensed Certified Social Worker — Kemensos RI (ID: PS.G.1107-00-LSP.7-24).",
    type: "website",
    locale: "id_ID",
    siteName: "Aulia Yasmin Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Aulia Yasmin, S.Tr.Sos. — Licensed Social Worker | CSR, Community Development & HR",
    description:
      "Licensed Certified Social Worker (Kemensos RI). Counselor │ CSR │ Community Development │ Human-Centered HR & Management.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${jakarta.variable} ${instrument.variable} ${inter.variable} ${jetbrains.variable} dark`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#0B111E] text-[#F8FAFC] antialiased"
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
