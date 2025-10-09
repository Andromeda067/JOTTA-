// app/layout.tsx (ou app/layout.jsx)
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Footer } from "@/components/footer"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Grupo Jotta de Autoescolas",
  description:
    "Grupo Jotta de Autoescolas - Formação completa para condutores com excelência e confiança. Matrículas abertas!",
    icons:{
      icon: '../app/GrupoJottaFav.ico',
    },
  generator: "Next.js + Vercel",
  keywords: [
    "Autoescola",
    "Grupo Jotta",
    "Carteira de motorista",
    "CNH",
    "Autoescola em Campo Grande",
    "Aulas de direção",
    "Primeira habilitação",
  ],
  authors: [{ name: "Grupo Jotta de Autoescolas", url: "https://grupojotta.com.br" }],
  creator: "Grupo Jotta",
  publisher: "Grupo Jotta",
  metadataBase: new URL("https://grupojotta.com.br"),
  openGraph: {
    title: "Grupo Jotta de Autoescolas",
    description:
      "A melhor opção para tirar sua CNH em Campo Grande e região. Aulas teóricas e práticas com instrutores experientes.",
    url: "https://grupojotta.com.br",
    siteName: "Grupo Jotta de Autoescolas",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grupo Jotta de Autoescolas",
    description:
      "Tire sua carteira de motorista com quem entende do assunto. Grupo Jotta: experiência, confiança e qualidade.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/GrupoJottaFav.ico" type="image/x-icon"/>
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Carregando...</div>}>
          <header>
          </header>
          <main>{children}</main>
          <Footer />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
