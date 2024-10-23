import { Suspense } from 'react';
import { services } from '@/data/service';
import ClientInsightAIServices from '@/components/services/client/ClientAIServicesPage';
import ServicesGrid from '@/components/services/server/ServiceGrid';
import ClientAnimatedBackground from '@/components/services/client/ClientAnimationBackground';

export default async function InsightAIServicesPage() {
  return (
    <section className="relative min-h-screen overflow-x-hidden">
      {/* Animated Background */}
      <ClientAnimatedBackground />

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen bg-white/50 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-24">
          {/* Static Header */}
          <div className="text-center mb-20">
            <span className="px-4 py-1.5 text-sm font-medium text-blue-600 rounded-full 
                           border border-blue-200/60 bg-blue-50/50 inline-block mb-6
                           shadow-[0_2px_10px_rgb(0,0,0,0.03)]">
              AI-Powered Solutions
            </span>
            
            <h1 className="text-6xl font-bold mt-6 mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r 
                             from-blue-600 via-blue-500 to-red-500">
                Insight AI Services
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Next-generation AI solutions powering the future of enterprise technology
            </p>
          </div>

          <Suspense fallback={<div>Loading services...</div>}>
            <ClientInsightAIServices>
              <ServicesGrid services={services} />
            </ClientInsightAIServices>
          </Suspense>
        </div>
      </div>
    </section>
  );
}