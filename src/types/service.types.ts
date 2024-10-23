export interface Service {
    id: string;
    name: string;
    description: string;
    icon: string;
    subServices?: Array<{
      name: string;
      description: string;
    }>;
  }