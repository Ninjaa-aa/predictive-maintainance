export interface CardProps {
  children: React.ReactNode;
  className?: string;
  index: number;
}

export interface IndustryBenefit {
  industry: string;
  category: string;
  icon: string;
  company: string;
  metrics: {
    primary: string;
    context: string;
  };
  implementation: string[];
  impact: string;
}

export interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  life: number;
  opacity: number;
  update: () => void;
  draw: () => void;
}