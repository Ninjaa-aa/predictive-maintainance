// components/client/ProgressBar.tsx
'use client';

interface ProgressBarProps {
  count: number;
  maxValue: number;
}

export function ProgressBar({ count, maxValue }: ProgressBarProps) {
  return (
    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-red-50 
                  group-hover:bg-red-200/50">
      <div 
        className="h-full bg-gradient-to-r from-red-400 to-red-500 
                  group-hover:from-red-500 group-hover:to-red-600 
                  transition-all duration-1000 ease-out relative overflow-hidden"
        style={{ 
          width: `${(count / (maxValue * 1.2)) * 100}%`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent 
                      via-white/30 to-transparent animate-shimmer" />
      </div>
    </div>
  );
}