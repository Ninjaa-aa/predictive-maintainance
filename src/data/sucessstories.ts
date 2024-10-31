import { LucideIcon, Activity, Cpu, Zap, TrendingUp, Shield, BarChart2 } from 'lucide-react';

export interface SuccessMetric {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface SuccessStory {
  id: string;
  title: string;
  company: string;
  industry: string;
  metrics: {
    headline: {
      value: string;
      label: string;
    };
    stats: SuccessMetric[];
  };
  achievements: string[];
  icon: LucideIcon;
  gradient: {
    from: string;
    to: string;
  };
}

export const successStories: SuccessStory[] = [
  {
    id: 'manufacturing',
    title: 'AI-Powered Manufacturing',
    company: 'Global Automotive Corp',
    industry: 'Advanced Manufacturing',
    metrics: {
      headline: {
        value: '99.98%',
        label: 'System Efficiency'
      },
      stats: [
        { 
          label: 'Uptime', 
          value: '850h+', 
          icon: Activity
        },
        { 
          label: 'Cost Reduction', 
          value: '42%', 
          icon: TrendingUp
        },
        { 
          label: 'AI Accuracy', 
          value: '99.7%', 
          icon: Shield
        }
      ]
    },
    achievements: [
      'Zero unplanned downtime achieved',
      'Predictive maintenance success rate of 99.9%',
      '27% improvement in equipment efficiency'
    ],
    icon: Cpu,
    gradient: {
      from: '#06b6d4',
      to: '#3b82f6'
    }
  },
  {
    id: 'semiconductor',
    title: 'Smart Factory Systems',
    company: 'Precision Electronics',
    industry: 'Semiconductor',
    metrics: {
      headline: {
        value: '99.99%',
        label: 'Yield Rate'
      },
      stats: [
        { 
          label: 'Quality', 
          value: '+32%', 
          icon: Shield
        },
        { 
          label: 'Defect Rate', 
          value: '-92%', 
          icon: BarChart2
        },
        { 
          label: 'Efficiency', 
          value: '98.5%', 
          icon: Zap
        }
      ]
    },
    achievements: [
      'Production losses prevented: €7.8M',
      '40% equipment lifecycle extension',
      '28% resource utilization improvement'
    ],
    icon: Activity,
    gradient: {
      from: '#8b5cf6',
      to: '#6366f1'
    }
  }
];