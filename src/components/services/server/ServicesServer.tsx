// services/server/ServicesServer.tsx
import { services } from '@/data/service';

export default async function ServicesServer() {
  return {
    services,
    headerContent: {
      tag: "Industry 4.0 Solutions",
      title: "Predictive Maintenance Services",
      description: "Transform your maintenance strategy with AI-powered insights"
    }
  };
}