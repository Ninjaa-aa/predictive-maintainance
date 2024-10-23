// components/ServicesGrid.tsx (Server Component)
import { Service } from '@/types/service.types';
import ClientServiceCard from '@/components/services/client/ClientServiceCard';

interface Props {
  services: Service[];
  onServiceSelect?: (service: Service) => void;
}

export default function ServicesGrid({ services, onServiceSelect }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <ClientServiceCard
          key={service.id}
          service={service}
          index={index}
          onSelect={onServiceSelect}
        />
      ))}
    </div>
  );
}