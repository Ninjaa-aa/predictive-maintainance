"use client";
import React from 'react';
import Hero from '@/components/hero/Hero'
import Services from '@/components/services/Services'
// import IndustryBenefits from '@/components/industrybenefit/IndutstryBenefits'
// import StatsPage from '@/components/stats/page';
import StatsPage from '@/components/stats/temp';
import SuccessStories from '@/components/sucessstories/SucessStories';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Nav /> */}
      <Hero />
      <Services />
      <StatsPage />
      {/* <IndustryBenefits /> */}
      <SuccessStories />
      {/* <Footer /> */}
    </div>
  );
}