import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/ThemeProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' })

export const metadata: Metadata = {
  title: 'Vinod Yedla | Software Engineer',
  description: 'Backend Software Engineer with 4+ years of experience in Java, Spring Boot, and cloud-native architectures at Infosys.',
  keywords: ['Vinod Yedla', 'Software Engineer', 'Backend Developer', 'Java', 'Spring Boot', 'Portfolio'],
  authors: [{ name: 'Vinod Yedla' }],
  metadataBase: new URL('https://vinodyedla.vercel.app'),
  openGraph: {
    title: 'Vinod Yedla | Software Engineer',
    description: 'Backend Software Engineer — Java · Spring Boot · Cloud Native',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrains.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
