import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Arch Studio multi-page website',
  description: 'www.frontendmentor.io/challenges/arch-studio-multipage-website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-screen h-screen">
      <body className={`${inter.className} w-full h-full`}>{children}</body>
    </html>
  )
}
