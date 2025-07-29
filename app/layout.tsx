import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Phoenix Web Upgrades - Modern Website Solutions for Local Businesses',
  description: 'Professional website upgrade services for Phoenix businesses. Transform your online presence with modern design, better performance, and increased conversions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}