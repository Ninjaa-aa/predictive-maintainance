// types/industry.ts
export interface Benefit {
    title: string;
    description: string;
  }
  
  export interface Industry {
    id: string;
    name: string;
    icon: string;
    benefits: Benefit[];
  }