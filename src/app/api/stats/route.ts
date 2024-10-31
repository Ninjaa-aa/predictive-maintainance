// app/api/stats/route.ts
import { NextResponse } from 'next/server';
import { predictiveMaintStats } from '@/data/stats';

export async function GET() {
  // Simulate database delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return NextResponse.json({ stats: predictiveMaintStats });
}