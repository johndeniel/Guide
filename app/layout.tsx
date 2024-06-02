import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://fourteen-xiv.vercel.app'),
  title: {
    default: 'Fourteen',
    template: '%s - Fourteen',
  },
  description:
    'Gallery of open-source projects showcasing clean code and creative solutions',
  authors: [
    {
      name: 'John Deniel Dela Peña',
      url: 'https://www.instagram.com/jaydeeclouds',
    },
  ],
  creator: 'John Deniel Dela Peña',
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Server Components',
    'Shadcn ui',
    'Firebase',
  ],
  openGraph: {
    title: 'Fourteen',
    description:
      'Gallery of open-source projects showcasing clean code and creative solutions',
    images: [
      {
        url: 'https://fourteen-xiv.vercel.app/opengraph-image.png',
        width: 1200,
        height: 630,
      },
    ],
    url: 'https://fourteen-xiv.vercel.app',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fourteen',
    description:
      'Gallery of open-source projects showcasing clean code and creative solutions',
    creator: 'John Deniel Dela Peña',
    images: [
      {
        url: 'https://fourteen-xiv.vercel.app/opengraph-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
