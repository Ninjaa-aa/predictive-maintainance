// types/services.ts
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ClientServicesProps {
  services: Service[];
}