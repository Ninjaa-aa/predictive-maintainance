// app/predictive-maintenance/page.tsx
import { StatsAnimation } from '@/components/stats/client/StatsAnimation';

async function getStats() {
  // Using relative path instead of full URL since it's an internal API route
  const res = await fetch('/api/stats', {
    next: { revalidate: 60 } // Revalidate every minute
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch stats');
  }

  return res.json();
}

export default async function PredictiveMaintenancePage() {
  const { stats } = await getStats();

  return (
    <div className="container mx-auto px-4 py-8">
      <StatsAnimation stats={stats} />
    </div>
  );
}