import ServicesServer from '@/components/services/server/ServicesServer';
import { ServicesClient } from '@/components/services/client/ServicesClient';

export default async function ServicesPage() {
  const { services, headerContent } = await ServicesServer();
  
  return <ServicesClient services={services} headerContent={headerContent} />;
}