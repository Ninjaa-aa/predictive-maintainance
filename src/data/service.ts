import { Activity, TrendingUp, Settings, AlertTriangle, Zap, Users } from 'lucide-react'

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: 'activity' | 'trending-up' | 'settings' | 'alert-triangle' | 'zap' | 'users';
}

export const iconComponents = {
  'activity': Activity,
  'trending-up': TrendingUp,
  'settings': Settings,
  'alert-triangle': AlertTriangle,
  'zap': Zap,
  'users': Users,
} as const;

export const services: Service[] = [
  {
    id: '1',
    title: 'Real-time Monitoring',
    description: 'Monitor equipment performance with advanced IoT sensors and real-time data streaming. Track vibration, temperature, pressure, and power consumption patterns 24/7.',
    icon: 'activity'
  },
  {
    id: '2',
    title: 'Predictive Analytics',
    description: 'Leverage machine learning algorithms to analyze historical data and predict equipment failures weeks in advance. Identify patterns and anomalies before they become critical issues.',
    icon: 'trending-up'
  },
  {
    id: '3',
    title: 'Smart Maintenance',
    description: 'Implement AI-driven maintenance schedules that adapt to actual equipment usage and conditions. Reduce downtime by up to 50% while extending asset lifetime.',
    icon: 'settings'
  },
  {
    id: '4',
    title: 'Early Warning System',
    description: 'Receive intelligent alerts based on complex pattern recognition. Our system detects subtle changes in equipment behavior and notifies teams before failures occur, prioritizing alerts by severity.',
    icon: 'alert-triangle'
  },
  {
    id: '5',
    title: 'Performance Optimization',
    description: 'Optimize equipment performance using digital twin technology and real-time analytics. Monitor KPIs, energy efficiency, and production metrics to maximize operational excellence.',
    icon: 'zap'
  },
  {
    id: '6',
    title: 'Team Collaboration',
    description: 'Enable cross-functional teams to collaborate seamlessly with mobile-first maintenance platforms. Share insights, coordinate responses, and track maintenance history in real-time.',
    icon: 'users'
  }
];