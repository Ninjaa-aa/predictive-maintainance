"use client";
import React from 'react';
// import Nav from '@/components/navbar/NavbarServer';
import Hero from '@/components/hero/Hero';
import Services from '@/components/services/Service';
import IndustryBenefits from '@/components/industrybenefit/IndustryBenefit';

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