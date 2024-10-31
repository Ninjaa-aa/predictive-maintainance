
import React from 'react';
import Hero from '@/components/hero/Hero'
import Services from '@/components/services/Services'
import StatsPage from '@/components/stats/server/StatsServer';
// import SuccessStories from '@/components/sucessstories/SucessStories';
// import Temp from '@/components/sucessstories/temp'
import Suc from '@/components/sucessstories/server/IndustryBenefits'
// import IndustryBenefitsServer from '@/components/industry-benefits/server/IndustryBenefitsServer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Services />
      <StatsPage />
      <Suc />
      {/* <SuccessStories />
      <Temp /> */}
      {/* <IndustryBenefitsServer /> */}
    </div>
  );
}