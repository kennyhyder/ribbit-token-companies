import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hyder Media Opportunity Framework',
  description: 'Comprehensive analysis of 150+ companies mentioned in the Ribbit Capital Token Letter, exploring the Token Revolution transforming AI, finance, and every industry.',
  openGraph: {
    title: 'Hyder Media Opportunity Framework',
    description: 'Explore 150+ companies driving the Token Revolution',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  )
}
