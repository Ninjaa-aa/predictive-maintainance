"use client";
import React from 'react';
import Nav from '@/components/navbar/NavbarServer';
import Hero from '@/components/hero/Hero';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <Hero />
      <main className="flex-grow">
        {/* Additional content can be added here in the future */}
      </main>
    </div>
  );
}