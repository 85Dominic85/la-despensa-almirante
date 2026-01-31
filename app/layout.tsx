import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'La Despensa del Almirante | Productos Gourmet de Cádiz',
  description: 'Aceite de oliva ecológico, conservas artesanales y sal marina de la Bahía de Cádiz para tiendas gourmet. Donde la tradición y la calidad navegan juntas.',
  keywords: 'productos gourmet, Cádiz, aceite de oliva, caballas, sal marina, productos artesanales',
  openGraph: {
    title: 'La Despensa del Almirante',
    description: 'Productos gourmet artesanales de Cádiz',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-inter antialiased">{children}</body>
    </html>
  )
}
