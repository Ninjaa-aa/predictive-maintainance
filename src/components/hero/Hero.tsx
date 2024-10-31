// page.tsx
import AnimatedHero from '@/components/hero/client/AnimatedHero'
import { HeroContent } from '@/components/hero/client/HeroContent'

export default function Page() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-200 via-red-100 to-blue-50">
      <div className="absolute inset-0 bg-red-900/10 z-0"></div>
      <AnimatedHero>
        <HeroContent />
      </AnimatedHero>
    </div>
  )
}   