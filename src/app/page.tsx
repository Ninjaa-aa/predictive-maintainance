"use client";
import React from 'react';
// import Hero from '@/components/hero/Hero';
import Hero from '@/components/hero/Hero'
import Services from '@/components/services/Services'
import IndustryBenefits from '@/components/industrybenefit/IndutstryBenefits'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Nav /> */}
      <Hero />
      <Services />
      <IndustryBenefits />
    </div>
  );
}