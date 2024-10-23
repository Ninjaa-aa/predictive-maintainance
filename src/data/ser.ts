export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
  }
  
  export const services: Service[] = [
    {
      id: "real-time-monitoring",
      title: "Real-Time Monitoring",
      description: "Continuous equipment health tracking using advanced IoT sensors and AI algorithms.",
      icon: "activity",
    },
    {
      id: "predictive-analytics",
      title: "Predictive Analytics",
      description: "AI-powered failure prediction to prevent downtime and optimize maintenance schedules.",
      icon: "trending-up",
    },
    {
      id: "condition-based-maintenance",
      title: "Condition-Based Maintenance",
      description: "Tailored maintenance plans based on actual equipment condition and performance data.",
      icon: "settings",
    },
    {
      id: "anomaly-detection",
      title: "Anomaly Detection",
      description: "Rapid identification of unusual patterns and potential issues before they escalate.",
      icon: "alert-triangle",
    },
    {
      id: "performance-optimization",
      title: "Performance Optimization",
      description: "Data-driven insights to enhance equipment efficiency and extend asset lifespan.",
      icon: "zap",
    },
    {
      id: "predictive-maintenance-training",
      title: "PM Training & Consultation",
      description: "Expert guidance and training programs to implement effective predictive maintenance strategies.",
      icon: "users",
    },
  ];