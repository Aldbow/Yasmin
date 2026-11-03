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
    "Aulia Yasmin, S.Tr.Sos. | Pekerja Sosial Tersertifikasi, CSR, Pemberdayaan Masyarakat & SDM",
  description:
    "Portofolio resmi Aulia Yasmin, S.Tr.Sos., Pekerja Sosial Tersertifikasi (LSP Kementerian Sosial RI Nomor: PS.G.1107-00-LSP.7-24). Berpengalaman dalam rehabilitasi sosial, pemberdayaan masyarakat, CSR, serta administrasi kelembagaan.",
  keywords: [
    "Aulia Yasmin",
    "S.Tr.Sos.",
    "Pekerja Sosial Tersertifikasi",
    "Licensed Certified Social Worker",
    "POLTEKESOS Bandung",
    "CSR",
    "Pemberdayaan Masyarakat",
    "Hubungan Kepegawaian",
    "Kemnaker RI",
    "BNN RI",
    "Kemensos RI",
  ],
  authors: [{ name: "Aulia Yasmin, S.Tr.Sos." }],
  openGraph: {
    title:
      "Aulia Yasmin, S.Tr.Sos. | Pekerja Sosial Tersertifikasi, CSR, Pemberdayaan Masyarakat & SDM",
    description:
      "Lulusan Sarjana Terapan Pekerjaan Sosial (S.Tr.Sos.) POLTEKESOS Bandung dan pemegang lisensi profesi nasional LSP Kementerian Sosial RI (PS.G.1107-00-LSP.7-24).",
    type: "website",
    locale: "id_ID",
    siteName: "Portofolio Aulia Yasmin",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Aulia Yasmin, S.Tr.Sos. | Pekerja Sosial Tersertifikasi, CSR, Pemberdayaan Masyarakat & SDM",
    description:
      "Pekerja Sosial Tersertifikasi (LSP Kementerian Sosial RI). Rehabilitasi Sosial, CSR, Pemberdayaan Masyarakat, serta Administrasi & Hubungan Kepegawaian.",
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
      className={`${jakarta.variable} ${instrument.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#FDF8FA] text-[#231118] antialiased"
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
