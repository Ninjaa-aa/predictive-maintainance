// layout.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Predictive Maintenance Solutions',
  description: 'Revolutionizing Industry with Advanced AI and IoT Integration',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}