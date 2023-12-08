import '../../Styles/globals.css'
import { Inter } from 'next/font/google'
// import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Sanket's resume",
  description: "Sanket's resume",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
