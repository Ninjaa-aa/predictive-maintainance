// components/industry-benefits/page.tsx
import { industryBenefits } from '@/data/benefit'
import ClientIndustryBenefits from '@/components/industrybenefit/client/ClientIndustryBenefits'
import { BackgroundGrid } from '@/components/industrybenefit/server/BackgroundGrid'
export default function IndustryBenefitsPage() {
  return (
    <section className="py-24 bg-gradient-to-br from-red-50 to-white text-gray-900 overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-bold mb-16 text-center text-red-800 tracking-tight">
          Benefits for Different Industries
        </h2>
        
        <ClientIndustryBenefits initialIndustries={industryBenefits} />
      </div>
      
      <BackgroundGrid />
    </section>
  )
}
