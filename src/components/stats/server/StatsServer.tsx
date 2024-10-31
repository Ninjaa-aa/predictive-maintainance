// StatsServer.tsx
import { Stat } from '@/types/stats.types';
import { StatsClient } from '@/components/stats/client/StatsClient';
import { predictiveMaintStats } from '@/data/stats';

export default function StatsServer() {
  // This could be fetched from an API or database in a real application
  const stats: Stat[] = predictiveMaintStats;
  
  return (
    <div className="w-full p-8 bg-gradient-to-br from-white via-slate-50/40 to-red-50/40 rounded-2xl relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" 
            viewBox="0 0 100 100" 
            preserveAspectRatio="xMidYMid slice">
          <pattern id="modernGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M20 0L0 0L0 20" stroke="rgb(239, 68, 68)" strokeWidth="0.2" fill="none"/>
            <path d="M0 20L20 20L20 0" stroke="rgb(239, 68, 68)" strokeWidth="0.2" fill="none"/>
          </pattern>
          <rect x="0" y="0" width="100" height="100" fill="url(#modernGrid)" />
        </svg>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-3 px-6 py-2 rounded-full bg-white/80 text-red-600 text-sm font-medium backdrop-blur-sm border border-red-100 shadow-sm">
            AI-Powered Predictive Maintenance
          </div>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-rose-500 mb-2">
            Real-Time Performance Metrics
          </h2>
          <div className="flex items-center justify-center mt-3 space-x-2">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span className="text-sm text-red-600/80">Live System Analysis</span>
          </div>
        </div>

        <StatsClient stats={stats} />
      </div>
    </div>
  );
}